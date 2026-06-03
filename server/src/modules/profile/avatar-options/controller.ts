import { Request, Response } from 'express';
import * as service from './service';

export async function getAvatarOptions(_req: Request, res: Response) {
  try {
    const result = service.getAvatarOptions();
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}
