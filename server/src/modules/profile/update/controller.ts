import { Request, Response, NextFunction } from 'express';
import * as service from './service';
import jwt from 'jsonwebtoken';
import * as envs from '../../../config/envs';
import { env } from 'process';

export async function changePassword(req : Request, res : Response) {
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
    const password = req.body.password;
    const newPwd = req.body.newPwd;
    const newPwdConf = req.body.newPwdConf;

    const result = await service.changePassword(userId, password, newPwd, newPwdConf)

    res.status(200).json({
      result
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}

export async function changeUsername(req : Request, res : Response) {
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

    const decoded = jwt.verify(token, envs.envs.JWT_SECRET as string) as {
      id: number;
    };

    const userId = decoded.id;
    const username = req.body.username;

    const result = await service.changeUsername(userId, username);

    res.status(200).json({
      result
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error'
    });
  }
}