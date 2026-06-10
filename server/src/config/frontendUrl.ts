function parseOriginList(raw?: string): string[] {
  if (!raw?.trim()) {
    return [];
  }

  return raw
    .split(',')
    .map((origin) => origin.trim().replace(/\/$/, ''))
    .filter(Boolean);
}

function isLocalhostOrigin(origin: string): boolean {
  try {
    const host = new URL(origin).hostname;
    return host === 'localhost' || host === '127.0.0.1';
  } catch {
    return false;
  }
}

export function getFrontendUrl(): string {
  const explicit = process.env.FRONTEND_URL?.trim().replace(/\/$/, '');
  const isProduction = process.env.NODE_ENV === 'production';
  const corsOrigins = parseOriginList(process.env.CORS_ORIGINS).filter(
    (origin) => origin !== '*' && !isLocalhostOrigin(origin)
  );

  if (corsOrigins.length > 0) {
    return corsOrigins[0];
  }

  if (explicit && (!isProduction || !isLocalhostOrigin(explicit))) {
    return explicit;
  }

  return explicit || 'http://localhost:5173';
}

export function logFrontendUrlStatus(): void {
  const url = getFrontendUrl();
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction && isLocalhostOrigin(url)) {
    console.warn(
      '[config] FRONTEND_URL points to localhost in production. Set FRONTEND_URL or CORS_ORIGINS to your deployed frontend URL.'
    );
    return;
  }

  console.log(`[config] Password reset links will use: ${url}`);
}
