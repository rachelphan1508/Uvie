import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

//import memories from '../../images/memories.png';
//import * as actionType from '../../constants/actionTypes';
import useStyles from './styles.js';
import { useGoogleLogout } from 'react-google-login';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation(); 
  const navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/');
    setUser(null);
  }

  useEffect(()=> {
    const token = user?.token;

    //if token is expired, log out
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime() ) logout;
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">UVIE</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
          {user? (
          <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="primary" onClick={logout} >Logout</Button>

          </div>
          ) : (
              <Button component={Link} to= "/auth" variant="contained" color="primary">SIGN IN</Button>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


