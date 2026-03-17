import { Router } from 'express';
import * as repository from './repository'


const router = Router();

router.post('/start', );

router.get('/random', repository.getRandomPokemon)

router.post('/answer', (_req, res) => {
  res.json({ message: '' });
});

export default router;