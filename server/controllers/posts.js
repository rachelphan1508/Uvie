// create all handlers for our routes
import express from 'express';
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    //const {page} = req.query;
    try {
        //const LIMIT = 10;
        //const startIndex = (Number(page) - 1) * LIMIT;//starting index of every page
        //const total = await PostMessage.countDocuments({});

        const posts = await PostMessage.find().sort({_id: -1}); //give the newest post first
        console.log(posts);
        console.log("reached here");
        return res.status(200).json(posts); //everything is ok
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    //res.send('THIS WORKS!');
}

export const getPost = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await PostMessage.findById(id); 
        return res.status(200).json(post); //everything is ok
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
}

///ERROR HERE !!!
export const createPost = async (req, res) => {
    //const user = JSON.parse(localStorage.getItem('profile'));
    const post = req.body;
    const newPost = new PostMessage({...post, name: req.name, creator: req.userId, createdAt: new Date().toISOString()});

    try {
        await newPost.save();
        return res.status(201).json(newPost);
    } catch (error) {
        res.send('Post cant be created');
        return res.status(409).json({message: error.message});
    }
    //res.send('Post Creation');
}


export const updatePost = async (req, res) => {
    const {id : _id} = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');
    await PostMessage.findByIdAndRemove(id);

    console.log('DELETE');
    res.json({message: 'Post deleted successfully'});
}

//upvote post controller
export const upvotePost = async (req, res) => {
    const {id} = req.params;
    //check if user is authenticated
    if (!req.userId) return res.json({message: 'User not authenticated' });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');
    const post = await PostMessage.findById(id);

    const index = post.upvoteList.findIndex((id) => id ===String(req.userId));
    const id_down = post.downvoteList.findIndex((id) => id ===String(req.userId));
    if (id_down !== -1) { //if already downvoted, remove from downvoteList
        post.downvoteList = post.downvoteList.filter((id) => id !== String(req.userId));
    }
    else if (index === -1) {
      post.upvoteList.push(req.userId);
    } else {
      post.upvoteList = post.upvoteList.filter((id) => id !== String(req.userId));
    }
    post.upvote = post.upvoteList.length - post.downvoteList.length; 
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});
    res.json(updatedPost)
} 

//downvote: remove the downvote

export const downvotePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');
    const post = await PostMessage.findById(id);
    //if already downvoted, remove to none
    const index = post.downvoteList.findIndex((id) => id ===String(req.userId));
    const id_up = post.upvoteList.findIndex((id) => id ===String(req.userId));
    if (id_up !== -1) { //if already upvoted, remove from upvoteList
        post.upvoteList = post.upvoteList.filter((id) => id !== String(req.userId));
    }
    else if (index === -1) { // if not downvoted, downvote
      post.downvoteList.push(req.userId);
    } else { //if already downvoted, remove from downvoteList
      post.downvoteList = post.downvoteList.filter((id) => id !== String(req.userId));
    }
    post.upvote = post.upvoteList.length - post.downvoteList.length; 
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});
    res.json(updatedPost)
} 

export const commentPost = async(req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const post = await PostMessage.findById(id);
    post.comments.push(value);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});
    res.json(updatedPost)
}

export default router;