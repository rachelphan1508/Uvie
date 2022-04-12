import React, {useState, useEffect} from "react";
import useStyles from './styles.js';
import { TextField, Button, Typography, Paper, Container} from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector  } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { useNavigate } from 'react-router-dom';

//GET the current ID of the post


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
         title: '', message: '', tags:'',
    })

    const navigate = useNavigate();

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null );
    const user = JSON.parse(localStorage.getItem('profile'));
        
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    },[post])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, {...postData, username: user?.result?.name}));
            navigate('/');
            
        } else{
            dispatch(createPost({...postData, username: user?.result?.name}));
            navigate('/');
            
        }
        clear();
    };
    const clear  = () => {
        //setCurrentId(0);
        setPostData({title: '', message: '', tags:''});
    }
    
    return (
        <Container component="main" maxWidth="sm">
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6"> {currentId ? 'Editing' : 'Create'} a post</Typography>
            <TextField fullWidth name="title" variant="outlined" label="Title"  value = {postData.title}
            onChange = {(e) => setPostData({... postData, title: e.target.value })}/>
            <TextField fullWidth name="message" variant="outlined" label="Text" fullwidth value = {postData.message} multiline rows={5}
            onChange = {(e) => setPostData({... postData, message: e.target.value })}/>
            <TextField fullWidth name="tags" variant="outlined" label="Tags" fullwidth value = {postData.tags}
            onChange = {(e) => setPostData({... postData, tags: e.target.value.split(',') })}/>
           
            
            <Button className={classes.buttonSubmit} style={{backgroundColor: '#66ccf8' }} variant="contained"  size="large" type="submit" fullWidth >Post</Button>
            <Button  variant="contained" style={{backgroundColor: '#FFFFFF', color: "#000000" }}  onClick size="small" onClick={clear}  fullWidth >Clear</Button>


            </form>
        </Paper>
        </Container>
        
    );
}
export default Form;