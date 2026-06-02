import fs from 'node:fs';
import path from 'node:path';
import type { Express, Request, Response } from 'express';
import express from 'express';

const clientDist = path.resolve(__dirname, '../../../../client/dist');
const clientIndex = path.join(clientDist, 'index.html');

export function registerClientApp(app: Express) {
  if (!fs.existsSync(clientIndex)) {
    return;
  }

  app.use(express.static(clientDist));

  app.use((req: Request, res: Response, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return next();
    }

    res.sendFile(clientIndex, (error) => {
      if (error) {
        next(error);
      }
    });
  });
}
