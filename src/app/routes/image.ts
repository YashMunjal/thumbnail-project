import {Router} from 'express';
import { handleDownloadImageFromNetwork } from '../controllers/image';
import { validateRequestAuth } from '../services/auth';

const router = Router();

router.post('/resize-image', validateRequestAuth, handleDownloadImageFromNetwork)

export default router;