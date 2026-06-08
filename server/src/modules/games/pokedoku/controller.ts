import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as envs from '../../../config/envs';
import * as service from './service';

function readUserId(req: Request): number | null {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, envs.envs.JWT_SECRET) as {
      id: number;
    };
    return decoded.id;
  } catch {
    return null;
  }
}

export async function startGame(req: Request, res: Response) {
  try {
    const userId = readUserId(req);

    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    if (!userId) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const challenge = await service.startGame(userId);

    res.status(200).json({
      message: 'Pokedoku game started successfully',
      data: challenge,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}

export async function resumeGame(req: Request, res: Response) {
  try {
    const userId = readUserId(req);

    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    if (!userId) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const challenge = await service.resumeGame(userId);

    res.status(200).json({
      message: 'Active Pokedoku game resumed successfully',
      data: challenge,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}

export async function searchPokemon(req: Request, res: Response) {
  try {
    const userId = readUserId(req);

    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    if (!userId) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const { gameId, position, query } = req.body;
    const result = await service.searchPokemonForCell(userId, gameId, position, query);

    res.status(200).json({
      message: 'Pokemon names retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}

export async function answerGame(req: Request, res: Response) {
  try {
    const userId = readUserId(req);

    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    if (!userId) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const { gameId, position, pokemonId } = req.body;
    const response = await service.submitAnswer(userId, gameId, position, pokemonId);

    res.status(200).json({
      response,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}
