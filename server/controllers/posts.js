// create all handlers for our routes
import express from 'express';
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        return res.status(200).json(postMessages); //everything is ok
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    //res.send('THIS WORKS!');
}

export const createPost = async (req, res) => {
    const {title, message, creator, tags} = req.body;
    const newPost = new PostMessage({ title, message, creator, tags });

    try {
        await newPost.save();
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(409).json({messgae: error.message});
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

export const upvotePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {upvote: post.upvote+1}, {new: true});
    res.json(updatedPost)
} 

export const downvotePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {upvote: post.upvote-1}, {new: true});
    res.json(updatedPost)
} 
