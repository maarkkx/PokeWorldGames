import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export async function register(req : Request, res : Response) {
	try {
		const name = req.body.name;
		const email = req.body.email;
		const password = req.body.password;
		const confirmPassword = req.body.confirmPassword;

		const user = await service.validateUser(name, email, password, confirmPassword);

		res.status(200).json({
			user
		});
	} catch (error) {
		res.status(400).json({
			message: error instanceof Error ? error.message : 'Unexpected error'
		});
	}
}