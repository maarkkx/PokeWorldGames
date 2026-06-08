import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

function findServerRoot(startDir: string): string {
  let current = startDir;

  while (current !== path.dirname(current)) {
    const packageJsonPath = path.join(current, 'package.json');
    const prismaSchemaPath = path.join(current, 'prisma', 'schema.prisma');

    if (fs.existsSync(packageJsonPath) && fs.existsSync(prismaSchemaPath)) {
      return current;
    }

    current = path.dirname(current);
  }

  throw new Error('Could not find server root');
}

export const SERVER_ROOT = findServerRoot(__dirname);

for (const relativePath of ['.env', 'src/.env']) {
  const envPath = path.join(SERVER_ROOT, relativePath);
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  }
}
