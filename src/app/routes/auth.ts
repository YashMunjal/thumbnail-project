import { Router } from 'express';
import { handleLoginRequest } from '../controllers/auth';

const router: Router = Router();

router.post('/login', handleLoginRequest);

export default router;
