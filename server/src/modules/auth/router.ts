import { Router } from 'express';
import * as controller from './register/controller'


const router = Router();
router.get('/', (_req, res) =>  {
  res.send('ruta base');
});

//rutas del juego
router.put('/register', controller.register);

//test random pokemon

export default router;