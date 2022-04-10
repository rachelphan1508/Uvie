import React, {useState, useEffect} from "react";
import useStyles from './styles.js';
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector  } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";

//GET the current ID of the post


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
         title: '', message: '', tags:'',
    })

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
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
            
        } else{
            dispatch(createPost({...postData, name: user?.result?.name}));
            
        }
        clear();
    };
    //if no user is logged in, don't allow anyone to create a post
    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Log In to create a post.
                </Typography>
            </Paper>
        )
    }
    const clear  = () => {
        //setCurrentId(0);
        setPostData({title: '', message: '', tags:''});
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`$classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6"> {currentId ? 'Editing' : 'Creating'} a post</Typography>
            <TextField name="title" variant="outlined" label="Title" fullwidth value = {postData.title}
            onChange = {(e) => setPostData({... postData, title: e.target.value })}/>
            <TextField name="message" variant="outlined" label="Message" fullwidth value = {postData.message}
            onChange = {(e) => setPostData({... postData, message: e.target.value })}/>
            <TextField name="tags" variant="outlined" label="Tags" fullwidth value = {postData.tags}
            onChange = {(e) => setPostData({... postData, tags: e.target.value.split(',') })}/>
           
            
            <Button className={classes.buttonSubmit} style={{backgroundColor: '#66ccf8' }} variant="contained"  size="large" type="submit" fullWidth >Submit</Button>
            <Button  variant="contained" color="primary" onClick size="small" onClick={clear}  fullWidth >Clear</Button>


            </form>
        </Paper>
        
    );
}
export default Form;
