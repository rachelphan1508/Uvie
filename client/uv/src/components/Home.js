import React, {useEffect, useState} from 'react';
import '../App.css'
import Posts from './Posts/Posts.js';
import Form from './Form/Form.js';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts.js'
import useStyles from '../styles.js'
import Trending from './trending.js';



const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
      <Grow in>
        <Container>
            
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={8}> 
              <Form currentId={currentId}/>
              <Posts setCurrentId={setCurrentId}/>
              </Grid> 
              <Grid item xs={12} sm={4}> 
              
              <Trending/>
              </Grid> 
            </Grid>
            
          </Container>
      </Grow>

    );
}

export default Home;
