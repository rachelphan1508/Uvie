import * as api from '../api/index.js';
import { CREATE, FETCH_ALL, FETCH_POST, UPDATE, DELETE, UPVOTE, DOWNVOTE, COMMENT } from '../constants/actionTypes.js';

// Action Creators -- return an action
export const getPosts = () => async(dispatch) => {
try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({type: FETCH_ALL, payload: data});
} catch (error) {
    console.log(error.message);
}
}

//
export const getPost = (id) => async(dispatch) => {
    try {
        const { data } = await api.fetchPost(id);
        console.log(data);
        dispatch({type: FETCH_POST, payload: data});
    } catch (error) {
        console.log(error.message);
    }
    }

export const createPost = (post, navigate) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        navigate(`/posts/${data._id}`);
        dispatch({type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const upvotePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.upvotePost(id);
        dispatch({type: UPVOTE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const downvotePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.downvotePost(id);
        dispatch({type: DOWNVOTE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const commentPost = (value, id) => async(dispatch) => {
    try {
        const {data} = await api.comment(value, id);
        
        dispatch({type: COMMENT, payload:data});
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}