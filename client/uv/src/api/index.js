import axios from "axios";

const API = axios.create({baseURL: 'https://uvie-backend.herokuapp.com/'});

API.interceptors.request.use((req) => {
    //send token back to backend
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const upvotePost = (id) => API.patch(`/posts/${id}/upvotePost`);
export const downvotePost = (id) => API.patch(`/posts/${id}/downvotePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);