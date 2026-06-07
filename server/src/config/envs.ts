import './loadEnv.js';

export const envs = {
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
  JWT_SECRET: String(process.env.JWT_SECRET),
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID ?? '',
  FIREBASE_SERVICE_ACCOUNT: process.env.FIREBASE_SERVICE_ACCOUNT ?? '',
  FIREBASE_SERVICE_ACCOUNT_PATH: process.env.FIREBASE_SERVICE_ACCOUNT_PATH ?? '',
};
