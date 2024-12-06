import express from 'express';
import { createNewPost, getAllPosts } from '../controllers/postsController';

const router = express.Router();

router.post('/', createNewPost);
router.get('/', getAllPosts);

export default router;