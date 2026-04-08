import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export async function resetPassword(req: Request, res: Response) {
	try {
		const email = req.body.email;

		const send = await service.requestPasswordReset(email);
		res.status(200).json({
			send
		});
	} catch (error) {
		res.status(400).json({
			message: error instanceof Error ? error.message : 'Unexpected error'
		});
	}
}