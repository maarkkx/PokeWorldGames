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
			username: user.name,
			email: user.email,
			admin: user.admin
		},
		envs.JWT_SECRET,
		{
			expiresIn: '1d'
		}
	);

	return {
		success: true,
		token
	};
}