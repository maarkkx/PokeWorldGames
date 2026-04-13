import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const result = await service.loginUser(email, password);
  
  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }
  res.status(200).json(result);
}