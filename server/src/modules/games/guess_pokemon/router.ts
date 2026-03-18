import { Router } from 'express';
import * as repository from './repository'


const router = Router();

router.get('/start', () =>  {
  return "Hola";
});

router.get('/', () =>  {
  return "ruta base";
});

router.get('/random', repository.getRandomPokemon)

router.post('/answer', (_req, res) => {
  res.json({ message: '' });
});

export default router;