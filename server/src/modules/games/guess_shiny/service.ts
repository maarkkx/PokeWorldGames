import * as repository from './repository';
import * as expManager from '../experience_manager/manager';
import { GameStatus } from '../../../../generated/prisma';

const XP_FOR_SHINY = 100; //xp por adivinar el shiny

//start game
export async function startShinyGame(userId: number) {
  if (!userId) {
    throw new Error('User ID is required');
  }

  //Comprobar si el usuario ya tiene una partida activa
  const activeGame = await repository.getActiveShinyGameByUserId(userId);
  if (activeGame) {
    throw new Error('You already have an active game');
  }

  //conseguir un pokemon random
  const pokemon = await repository.getRandomShinyPokemon();
  if (!pokemon) {
    throw new Error('Error getting shiny Pokémon');
  }

  //elegir la posicion donde estara la foto correcta
  const correctPosition = Math.floor(Math.random() * 4) + 1;

  //crear una partida en la bd
  const game = await repository.createShinyGame(userId, pokemon.id, correctPosition);



  return {
    gameId: game.gameId,
    imageUrl: pokemon.urlShinyImage,
    correctPosition,//posicion para que el frontend ponga la foto ahi
  };
}


//comprobar respuestas
export async function answerShinyGame(userId: number, selectedPosition: number) {
	//comprobar que los parametros son correctos
  if (!userId) {
 		throw new Error('User ID is required');
	}
  if (!selectedPosition){
 		throw new Error('Selected position is required');
	}

  let gameInfo = await repository.getGameIdByUserId(userId)
  let gameId;
  if (!gameInfo) {
    throw new Error('There is no active game')
  } else {
    gameId = gameInfo.gameId;
  }
  
	//comprobaciones de la partida
  const game = await repository.getShinyGameById(gameId);
  if (!game) {
		throw new Error('Game not found');
	}
  if (game.userId !== userId) {
		throw new Error('Not your game');
	} 
  if (game.status !== 'ACTIVE') {
		return { message: 'Game already finished', status: game.status };
	} 
	
	const pokemon = await repository.getPokemonById(game.pokemonId);
	const pokemonUrl = pokemon?.urlShinyImage;

  if (!pokemonUrl) {
		throw new Error('Pokémon not found');
	}

  let status: GameStatus = 'ACTIVE';
  let xpEarned = 0;

	//comprobamos si la respuesta es correcta
  if (selectedPosition === game.correctPosition) {
    status = 'WON';

		//añadimos la xp por ganar
    xpEarned = XP_FOR_SHINY;
    await expManager.addXP(userId, xpEarned);

		//hacemos update de la partida para añadirle que ya esta completada
    await repository.updateShinyGame(gameId, {
      status,
			lastGuess: String(selectedPosition),
      xpEarned,
    });

    return {
      message: 'Correct!',
      status,
      xpEarned,
    };
  } else {
    status = 'LOST';
    await repository.updateShinyGame(gameId, { 
			status,
			lastGuess: String(selectedPosition),
      xpEarned,
		 });

    return {
      message: 'Incorrect, you lost the game!',
      status,
      xpEarned: 0,
    };
  }
}