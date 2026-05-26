import { Router } from 'express';

import { helloWorld } from '../controllers/helloController';
import { gpsController } from '../controllers/helloControler';

const router = Router();

router.get('/', helloWorld);
router.get('/gps', gpsController);
router.get('gps/status', gpsController=)

export default router;