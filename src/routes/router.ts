import express from 'express';
import { createNewPost } from '../controllers/postsController';

const router = express.Router();

router.post('/', createNewPost);

export default router;