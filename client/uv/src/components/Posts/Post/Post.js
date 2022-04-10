import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp.js';
import DeleteIcon from '@material-ui/icons/Delete.js';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown.js';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz.js';
import moment from 'moment';
import useStyles from './style.js';
import { useDispatch } from "react-redux";

import { deletePost, upvotePost, downvotePost } from "../../../actions/posts.js";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        
        <Card className={classes.card}>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={2} container justifyContent="space-between" alignItems="stretch" spacing={3}> 
            <CardActions className={classes.CardActions} >
                <Grid item xs={12} sm={4} container> 
                <Button size="small" color="primary" onClick={()=> dispatch(upvotePost(post._id))}>
                    Upvote
                </Button>
                </Grid>
                <Grid item xs={12} sm={4} container> 
                <Button size="small" color="primary" onClick={()=> dispatch(downvotePost(post._id))}>
                Downvote
                </Button>
                
                &nbsp;
                {post.upvote}
                </Grid>
                <Grid item xs={12} sm={4} container> 
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) &&(
                    <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
                    Delete
                    </Button>
                )}
                
                </Grid>
            </CardActions>

            </Grid>
            <Grid item xs={12} sm={10}> 
            <div className={classes.title}>
                <Typography variant="h4" gutterBottom> {post.title}</Typography>
            </div>
            
            <div className={classes.details}>
                <Typography variant="h6"> {post.name}</Typography>
                <Typography variant="body2"> {moment(post.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) &&(
            <div className={classes.overlay}>
                <Button style={{color: 'black'}} size="small" onClick ={() => setCurrentId(post._id)}>
                    More
                </Button>
            </div>
            )}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary"> {post.tags.map((tag)=> `#${tag} `)}</Typography>

            </div>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
            </CardContent>
            </Grid>
            </Grid>
            
            
        </Card>
        
    );
}
export default Post;

//<CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
/*
 
<KeyboardArrowDownIcon fontSize="small"/>
<KeyboardArrowUpIcon fontSize="small"/>


<MoreHorizIcon fontSize="default"/>
*/
