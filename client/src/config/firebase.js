import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

export const GOOGLE_REDIRECT_PENDING_KEY = 'pwg-google-redirect-pending';

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
let redirectResultPromise = null;

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
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
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

export function isGoogleRedirectPending() {
  try {
    return sessionStorage.getItem(GOOGLE_REDIRECT_PENDING_KEY) === '1';
  } catch {
    return false;
  }
}

export function markGoogleRedirectPending() {
  sessionStorage.setItem(GOOGLE_REDIRECT_PENDING_KEY, '1');
}

export function clearGoogleRedirectPending() {
  sessionStorage.removeItem(GOOGLE_REDIRECT_PENDING_KEY);
}

/** Single shared call per page load (StrictMode-safe). */
export function resolveGoogleRedirectResult(auth) {
  if (!redirectResultPromise) {
    redirectResultPromise = getRedirectResult(auth);
  }

  return redirectResultPromise;
}

export function resetGoogleRedirectState() {
  redirectResultPromise = null;
}
