import { diff } from "node:util";
import * as repository from "./repository";

//Relacion dificultad vidas
const livesDifficults : Record<string, number> = {
  'hard': 1,
  'medium': 2,
  'easy': 3
}

//Pokemon
type Pokemon = {
  id: number;
  name: string;
  urlImage: string | null;
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  speed: number;
  types: any[];
}

let pokemon : Pokemon;

//vidas
let lives : number;

async function randomPokemon() {
  try {
    pokemon = await repository.getRandomPokemon();
  } catch {
    console.log('Error getting pokemon')
  }

}

//----------------------------------------------------
//----------Funciones para empezar la partida----------
//----------------------------------------------------

export async function startGame(difficult: string): Promise<object> {
  await randomPokemon();
  try {
    //validacion de que la dificultad no esta vacia
    if (!difficult) {
      throw new Error("No difficulty selected");
    }

    //validacion de que la dificultad existe
    let difficulties: String[] = ["easy", "medium", "hard"]; //dificultades disponibles
    if (!difficulties.includes(difficult)) {
      throw new Error("Difficulty does not exist");
    }

    //llamar funcion de dificultad
    placeLives(difficult);

    let challenge = {
        image: pokemon.urlImage, //url de la imagen del pokemon en la api
        lives //intentos
    }
    return challenge;
  } catch (error) {
    let errorMessage = {
      message: error,
    };
    console.log(error);
    return errorMessage;
  }
}

async function placeLives(difficult: string) {
  lives = livesDifficults[difficult];
}

//----------------------------------------------------
//-----------Funciones para las respuestas------------
//----------------------------------------------------
export function manageAnswer(answer : string) {
  if (lives <= 0) {
    return {
      message: 'No tries remaining',
      lives
    }
  }
  if (checkAnswer(answer)) {
    return {
      message: 'Correct answer!',
      lives
    }
  } else {
    lives--;
    return {
      message: 'Incorrect answer',
      lives
    }
  }
}

function checkAnswer(answer: string) : boolean {
	if (answer.toLowerCase() == pokemon.name) {
    return true
  } else {
    return false
  }
}
