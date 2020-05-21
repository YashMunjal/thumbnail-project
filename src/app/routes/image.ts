import {Router} from 'express';
import { handleDownloadImageFromNetwork } from '../controllers/image';

const router = Router();

router.post('/resize-image', handleDownloadImageFromNetwork)

export default router;