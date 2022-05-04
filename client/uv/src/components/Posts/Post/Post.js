import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faComment} from '@fortawesome/fontawesome-free-solid';

import moment from 'moment';
import useStyles from './style.js';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePost, upvotePost, downvotePost } from "../../../actions/posts.js";


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const openPost = (e) => {
        navigate(`posts/${post._id}`);
    }
    return (
        
        <Card className={classes.card}>
            {/* This is how my post would look like in a card */}
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={2} container justifyContent="space-between" alignItems="stretch" spacing={3}> 
            <CardActions className={classes.CardActions} >
                {/* the grid that has upvote, downvote and number of vote */}
                <Grid item xs={12} sm={1} container> 
                <Button size="small" className={classes.upvote} onClick={()=> dispatch(upvotePost(post._id))}>
                <FontAwesomeIcon icon={faChevronUp} />
                </Button>
                <div > <strong> {post.upvote} </strong> </div>
                <Button size="small" className={classes.downvote} onClick={()=> dispatch(downvotePost(post._id))}>
                <FontAwesomeIcon icon={faChevronDown} />
                </Button>
                </Grid>
                
            </CardActions>

            </Grid>
            <Grid item xs={12} sm={10}> 
            <div className={classes.title}>
                <Typography variant="h5" gutterBottom style={{fontWeight: '600'}}> {post.title}</Typography>
            </div>
            
            <div className={classes.details}>
                <Typography variant="h6" > Posted by {post.creator} </Typography>
                <Typography variant="body2"> {moment(post.createdAt).fromNow()}</Typography>
            </div>
        
            
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary"> {post.tags.map((tag)=> `#${tag} `)}</Typography>

            </div>
            
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
            </CardContent>
            <Button size="small" onClick={openPost}>
                <FontAwesomeIcon icon={faComment} /> &nbsp; {post.comments.length} {(post.comments.length>1 ? "Comments" : "Comment")}
            </Button>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator ) &&(
                    <Button size="small" onClick={()=> dispatch(deletePost(post._id))}>
                    Delete
                    </Button>
                )}
            </Grid>
            </Grid>
            
            
        </Card>
        
    );
}
export default Post;

