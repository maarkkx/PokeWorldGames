import * as repository from './repository';
import * as regex from '../constants/constants';
import crypto from 'crypto';
import { envs } from '../../../config/envs';
import { sendResetPasswordEmail } from './sendResetEmail';

const bcrypt = require('bcrypt');

function generateToken(size: number = 32): string {
  return crypto.randomBytes(size).toString('hex');
}

function hashResetToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

//enviar email reset password
export async function requestPasswordReset(email: string) {
  try {
    if (!email) {
      throw new Error('Email is required');
    }

    const user = await repository.getUserByEmail(email);

    
    if (!user) {
      return { message: 'Email send' };
    }

    // crear token + enviar email
    const token = generateToken();
    const tokenHash = hashResetToken(token);
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30);

    await repository.createPasswordResetRequest(user.id, tokenHash, expiresAt);

    void sendResetPasswordEmail(email, token).catch((error) => {
      console.error('[reset-password] Failed to send email to', email, error);
    });

    return { message: 'Email send' };
  } catch (error) {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : 'Unexpected error',
    };
  }
}

export async function confirmPasswordReset(token: string, newPassword: string) {
  try {
    if (!token) {
      return { success: false, message: 'Token is required' };
    }

    if (!newPassword) {
      return { success: false, message: 'Password is required' };
    }

    if (!regex.regexPasswd.test(newPassword)) {
      return {
        success: false,
        message:
          'The password must be at least 8 characters long, contain 1 uppercase letter, 1 number and 1 symbol',
      };
    }

    const tokenHash = hashResetToken(token);
    const resetRequest = await repository.getValidPasswordResetToken(tokenHash);

    if (!resetRequest) {
      return { success: false, message: 'Invalid or expired token' };
    }

    const newPasswordHash = await bcrypt.hash(newPassword, envs.SALT_ROUNDS);

    await repository.resetUserPassword(
      resetRequest.userId,
      resetRequest.id,
      newPasswordHash
    );

    return {
      success: true,
      message: 'Password updated successfully',
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Internal server error' };
  }
}