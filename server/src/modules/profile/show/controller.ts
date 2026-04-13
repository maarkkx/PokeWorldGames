import * as service from './service';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as envs from '../../../config/envs';

export async function getUserDetails(req: Request, res: Response) {
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

    const result = await service.getUserDetails(userId);

    res.status(200).json({
      result
    });

  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}