import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export async function openLootbox(req: Request, res: Response) {
  try {
    const userId = req.body.userId;

    const lootbox = await service.lootboxesHasUser(userId)

    res.status(200).json({
      lootbox
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}