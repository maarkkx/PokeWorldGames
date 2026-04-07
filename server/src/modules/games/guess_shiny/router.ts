import { Router } from 'express';
import * as controller from './controller'

const router = Router();

router.post('/start', controller.startShinyGame);

router.post('/answer', controller.answerShinyGame);

export default router;