import { Router } from 'express';
import * as controller from './controller'

const router = Router();

router.post('/', controller.getRankings)

export default router;