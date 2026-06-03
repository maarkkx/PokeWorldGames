import { Router } from 'express';
import * as controllerUpdate from './update/controller';
import * as controllerShow from './show/controller';
import * as controllerUpdateAppearance from './update_appearance/controller';
import * as controllerUpdatePinned from './update_pinned/controller';
import * as controllerAvatarOptions from './avatar_options/controller';

const router = Router();
router.get('/', (_req, res) => {
  res.send('ruta base');
});

router.get('/avatar-options', controllerAvatarOptions.getAvatarOptions);

//cambiar contraseña
router.post('/update-pwd', controllerUpdate.changePassword);

//cambiar user
router.post('/update-user', controllerUpdate.changeUsername);

// avatar y pokemon fijados
router.post('/update-appearance', controllerUpdateAppearance.updateAppearance);
router.post('/update-pinned', controllerUpdatePinned.updatePinnedPokemons);

//show details
router.post('/show', controllerShow.getUserDetails);

export default router;