import { Request, Response, NextFunction } from 'express';
import * as service from './service';
import * as repository from './repository';
import { diff } from 'util';
import jwt from 'jsonwebtoken';
import * as envs from '../../../config/envs';

//funcion para testear
export const getRandomPokemon = async (_req: Request, res: Response, next: NextFunction) => {
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
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: 'Token not provided'
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Invalid token format'
      });
    }

    const decoded = jwt.verify(token, envs.envs.JWT_SECRET) as {
      id: number;
    };

    const userId = decoded.id; //guardar el userid
    const difficult = req.body.difficult; //Guardar la ificultad del la request


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


export async function resumeGame(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: 'Token not provided'
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Invalid token format'
      });
    }

    const decoded = jwt.verify(token, envs.envs.JWT_SECRET) as {
      id: number;
    };

    const userId = decoded.id;
    const challenge = await service.resumeGame(userId);

    res.status(200).json({
      message: 'Active game resumed successfully',
      data: challenge
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}


export async function searchPokemon(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: 'Token not provided'
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Invalid token format'
      });
    }

    jwt.verify(token, envs.envs.JWT_SECRET);

    const query = req.body.query;
    const result = await service.searchPokemonNames(query);

    res.status(200).json({
      message: 'Pokemon names retrieved successfully',
      data: result
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}


export async function cashOutGame(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: 'Token not provided'
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Invalid token format'
      });
    }

    const decoded = jwt.verify(token, envs.envs.JWT_SECRET) as {
      id: number;
    };

    const userId = decoded.id;
    const result = await service.cashOutInfiniteGame(userId);

    if (result && typeof result === 'object' && 'message' in result && !('status' in result)) {
      return res.status(400).json({
        message: (result as { message: string }).message,
      });
    }

    res.status(200).json({
      response: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}


export async function answerGame(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: 'Token not provided'
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: 'Invalid token format'
      });
    }

    const decoded = jwt.verify(token, envs.envs.JWT_SECRET) as {
      id: number;
    };
    
    const userId = decoded.id; //guardar el userid
    const answer = req.body.answer;


    const response = await service.manageAnswer(userId, answer);

    res.status(200).json({
      response
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}
