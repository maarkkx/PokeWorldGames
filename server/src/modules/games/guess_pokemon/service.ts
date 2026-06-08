import * as repository from "./repository";
import * as types from "../constants/types"
import * as expManager from "../experience_manager/manager";
import {
  applyInfiniteMilestone,
  getInfiniteMultiplier,
  getStreakFromGame,
  INFINITE_BASE_XP_PER_CORRECT,
  INFINITE_LIVES,
  INFINITE_MARKER_MAX_ATTEMPTS,
  isInfiniteGame,
} from "./infinite";

//Relacion dificultad vidas
const livesDifficults: Record<string, number> = {
  'infinite': INFINITE_MARKER_MAX_ATTEMPTS,
  'hard': 1,
  'medium': 2,
  'easy': 3,
}

function buildStartPayload(
  difficult: string,
  gameId: string,
  image: string | null,
  lives: number,
) {
  return {
    gameId,
    image,
    lives,
    maxAttempts: lives,
    mode: difficult === 'infinite' ? 'infinite' : 'classic',
    ...(difficult === 'infinite'
      ? { streak: 0, pendingXp: 0, multiplier: 1 }
      : {}),
  };
}

//----------------------------------------------------
//----------Funciones para empezar la partida----------
//----------------------------------------------------

export async function startGame(userId: number, difficult: string): Promise<object> {
  try {
    if (!difficult) {
      throw new Error("No difficulty selected");
    }
    if (!(difficult in livesDifficults)) {
      throw new Error('Difficulty does not exist');
    }

    const pokemon: types.Pokemon = await repository.getRandomPokemon();
    if (!pokemon) {
      throw new Error('Error getting pokemon')
    }

    const lives = livesDifficults[difficult];

    const activeGame = await repository.getActiveGameByUserId(userId);
    if (activeGame) {
      throw new Error('You already have an active game');
    }

    const game = await repository.createGame(userId, pokemon.id, lives);

    if (difficult === 'infinite') {
      await repository.updateGame(game.gameId, {
        lastGuess: '0',
        xpEarned: 0,
      });
    }

    return buildStartPayload(
      difficult,
      game.gameId,
      pokemon.urlImage,
      game.remainingAttempts,
    );
  } catch (error) {
    let errorMessage = {
      message: error instanceof Error ? error.message : error
    };
    console.log(error);
    return errorMessage;
  }
}

//----------------------------------------------------
//----------Funciones para reanudar la partida----------
//----------------------------------------------------

export async function resumeGame(userId: number): Promise<object> {
  try {
    const activeGame = await repository.getActiveGameWithPokemonByUserId(userId);

    if (!activeGame) {
      return { message: 'There is no active game' };
    }

    if (!activeGame.pokemon?.urlImage) {
      throw new Error('Error getting pokemon');
    }

    const infinite = isInfiniteGame(activeGame.maxAttempts);
    const streak = infinite ? getStreakFromGame(activeGame.lastGuess) : undefined;
    const pendingXp = infinite ? (activeGame.xpEarned ?? 0) : undefined;

    return {
      gameId: activeGame.gameId,
      image: activeGame.pokemon.urlImage,
      lives: activeGame.remainingAttempts,
      maxAttempts: activeGame.maxAttempts,
      mode: infinite ? 'infinite' : 'classic',
      ...(infinite
        ? {
          streak,
          pendingXp,
          multiplier: getInfiniteMultiplier(streak ?? 0),
        }
        : {}),
    };
  } catch (error) {
    let errorMessage = {
      message: error instanceof Error ? error.message : error
    };
    console.log(error);
    return errorMessage;
  }
}

//----------------------------------------------------
//-----------Funciones para las respuestas------------
//----------------------------------------------------

