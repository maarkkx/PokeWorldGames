import { Request, Response } from 'express';
import * as service from './service';

//start game
export async function startShinyGame(req: Request, res: Response) {
  try {
    const userId = req.body.userId;

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
    const userId = req.body.userId;
    const gameId = req.body.gameId;
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