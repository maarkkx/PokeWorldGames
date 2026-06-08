import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/', (_req, res) => {
  res.send('ruta base');
});

router.post('/start', controller.startGame);
router.post('/resume', controller.resumeGame);
router.post('/search', controller.searchPokemon);
router.post('/answer', controller.answerGame);

export default router;
