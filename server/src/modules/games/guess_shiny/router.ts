import { Router } from 'express';

const router = Router();

router.post('/start', (_req, res) => {
  res.json({ message: '' });
});

router.post('/answer', (_req, res) => {
  res.json({ message: '' });
});

export default router;