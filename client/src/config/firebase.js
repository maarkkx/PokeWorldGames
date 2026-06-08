import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

const requiredKeys = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_APP_ID',
];

function readConfigValue(key) {
  return import.meta.env[key]?.trim() ?? '';
}

export function isFirebaseConfigured() {
  return requiredKeys.every((key) => Boolean(readConfigValue(key)));
}

let authBundle = null;

function createAuthBundle() {
  const firebaseConfig = {
    apiKey: readConfigValue('VITE_FIREBASE_API_KEY'),
    authDomain: readConfigValue('VITE_FIREBASE_AUTH_DOMAIN'),
    projectId: readConfigValue('VITE_FIREBASE_PROJECT_ID'),
    appId: readConfigValue('VITE_FIREBASE_APP_ID'),
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  return {
    auth,
    googleProvider,
    signInWithRedirect,
    getRedirectResult,
    signOut,
  };
}

export function getFirebaseAuthBundle() {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase is not configured');
  }

  if (!authBundle) {
    authBundle = createAuthBundle();
  }

  return authBundle;
}

export function prefetchFirebaseAuth() {
  if (isFirebaseConfigured()) {
    getFirebaseAuthBundle();
  }
}
