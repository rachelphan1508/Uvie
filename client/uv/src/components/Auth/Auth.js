import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from '../styles.js';
import {GoogleLogin} from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined.js';
import Input from './Input.js';
import Icon from './Icon.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin,signup } from '../../actions/auth.js';

const initialState = {username: '', email: '', password:'', confirmPassword:''}

const Auth = () => {
  const classes=useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({... formData, [e.target.name]:e.target.value});
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword ((prevShowPassword)=>!prevShowPassword);
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) =>!prevIsSignUp);
    setShowPassword(false);
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj; //no error if res doesnt exist
    const token = res?.tokenId;
    try {
      dispatch({type:'AUTH', data: {result, token}});
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try again later");
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          Avatar

        </Avatar>
        <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                  <Input name="username" label="Username" handleChange={handleChange} />              
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
              { isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
          </Grid>
          
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </Button>

          <GoogleLogin
            clientId="845634240768-kvo54le0rosqct90tkgdcsl41ul6o0t0.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess = {googleSuccess}
            onFailure = {googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
                <Button onClick={switchMode}>
                  {isSignUp ? 'Already had an account? Log In' : "Don't have an account yet? Sign Up"}
                </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth

/*
<LockOutlinedIcon/>
*/
