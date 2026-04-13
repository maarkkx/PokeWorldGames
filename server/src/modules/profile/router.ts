import { Router } from 'express';
import * as controllerUpdate from './update/controller'


const router = Router();
router.get('/', (_req, res) =>  {
  res.send('ruta base');
});

//cambiar contraseña
router.post('/update-pwd', controllerUpdate.changePassword);

//cambiar user
router.post('/update-user', controllerUpdate.changeUsername)


export default router;