import { Router } from 'express';
import * as controller from './register/controller'
import * as loginController from './login/controller'


const router = Router();
router.get('/', (_req, res) =>  {
  res.send('ruta base');
});

//register usuario
router.post('/register', controller.register);

//login usuario
router.post('/login', loginController.login)


export default router;