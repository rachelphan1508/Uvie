import React, {useEffect, useState} from 'react';
import '../App.css'
import Posts from './Posts/Posts.js';
import {Container, AppBar, Typography, Grow, Grid, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts.js'
import useStyles from './styles.js'
import Trending from './trending.js';
import { useLocation } from 'react-router';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  
  const dispatch = useDispatch();
  const query = useQuery();
  //const page = query.get('page') || 1;
  //const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
      <Grow in>
        <Container>
            
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={8}> 
              <div>
                <h1>Home</h1>
              </div>
              
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