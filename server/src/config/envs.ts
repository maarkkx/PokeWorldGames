import 'dotenv/config';

export const envs = {
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
  JWT_SECRET: String(process.env.JWT_SECRET),
}