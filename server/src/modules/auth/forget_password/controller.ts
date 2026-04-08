import { Request, Response } from 'express';
import * as service from './service';

export async function resetPassword(req: Request, res: Response) {
  try {
    const email = req.body.email;
    const result = await service.requestPasswordReset(email);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}

export async function changePasswordWithToken(req: Request, res: Response) {
  try {
    const { token, newPassword } = req.body;
    const result = await service.confirmPasswordReset(token, newPassword);

    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}