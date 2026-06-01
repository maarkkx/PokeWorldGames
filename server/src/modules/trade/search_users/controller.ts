import { Request, Response } from 'express';
import * as service from './service';

export async function searchUsers(req: Request, res: Response) {
  try {
    const query = req.body.query;
    const result = await service.searchUsers(query);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : 'Unexpected error',
    });
  }
}
