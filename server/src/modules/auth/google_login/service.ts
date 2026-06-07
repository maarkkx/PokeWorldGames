import jwt from 'jsonwebtoken';
import { envs } from '../../../config/envs';
import { isFirebaseAdminConfigured, verifyFirebaseIdToken } from '../../../config/firebase';
import * as repository from './repository';
import { generateUniqueUsername } from './username';

type AuthUser = {
  id: number;
  name: string;
  email: string;
  admin: boolean;
};

function issueToken(user: AuthUser) {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.name,
      email: user.email,
      admin: user.admin,
    },
    envs.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  );

  return {
    success: true as const,
    token,
  };
}

export async function googleLogin(idToken: string) {
  if (!idToken || typeof idToken !== 'string') {
    return {
      success: false as const,
      message: 'Invalid Firebase token',
    };
  }

  if (!isFirebaseAdminConfigured()) {
    return {
      success: false as const,
      message: 'Firebase Admin SDK is not configured',
    };
  }

  let decoded;

  try {
    decoded = await verifyFirebaseIdToken(idToken);
  } catch (error) {
    console.log(error);
    const message = error instanceof Error ? error.message : 'Invalid Firebase token';
    if (message.includes('Firebase Admin SDK is not configured')) {
      return {
        success: false as const,
        message: 'Firebase Admin SDK is not configured',
      };
    }
    if (message.includes('service account file not found')) {
      return {
        success: false as const,
        message: 'Firebase service account file not found',
      };
    }
    return {
      success: false as const,
      message: 'Invalid Firebase token',
    };
  }

  const { uid, email, email_verified, name } = decoded;

  if (!uid || !email) {
    return {
      success: false as const,
      message: 'Invalid Firebase token',
    };
  }

  if (email_verified === false) {
    return {
      success: false as const,
      message: 'Email not verified',
    };
  }

  const normalizedEmail = email.toLowerCase();

  try {
    const byGoogleId = await repository.getUserByGoogleId(uid);
    if (byGoogleId) {
      return issueToken(byGoogleId);
    }

    const byEmail = await repository.getUserByEmail(normalizedEmail);
    if (byEmail) {
      if (byEmail.googleId && byEmail.googleId !== uid) {
        return {
          success: false as const,
          message: 'This account is linked to a different Google account',
        };
      }

      const linkedUser = byEmail.googleId
        ? byEmail
        : await repository.linkGoogleAccount(byEmail.id, uid);

      return issueToken(linkedUser);
    }

    const username = await generateUniqueUsername(normalizedEmail, name);
    const createdUser = await repository.createGoogleUser({
      name: username,
      email: normalizedEmail,
      googleId: uid,
    });

    return issueToken(createdUser);
  } catch (error) {
    console.log(error);
    return {
      success: false as const,
      message: 'Could not create or link Google user',
    };
  }
}
