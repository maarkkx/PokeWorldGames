import { diff } from 'node:util';
import * as repository from './repository'

async function startGame(difficult : string) {
    try {
        //validacion de que la dificultad no esta vacia
        if (!difficult) {
            throw new Error("No difficulty selected")
        }

        //validacion de que la dificultad existe
        let difficulties : String[] = ["easy", "medium", "hard"] //dificultades disponibles
        if (!difficulties.includes(difficult)) {
            throw new Error('Difficulty does not exist');
        }

        //llamar funciones de dificultades
        switch (difficult) {
            case 'easy':
                startGameEasy()
                break;
        
            case 'medium':
                startGameMedium()
                break;

            case 'hard':
                startGameHard()
                break;    
        }

    } catch (error) {
        console.log(error)
    }
}

function startGameEasy() {

}

function startGameMedium() {
    
}

function startGameHard() {
    
}