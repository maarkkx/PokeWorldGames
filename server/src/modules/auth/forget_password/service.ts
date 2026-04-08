import * as repository from "./repository";
import crypto from "crypto";
import { envs } from '../../../config/envs'
import { sendResetPasswordEmail } from './sendResetEmail';

const bcrypt = require('bcrypt');

function generateToken(size: number = 16): string {
  return crypto.randomBytes(size).toString('hex');;
}

export async function requestPasswordReset(email: string) {
  try {
    //comprobaciones
    if (!email) {
      throw new Error('Email is required');
    }

    const user = await repository.getUserByEmail(email);
    if (!user) {
      throw new Error('Email send')
    }
    
    //creacion token + mail
    const token = generateToken();
    const tokenHash = await bcrypt.hash(token, envs.SALT_ROUNDS);
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30);

    await repository.createPasswordResetRequest(user.id, tokenHash, expiresAt);
    await sendResetPasswordEmail(email, token)  

    return {
      message: "Email send"
    }

  } catch (error) {
    let errorMessage = {
      message: error instanceof Error ? error.message : error
    };
    console.log(error);
    return errorMessage;
  }

}