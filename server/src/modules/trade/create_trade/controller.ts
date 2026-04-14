import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as envs from '../../../config/envs';
import * as service from './service';

export async function createTrade(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const decoded = jwt.verify(token, envs.envs.JWT_SECRET) as { id: number };
    const fromUserId = decoded.id;

    const { toUserName, offeredPokemons, requestedPokemons } = req.body;

    const trade = await service.createTrade({fromUserId, toUserName, offeredPokemons, requestedPokemons});

    return res.status(201).json({ trade });
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}