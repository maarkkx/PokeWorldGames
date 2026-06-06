import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as envs from '../../../config/envs';
import * as service from './service';

export async function acceptFriendRequest(req: Request, res: Response) {
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
    const result = await service.acceptFriendRequest(decoded.id, {
      requestId: req.body.requestId,
      fromUserName: req.body.fromUserName,
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}
