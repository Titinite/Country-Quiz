import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { getQuestionsByLevel, getQuestionById } from '../controllers/question.controller.js';

const router = Router();

router.get('/levels/:levelId/questions', authenticate, getQuestionsByLevel);
router.get('/levels/:levelId/questions/:questionId', authenticate, getQuestionById);

export default router;