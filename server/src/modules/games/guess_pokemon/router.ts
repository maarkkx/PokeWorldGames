import { Router } from 'express';
import * as controller from './controller'


const router = Router();
router.get('/', (_req, res) =>  {
  res.send('ruta base');
});

//rutas del juego
router.post('/start', controller.startGame);
router.post('/resume', controller.resumeGame);
router.post('/search', controller.searchPokemon);
router.post('/cash-out', controller.cashOutGame);
router.post('/answer', controller.answerGame);

//test random pokemon
router.get('/random', controller.getRandomPokemon);

export default router;