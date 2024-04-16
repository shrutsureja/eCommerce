import { Router } from 'express';
import { homePage } from '../controllers/userController';
import exp from 'constants';

const router = Router();

router.get('/', homePage);

export default router;
