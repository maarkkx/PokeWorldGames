/** Neon sometimes appends channel_binding=require, which breaks node-pg. */
export function normalizePostgresUrl(url: string): string {
  const parsed = new URL(url);

  parsed.searchParams.delete("channel_binding");
  if (!parsed.searchParams.has("sslmode")) {
    parsed.searchParams.set("sslmode", "require");
  }

  return parsed.toString();
}

export function getRuntimeDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL no está definida");
  }
  return normalizePostgresUrl(url);
}

export function getMigrateDatabaseUrl(): string {
  const url = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DIRECT_URL o DATABASE_URL no está definida");
  }
  return normalizePostgresUrl(url);
}
