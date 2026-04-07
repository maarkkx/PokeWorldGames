import { Router } from 'express';
import * as controller from './register/controller'


const router = Router();
router.get('/', (_req, res) =>  {
  res.send('ruta base');
});

//register usuario
router.post('/register', controller.register);


export default router;