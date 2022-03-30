import express from 'express';
import {getPosts, createPost, deletePost, updatePost, upvotePost, downvotePost} from '../controllers/posts.js'
const router = express.Router();


//localhost:5000/posts


router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/upvotePost', upvotePost);
router.patch('/:id/downvotePost', downvotePost);


export default router;

