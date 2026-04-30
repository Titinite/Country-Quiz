import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { getUserProgress, getLevelProgress, saveProgress } from '../controllers/progress.controller.js';

const router = Router();

router.get('/', authenticate, getUserProgress);
router.get('/:levelId', authenticate, getLevelProgress);
router.post('/', authenticate, saveProgress);

export default router;