export async function manageAnswer(userId: number, answer: string) {
  if (!userId) {
    throw new Error('User Id is null')
  }

  const gameInfo = await repository.getGameIdByUserId(userId);
  if (!gameInfo) {
    throw new Error('There is no active game')
  }

  const gameId = gameInfo.gameId;
  const game = await repository.getGameById(gameId);

  if (!game) {
    throw new Error('Game not found');
  }

  if (game.userId !== userId) {
    throw new Error('Not your game');
  }

  if (game.status !== 'ACTIVE') {
    return { message: 'Game already finished', status: game.status };
  }

  const pokemon = await repository.getPokemonNameById(game.pokemonId);
  if (!pokemon) {
    throw new Error('Pokemon not found');
  }

  const isCorrect = answer.toLowerCase() === pokemon.name.toLowerCase();
  const infinite = isInfiniteGame(game.maxAttempts);

  //------------------------
  //----- Modo infinito -----
  //------------------------
  if (infinite) {
    if (!isCorrect) {
      await repository.updateGame(gameId, {
        remainingAttempts: 0,
        lastGuess: answer,
        status: 'LOST',
        xpEarned: 0,
      });

      return {
        message: 'Incorrect answer',
        remainingAttempts: 0,
        status: 'LOST',
        xpEarned: 0,
        pendingXpLost: game.xpEarned ?? 0,
        mode: 'infinite',
        pokemonName: pokemon.name,
        streak: getStreakFromGame(game.lastGuess),
      };
    }

    const oldStreak = getStreakFromGame(game.lastGuess);
    const newStreak = oldStreak + 1;
    let pendingXp = game.xpEarned ?? 0;
    pendingXp = applyInfiniteMilestone(pendingXp, oldStreak, newStreak);
    const multiplier = getInfiniteMultiplier(newStreak);
    const roundXp = Math.floor(INFINITE_BASE_XP_PER_CORRECT * multiplier);
    pendingXp += roundXp;

    const nextPokemon = await repository.getRandomPokemon();
    if (!nextPokemon?.urlImage) {
      throw new Error('Error getting pokemon');
    }

    await repository.updateGame(gameId, {
      pokemonId: nextPokemon.id,
      remainingAttempts: INFINITE_LIVES,
      lastGuess: String(newStreak),
      status: 'ACTIVE',
      xpEarned: pendingXp,
    });

    return {
      message: 'Correct answer!',
      remainingAttempts: INFINITE_LIVES,
      status: 'ACTIVE',
      xpEarned: 0,
      mode: 'infinite',
      streak: newStreak,
      pendingXp,
      multiplier,
      roundXp,
      image: nextPokemon.urlImage,
    };
  }

  //------------------------
  //----- Modos clasicos -----
  //------------------------

  let remainingAttempts = game.remainingAttempts - (isCorrect ? 0 : 1);
  let status: types.GameStatus = 'ACTIVE';
  let xpEarned = 0;

  if (isCorrect) {
    status = 'WON';
    xpEarned = calculateXP(game.maxAttempts, game.remainingAttempts);
    await expManager.addXP(userId, xpEarned);
  } else if (remainingAttempts <= 0) {
    status = 'LOST';
  }

  await repository.updateGame(gameId, {
    remainingAttempts,
    lastGuess: answer,
    status,
    xpEarned: xpEarned,
  });

  const revealName = status === 'WON' || status === 'LOST';

  return {
    message: isCorrect ? 'Correct answer!' : 'Incorrect answer',
    remainingAttempts,
    status,
    xpEarned,
    mode: 'classic',
    ...(revealName ? { pokemonName: pokemon.name } : {}),
  };
}

//----------------------------------------------------
//----------Cobrar XP y salir del modo infinito----------
//----------------------------------------------------

export async function cashOutInfiniteGame(userId: number): Promise<object> {
  try {
    const gameInfo = await repository.getGameIdByUserId(userId);
    if (!gameInfo) {
      throw new Error('There is no active game');
    }

    const game = await repository.getGameById(gameInfo.gameId);
    if (!game) {
      throw new Error('Game not found');
    }

    if (!isInfiniteGame(game.maxAttempts)) {
      throw new Error('Not an infinite mode game');
    }

    if (game.status !== 'ACTIVE') {
      throw new Error('Game already finished');
    }

    const pendingXp = game.xpEarned ?? 0;
    const streak = getStreakFromGame(game.lastGuess);

    if (pendingXp > 0) {
      await expManager.addXP(userId, pendingXp);
    }

    await repository.updateGame(game.gameId, {
      status: 'WON',
      remainingAttempts: INFINITE_LIVES,
    });

    return {
      status: 'WON',
      xpEarned: pendingXp,
      streak,
      mode: 'infinite',
      message: 'Infinite run cashed out successfully',
    };
  } catch (error) {
    let errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}

//----------------------------------------------------
//----------Buscar nombres de pokemon (autocomplete)-----
//----------------------------------------------------

export async function searchPokemonNames(query: string): Promise<object> {
  try {
    const trimmed = query?.trim();

    if (!trimmed || trimmed.length < 2) {
      return { names: [] };
    }

    const results = await repository.searchPokemonByName(trimmed, 8);

    return {
      names: results.map((pokemon) => pokemon.name),
    };
  } catch (error) {
    let errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}

//----------------------------------------------------
//-----------Funciones de experiencia------------------
//----------------------------------------------------

function calculateXP(maxAttempts: number, remainingAttempts: number): number {
  switch (maxAttempts) {
    case 3:
      return 50 + 10 * remainingAttempts;

    case 2:
      return 100 + 20 * remainingAttempts;

    case 1:
      return 250;

    default:
      return 0;
  }
}
