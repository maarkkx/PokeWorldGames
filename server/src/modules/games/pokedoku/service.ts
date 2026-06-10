import * as expManager from '../experience_manager/manager';
import {
  CELL_COUNT,
  MAX_LIVES,
  calculatePokedokuXp,
} from './constants';
import { generatePuzzle, pokemonMatchesCellConditions, type PuzzleCondition } from './puzzle_generator';
import * as repository from './repository';
import type { GameWithCells } from './repository';

type ConditionDTO = {
  type: string;
  value: string;
};

type CellDTO = {
  position: number;
  answered: boolean;
  correct?: boolean;
  pokemon: {
    id: number;
    name: string;
    urlImage: string | null;
  } | null;
};

//Guarda las casillas correctas y incorrectas
function countWrongFromCells(cells: GameWithCells['cells']): number {
  return cells.filter((cell) => cell.answerPokemonId != null && cell.isCorrect === false).length;
}

function countCorrectFromCells(cells: GameWithCells['cells']): number {
  return cells.filter((cell) => cell.isCorrect === true).length;
}

//Construir las cabeceras de cada fila
function extractRowsFromCells(cells: GameWithCells['cells']): ConditionDTO[] {
  return [1, 4, 7].map((position) => {
    const cell = cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Invalid puzzle cells');
    }

    return {
      type: cell.rowConditionType,
      value: cell.rowConditionValue,
    };
  });
}

//Construir las cabeceras de cada columna
function extractColumnsFromCells(cells: GameWithCells['cells']): ConditionDTO[] {
  return [1, 2, 3].map((position) => {
    const cell = cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Invalid puzzle cells');
    }

    return {
      type: cell.columnConditionType,
      value: cell.columnConditionValue,
    };
  });
}

//transforma la celda al formato del frontend
function mapCellToDTO(cell: GameWithCells['cells'][number]): CellDTO {
  const answered = cell.answerPokemonId != null;

  return {
    position: cell.position,
    answered,
    ...(answered ? { correct: cell.isCorrect ?? false } : {}),
    pokemon: cell.answerPokemon
      ? {
          id: cell.answerPokemon.id,
          name: cell.answerPokemon.name,
          urlImage: cell.answerPokemon.urlImage,
        }
      : null,
  };
}

//object para el frontend con todo el game
function buildGamePayload(game: GameWithCells) {
  const usedPokemonIds = game.cells
    .map((cell) => cell.answerPokemonId)
    .filter((pokemonId): pokemonId is number => pokemonId != null);

  const wrongCount = countWrongFromCells(game.cells);
  const correctCount = countCorrectFromCells(game.cells);

  return {
    gameId: game.gameId,
    status: game.status,
    rows: extractRowsFromCells(game.cells), //3 condiciones
    columns: extractColumnsFromCells(game.cells), //3 condiciones
    cells: game.cells.map(mapCellToDTO), //las 9 cells
    usedPokemonIds,
    remainingLives: MAX_LIVES - wrongCount,
    correctCount,
  };
}

//fguncion para coger las condiciones de una celda
function getCellConditions(cell: GameWithCells['cells'][number]): {
  row: PuzzleCondition;
  column: PuzzleCondition;
} {
  return {
    row: {
      type: cell.rowConditionType,
      value: cell.rowConditionValue,
    },
    column: {
      type: cell.columnConditionType,
      value: cell.columnConditionValue,
    },
  };
}

async function finalizeGame(
  gameId: string,
  gameInternalId: number,
  userId: number,
): Promise<{
  status: 'WON' | 'LOST';
  xpEarned: number;
  correctCount: number;
  remainingLives: number;
}> {
  //count de los aciertos y fallos
  const correctCount = await repository.countCorrectCells(gameInternalId);
  const wrongCount = await repository.countWrongCells(gameInternalId);

  //calcula la experiencia llamando a la funcion
  const xpEarned = calculatePokedokuXp(correctCount);

  //update del status
  const status = correctCount === CELL_COUNT ? 'WON' : 'LOST';
  await repository.updateGameStatus(gameId, {
    status,
    xpEarned,
  });

  //añade la xp
  if (xpEarned > 0) {
    await expManager.addXP(userId, xpEarned);
  }

  return {
    status,
    xpEarned,
    correctCount,
    remainingLives: MAX_LIVES - wrongCount,
  };
}

