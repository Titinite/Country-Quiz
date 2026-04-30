import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { requireAdmin } from '../middlewares/admin.middleware.js';
import * as adminController from '../controllers/admin.controller.js';

const router = Router();

router.use(authenticate, requireAdmin);

router.get('/users', adminController.getAllUsers);
router.patch('/users/:id/role', adminController.updateUserRole);
router.delete('/users/:id', adminController.deleteUser);

router.post('/chapters', adminController.createChapter);
router.patch('/chapters/:id', adminController.updateChapter);
router.delete('/chapters/:id', adminController.deleteChapter);

router.post('/levels', adminController.createLevel);
router.patch('/levels/:id', adminController.updateLevel);
router.delete('/levels/:id', adminController.deleteLevel);

router.post('/questions', adminController.createQuestion);
router.patch('/questions/:id', adminController.updateQuestion);
router.delete('/questions/:id', adminController.deleteQuestion);

router.post('/answers', adminController.createAnswer);
router.patch('/answers/:id', adminController.updateAnswer);
router.delete('/answers/:id', adminController.deleteAnswer);

export default router;