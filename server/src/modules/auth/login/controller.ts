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

export async function changePassword(req : Request, res :Response) {
	try {
    const userId = req.body.userId;
		const password = req.body.password;
		const newPassword = req.body.newPassword;
		const newPasswordConfirmation = req.body.newPasswordConfirmation;

    const result = await service.changePassword(userId, password, newPassword, newPasswordConfirmation)

    res.status(200).json(result)

	} catch (error) {
		res.status(400).json({
			message: error instanceof Error ? error.message : 'Unexpected error'
		});
	}
}