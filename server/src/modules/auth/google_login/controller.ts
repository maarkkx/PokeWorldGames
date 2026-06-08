import { Request, Response } from 'express';
import * as service from './service';

export async function googleLogin(req: Request, res: Response) {
  const { idToken } = req.body;

  const result = await service.googleLogin(idToken);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.message,
    });
  }

  return res.status(200).json(result);
}
