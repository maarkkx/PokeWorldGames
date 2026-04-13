import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export async function getPokemonsFromUser(req : Request, res : Response) {
  try {
    const user = req.body.user;
    
    const pokemons = await service.getPokemonsFromUser(user);
    res.status(200).json({
      pokemons
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}