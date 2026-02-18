import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import upload from '../middlewares/multer.middlewre.js';
import { register } from '../controllers/user.js';

const router = Router();

router.post('/register', upload.single('photo'), register);

export default router;
