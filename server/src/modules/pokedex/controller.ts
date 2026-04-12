import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export async function pokedex(req: Request, res: Response) {
  try {
    const userId = req.body.userId
    const pokemons = await service.getPokedex(userId);

    res.status(200).json({
      pokemons
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}