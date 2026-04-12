import { Router } from 'express';
import * as controller from './controller'

const router = Router();

router.post('/', controller.pokedex)

export default router;