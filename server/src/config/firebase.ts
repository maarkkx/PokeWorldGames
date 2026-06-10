import fs from 'node:fs';
import path from 'node:path';
//librebria para gestionar auth
import admin from 'firebase-admin';
import { envs } from './envs';
import { SERVER_ROOT } from './loadEnv';

let initialized = false;

//transformar ruta en absoluta
function resolveServiceAccountPath(configuredPath: string): string {
  if (path.isAbsolute(configuredPath)) {
    return configuredPath;
  }

  return path.join(SERVER_ROOT, configuredPath.replace(/^\.\//, ''));
}

//get del servicio de servidro de firebase
function loadServiceAccountJson(): admin.ServiceAccount {
  //comprobacion de la ruta de firebase
  if (envs.FIREBASE_SERVICE_ACCOUNT_PATH) {
    const filePath = resolveServiceAccountPath(envs.FIREBASE_SERVICE_ACCOUNT_PATH);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Firebase service account file not found: ${filePath}`);
    }
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw) as admin.ServiceAccount;
  }

  //Si no consigue la ruta lo busca el en el env
  const raw = envs.FIREBASE_SERVICE_ACCOUNT.trim();
  if (raw.startsWith('{')) {
    return JSON.parse(raw) as admin.ServiceAccount;
  }

  throw new Error('FIREBASE_SERVICE_ACCOUNT must be a JSON string or set FIREBASE_SERVICE_ACCOUNT_PATH');
}

//Comprueba que haya firebase_project_id y firebase_service_account (minimo para funcionar)
export function isFirebaseAdminConfigured(): boolean {
  return Boolean(
    envs.FIREBASE_PROJECT_ID &&
      (envs.FIREBASE_SERVICE_ACCOUNT || envs.FIREBASE_SERVICE_ACCOUNT_PATH),
  );
}

//get admin.auth (objeto para poder)
export function getFirebaseAuth() {
  //comprueba que este inicializado todo
  if (!initialized) {
    if (!isFirebaseAdminConfigured()) {
      throw new Error('Firebase Admin SDK is not configured');
    }

    //carga el servicio
    const serviceAccount = loadServiceAccountJson();

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: envs.FIREBASE_PROJECT_ID,
    });

    initialized = true;
  }

  //objeto con metodos para gestionar auth
  return admin.auth();
}

export async function verifyFirebaseIdToken(idToken: string) {
  const auth = getFirebaseAuth();
  return auth.verifyIdToken(idToken);
}
