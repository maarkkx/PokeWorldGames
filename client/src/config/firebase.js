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

let firebaseAppPromise;

export async function getFirebaseAuthBundle() {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase is not configured');
  }

  if (!firebaseAppPromise) {
    firebaseAppPromise = Promise.all([
      import('firebase/app'),
      import('firebase/auth'),
    ]).then(([appModule, authModule]) => {
      const firebaseConfig = {
        apiKey: readConfigValue('VITE_FIREBASE_API_KEY'),
        authDomain: readConfigValue('VITE_FIREBASE_AUTH_DOMAIN'),
        projectId: readConfigValue('VITE_FIREBASE_PROJECT_ID'),
        appId: readConfigValue('VITE_FIREBASE_APP_ID'),
      };

      const app = appModule.getApps().length
        ? appModule.getApp()
        : appModule.initializeApp(firebaseConfig);

      const auth = authModule.getAuth(app);
      const googleProvider = new authModule.GoogleAuthProvider();

      return {
        auth,
        googleProvider,
        signInWithPopup: authModule.signInWithPopup,
        signOut: authModule.signOut,
      };
    });
  }

  return firebaseAppPromise;
}
