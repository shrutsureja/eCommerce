import { Router } from 'express';
import { homePage, sendPage } from '../controllers/userController';

const router = Router();

router.get('/user', homePage);
router.get('/user/:id', sendPage);

export default router;
