import fs from 'node:fs';
import path from 'node:path';
import admin from 'firebase-admin';
import { envs } from './envs';
import { SERVER_ROOT } from './loadEnv';

let initialized = false;

function resolveServiceAccountPath(configuredPath: string): string {
  if (path.isAbsolute(configuredPath)) {
    return configuredPath;
  }

  return path.join(SERVER_ROOT, configuredPath.replace(/^\.\//, ''));
}

function loadServiceAccountJson(): admin.ServiceAccount {
  if (envs.FIREBASE_SERVICE_ACCOUNT_PATH) {
    const filePath = resolveServiceAccountPath(envs.FIREBASE_SERVICE_ACCOUNT_PATH);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Firebase service account file not found: ${filePath}`);
    }
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw) as admin.ServiceAccount;
  }

  const raw = envs.FIREBASE_SERVICE_ACCOUNT.trim();
  if (raw.startsWith('{')) {
    return JSON.parse(raw) as admin.ServiceAccount;
  }

  throw new Error('FIREBASE_SERVICE_ACCOUNT must be a JSON string or set FIREBASE_SERVICE_ACCOUNT_PATH');
}

export function isFirebaseAdminConfigured(): boolean {
  return Boolean(
    envs.FIREBASE_PROJECT_ID &&
      (envs.FIREBASE_SERVICE_ACCOUNT || envs.FIREBASE_SERVICE_ACCOUNT_PATH),
  );
}

export function getFirebaseAuth() {
  if (!initialized) {
    if (!isFirebaseAdminConfigured()) {
      throw new Error('Firebase Admin SDK is not configured');
    }

    const serviceAccount = loadServiceAccountJson();

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: envs.FIREBASE_PROJECT_ID,
    });

    initialized = true;
  }

  return admin.auth();
}

export async function verifyFirebaseIdToken(idToken: string) {
  const auth = getFirebaseAuth();
  return auth.verifyIdToken(idToken);
}
