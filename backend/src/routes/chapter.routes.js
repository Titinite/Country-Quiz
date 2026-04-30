import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { getAllChapters, getChapterById, getLevelsByChapter, getLevelById } from '../controllers/chapter.controller.js';

const router = Router();

router.get('/', authenticate, getAllChapters);
router.get('/:id', authenticate, getChapterById);
router.get('/:id/levels', authenticate, getLevelsByChapter);
router.get('/:id/levels/:levelId', authenticate, getLevelById);

export default router;