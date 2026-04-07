import * as repository from "./repository";
import * as regex from '../constants/constants'
import { envs } from '../../../config/envs'
import { User } from '../constants/types';
import { AuthResponse } from "../constants/types";
const bcrypt = require('bcrypt');

//Validra usuarios
export async function validateUser(name: string, email: string, password: string) : Promise<AuthResponse> {
	try {
		//comprobaciones
		if (!regex.regexUser.test(name)) {
			return {
				created: false,
				message: "The username must be between 4 and 20 characters long, and special characters are not allowed"
			}
		}
		if (!regex.regexEmail.test(email)) {
			return {
				created: false,
				message: "The email format is invalid"
			}
		}
		if (!regex.regexPasswd.test(password)) {
			return {
				created: false,
				message: "The password must be at least 8 characters long, contain 1 uppercase letter and 1 symbol"
			}
		}

		let check = await repository.checkUserExists(email);

		if (check) {
			return {
				created: false,
				message: 'A user with this email address already exists'
			}
		}
		//Creacion usuario
		const hashedPasswd = await bcrypt.hash(password, envs.SALT_ROUNDS);
		const user: User = {
			name: name,
			email: email,
			password: hashedPasswd
		}

		let result = await repository.createUser(user.name, user.email, user.password);


		if (result) {
			return {
				created: true,
				user: result
			}
		} else {
			return {
				created: false,
				message: 'Error creating the user'
			}
		}

	} catch (error) {
		console.log(error)
		return {
            created: false,
            message: "Internal server error"
        }
	}
}