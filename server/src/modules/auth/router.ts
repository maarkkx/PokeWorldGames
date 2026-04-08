import { Router } from 'express';
import * as controller from './register/controller'
import * as loginController from './login/controller'
import * as forgetController from './forget_password/controller'


const router = Router();
router.get('/', (_req, res) =>  {
  res.send('ruta base');
});

//register usuario
router.post('/register', controller.register);

//login usuario
router.post('/login', loginController.login)

//recuperar contraseña
router.post('/forget_password', forgetController.resetPassword)
router.post('/reset_password', forgetController.changePasswordWithToken)

//cambiar contraseña
router.post('/change_password', loginController.changePassword)


export default router;