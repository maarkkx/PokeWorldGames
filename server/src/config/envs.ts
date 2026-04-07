import 'dotenv/config';

export const envs = {
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
}