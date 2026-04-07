import * as repository from "./repository";
import * as types from "../constants/types"
import * as expManager from "../experience_manager/manager";

//Relacion dificultad vidas
const livesDifficults : Record<string, number> = {
  'hard': 1,
  'medium': 2,
  'easy': 3
}

//----------------------------------------------------
//----------Funciones para empezar la partida----------
//----------------------------------------------------

export async function startGame(userId: number, difficult: string): Promise<object> {
  try {
    //validacion de que la dificultad no esta vacia
    if (!difficult) {
      throw new Error("No difficulty selected");
    }

    //validacion de que la dificultad existe
    if (!(difficult in livesDifficults)) {
      console.log(livesDifficults);
      console.log(difficult); 
      throw new Error('Difficulty does not exist');
    }

    //crear nou pokemon
    const pokemon: types.Pokemon = await repository.getRandomPokemon();
    if (!pokemon) {
      throw new Error('Error getting pokemon')
    }

    //llamar funcion de dificultad
    const lives = livesDifficults[difficult];

    //comprobar si el usuario tiene una partida activa
    const activeGame = await repository.getActiveGameByUserId(userId);
    if (activeGame) {
      throw new Error('You already have an active game');
    }
    //crear partida
    const game = await repository.createGame(userId, pokemon.id, lives)

    return {
      gameId: game.gameId,
      image: pokemon.urlImage,
      lives: game.remainingAttempts
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
export async function manageAnswer(userId: number, gameId: string, answer: string) {

//------------------------
//-----Comprobaciones-----
//------------------------
  //check de los inputs:
  if (!gameId) {
    throw new Error('Game ID is null');
  }
  if (!userId) {
    throw new Error('User Id is null')
  }
  //veure la partida
  const game = await repository.getGameById(gameId);

  //comprobar si existe la partida
  if (!game) {
    throw new Error('Game not found');
  }

  //comporbar si el usuario de la partida
  if (game.userId !== userId) {
    throw new Error('Not your game');
  }

  //comprobar que la partida esta activa
  if (game.status !== 'ACTIVE') {
    return { message: 'Game already finished', status: game.status };
  }

//------------------------
//-----Check Respuesta-----
//------------------------

  const pokemon = await repository.getPokemonNameById(game.pokemonId);

  //comprobar que el pokemon
  if (!pokemon) {
    throw new Error('Pokemon not found');
  }

  //check respuesta
  const isCorrect = answer.toLowerCase() === pokemon.name.toLowerCase();

//------------------------
//-----Datos partida------
//------------------------

  let remainingAttempts = game.remainingAttempts - (isCorrect ? 0 : 1); //restar vidas si es false
  let status: types.GameStatus = 'ACTIVE';
  let xpEarned = 0;

//------------------------
//--------Resultado--------
//------------------------

  if (isCorrect) {
    status = 'WON';

    //calcular experiencia segun dificultad
    xpEarned = calculateXP(game.maxAttempts, game.remainingAttempts);

    //añadir la experiencia al usuario
    await expManager.addXP(userId, xpEarned);

  } else if (remainingAttempts <= 0) {
    status = 'LOST';
  }

//------------------------
//-----Actualizar DB------
//------------------------

  //actualizar los datos de la partida
  await repository.updateGame(gameId, {
    remainingAttempts,
    lastGuess: answer,
    status,
    xpEarned: xpEarned
  });

  return {
    message: isCorrect ? 'Correct answer!' : 'Incorrect answer',
    remainingAttempts,
    status,
    xpEarned
  };
}

//----------------------------------------------------
//-----------Funciones de experiencia------------------
//----------------------------------------------------

function calculateXP(maxAttempts : number, remainingAttempts : number): number {
  switch (maxAttempts) {
    case 3: 
      return 50 + 10 * remainingAttempts; //easy

    case 2: 
      return 100 + 20 * remainingAttempts; //medium

    case 1: 
      return 250;  //hard

    default: 
      return 0;
  }
}