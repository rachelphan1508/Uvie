import express from 'express';
import {getPosts, getPost, createPost, deletePost, updatePost, upvotePost, downvotePost, commentPost} from '../controllers/posts.js'

import auth from '../middleware/auth.js';


const router = express.Router();


//localhost:5000/posts


router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/upvotePost', auth, upvotePost);
router.patch('/:id/downvotePost', auth, downvotePost);
router.post('/:id/commentPost', auth, commentPost);

export default router;

