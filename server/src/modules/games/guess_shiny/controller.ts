import { Request, Response } from 'express';
import * as service from './service';
import jwt from 'jsonwebtoken';
import * as envs from '../../../config/envs';

//start game
export async function startShinyGame(req: Request, res: Response) {
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

    const challenge = await service.startShinyGame(userId);

    res.status(200).json({
      message: 'Shiny game started successfully',
      data: challenge,
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}

//answer game
export async function answerShinyGame(req: Request, res: Response) {
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
    const selectedPosition = req.body.selectedPosition;

    const result = await service.answerShinyGame(userId, selectedPosition);

    res.status(200).json({
      message: result.message,
      status: result.status,
      xpEarned: result.xpEarned,
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}