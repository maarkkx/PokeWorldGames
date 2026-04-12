import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export async function getRankings(req: Request, res: Response) {
  try {
    const rankings = await service.getAllRankings();

    res.status(200).json({
      rankings
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}