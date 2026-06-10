import type { NextFunction, Request, Response } from 'express';

//buscar origenes permitidos en .env
function parseAllowedOrigins(): string[] {
  const raw = process.env.CORS_ORIGINS?.trim();
  if (!raw) {
    return [];
  }

  return raw.split(',').map((origin) => origin.trim()).filter(Boolean);
}

const allowedOrigins = parseAllowedOrigins();

//en cada peticion recoge origin y comprueba si esta permitido que acceda
export function corsMiddleware(req: Request, res: Response, next: NextFunction) {
  const origin = req.headers.origin;

  if (origin) {
    const allowAll = allowedOrigins.includes('*');
    const isAllowed = allowAll || allowedOrigins.length === 0 || allowedOrigins.includes(origin);

    if (isAllowed) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
  }

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
}
