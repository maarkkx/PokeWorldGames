import { Request, Response, NextFunction } from 'express';
import * as service from './service';
import * as repository from './repository';
import { diff } from 'util';

//funcion para testear
export const getRandomPokemon = async (_req: Request, res: Response, next: NextFunction
) => {
  try {
    const pokemon = await repository.getRandomPokemon(); //get del pokemon
    if (!pokemon) { //comprobar que consiga un pokemon
      return res.status(404).json({
        message: 'Error getting pokemon',
      });
    }

    return res.json(pokemon);
  } catch (error) {
    next(error);
  }
};


export async function startGame(req: Request, res: Response) {
  try {
    const difficult = req.body.difficult; //Guardar la ificultad del la request
    const userId = req.body.userId; //guardar el userid

    const challenge = await service.startGame(userId, difficult);

    res.status(200).json({
      message: 'Game started successfully',
      data: challenge
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}

export async function answerGame(req: Request, res: Response) {
  try {
    const answer = req.body.answer;
    const userId = req.body.userId;
    const gameId = req.body.gameId;
    
    const response = await service.manageAnswer(userId, gameId, answer);

    res.status(200).json({
      response
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}
