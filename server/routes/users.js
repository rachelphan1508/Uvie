import express from 'express';
import { signin, signup}  from "../controllers/users.js";
import {} from '../controllers/posts.js'
const router = express.Router();


router.post('/signin', signin); //have to send details to backend
router.post('/signup', signup);
export default router;
