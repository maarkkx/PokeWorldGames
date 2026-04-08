import * as repository from "./repository";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { envs } from '../../../config/envs';
import * as regex from '../constants/constants'

export async function loginUser(email: string, password: string) {
	const user = await repository.getUserByEmail(email);
	//comprobar que el usuario existe
	if (!user) {
		return {
			success: false,
			message: "User not found"
		};
	}

	//comprobacion de la contraseña
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return {
			success: false,
			message: "Incorrect password"
		};
	}

	//Generacion del token jwt
	const token = jwt.sign(
		{
			id: user.id,
			email: user.email,
			admin: user.admin
		},
		envs.JWT_SECRET,
		{
			expiresIn: '1h'
		}
	);

	return {
		success: true,
		token,
		user: {
			id: user.id,
			name: user.name,
			email: user.email
		}
	};
}

export async function changePassword(id : number, password: string, newPassword: string, newPasswordConfirmation: string) {
	try {
		const passwordBD = await repository.getPasswordHash(id);
		const hashPassword = <string>passwordBD?.password;
		const isMatch = await bcrypt.compare(password, hashPassword);

		if (!isMatch) {
			throw new Error('Incorrect Password')
		}

		if (newPassword !== newPasswordConfirmation) {
			throw new Error('The passwords do not match')
		}

		if (!regex.regexPasswd.test(newPassword)) {
			return {
				created: false,
				message: "The password must be at least 8 characters long, contain 1 uppercase letter and 1 symbol"
			}
		}

		await repository.changePassword(id, await bcrypt.hash(newPassword, envs.SALT_ROUNDS))
		return {
			message: 'Password successfully changed'
		}

	} catch (error) {
		let errorMessage = {
      message: error instanceof Error ? error.message : error
    };
    console.log(error);
    return errorMessage;
	}

}