import * as repository from "./repository";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { envs } from '../../../config/envs';

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