export async function startGame(userId: number): Promise<object> {
  //comprueba si ya hay un game activo
  try {
    const activeGame = await repository.getActiveGameByUserId(userId);
    if (activeGame) {
      throw new Error('You already have an active game');
    }

    const puzzle = await generatePuzzle();
    const game = await repository.createGameWithCells(userId, puzzle);

    return buildGamePayload(game);
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}

export async function resumeGame(userId: number): Promise<object> {
  try {
    const activeGame = await repository.getActiveGameByUserId(userId);
    if (!activeGame) {
      return { message: 'There is no active game' };
    }

    const game = await repository.getGameWithCellsByGameId(activeGame.gameId);
    if (!game) {
      throw new Error('Game not found');
    }

    return buildGamePayload(game);
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}

export async function searchPokemonForCell(
  userId: number,
  gameId: string,
  position: number,
  query: string,
): Promise<object> {
  try {
    //comprueba que hayan 2 caracteres o mas para hacer la busqueda
    const trimmed = query?.trim();
    if (!trimmed || trimmed.length < 2) {
      return { names: [] };
    }

    //comprueba que la posicion de la casilla exista
    if (!Number.isInteger(position) || position < 1 || position > CELL_COUNT) {
      throw new Error('Invalid cell position');
    }

    //comprobaciones de la partida
    const game = await repository.getGameWithCellsByGameId(gameId);
    if (!game) {
      throw new Error('Game not found');
    }
    if (game.userId !== userId) {
      throw new Error('Not your game');
    }
    if (game.status !== 'ACTIVE') {
      throw new Error('Game already finished');
    }

    const cell = game.cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Cell not found');
    }

    if (cell.answerPokemonId != null) {
      throw new Error('Cell already answered');
    }

    //eliminar pokemons usados en el game
    const excludeIds = await repository.getUsedPokemonIds(game.id);

    //buscar el pokemons con las 2 letras excluyendo los ya utilizados
    const results = await repository.searchPokemonByName(trimmed, excludeIds, 8);

    //devuelve los 8 primeros pokemons
    return {
      names: results.map((pokemon) => pokemon.name),
      pokemons: results,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}

export async function submitAnswer(
  userId: number,
  gameId: string,
  position: number,
  pokemonId: number,
): Promise<object> {
  try {
    //comprobaciones
    if (!Number.isInteger(position) || position < 1 || position > CELL_COUNT) {
      throw new Error('Invalid cell position');
    }
    if (!Number.isInteger(pokemonId) || pokemonId < 1) {
      throw new Error('Invalid pokemon id');
    }
    const game = await repository.getGameWithCellsByGameId(gameId);
    if (!game) {
      throw new Error('Game not found');
    }
    if (game.userId !== userId) {
      throw new Error('Not your game');
    }
    if (game.status !== 'ACTIVE') {
      return { message: 'Game already finished', status: game.status };
    }
    const cell = game.cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Cell not found');
    }
    if (cell.answerPokemonId != null) {
      throw new Error('Cell already answered');
    }
    const usedPokemonIds = await repository.getUsedPokemonIds(game.id);
    if (usedPokemonIds.includes(pokemonId)) {
      throw new Error('Pokemon already used in this game');
    }
    const pokemon = await repository.getPokemonById(pokemonId);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }

    //get de las condiciones de las casillas
    const { row, column } = getCellConditions(cell);
    //comprueba que el pokemon cumpla los requisitos
    const isCorrect = await pokemonMatchesCellConditions(pokemonId, row, column);
    const answeredAt = new Date();

    await repository.updateCellAnswer(cell.id, {
      answerPokemonId: pokemonId,
      isCorrect,
      answeredAt,
    });

    const answeredCount = await repository.countAnsweredCells(game.id);
    const wrongCount = await repository.countWrongCells(game.id);
    const remainingLives = MAX_LIVES - wrongCount;

    if (answeredCount >= CELL_COUNT) {
      const result = await finalizeGame(gameId, game.id, userId);

      return {
        message: isCorrect ? 'Correct!' : 'Incorrect answer',
        position,
        status: result.status,
        xpEarned: result.xpEarned,
        correct: isCorrect,
        correctCount: result.correctCount,
        remainingLives: result.remainingLives,
        pokemon,
      };
    }

    if (!isCorrect) {
      return {
        message: 'Incorrect answer',
        position,
        status: 'ACTIVE',
        xpEarned: 0,
        correct: false,
        correctCount: await repository.countCorrectCells(game.id),
        remainingLives,
        pokemon,
      };
    }

    return {
      message: 'Correct!',
      position,
      status: 'ACTIVE',
      xpEarned: 0,
      correct: true,
      correctCount: await repository.countCorrectCells(game.id),
      remainingLives,
      pokemon,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}
