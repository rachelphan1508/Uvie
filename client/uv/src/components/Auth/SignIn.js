import React, {useState} from 'react';
import { Avatar, Box, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';

import Input from './Input.js';
import Icon from './Icon.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../actions/auth.js';
import SignInPhoto from  '../../images/login.png';
import useStyles from './styles.js';

const initialState = {email: '', password:''}

const SignIn = () => {
  let errors={}
  const classes=useStyles();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
  };
  const handleChange = (e) => {
    setFormData({... formData, [e.target.name]:e.target.value});
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword ((prevShowPassword)=>!prevShowPassword);
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
    console.log("Google Sign In was unsuccessful. Try again later");
  }
  return (
    <Container className={classes.container} maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={8}> 
                <Box component="img" 
                    maxWidth="90%"
                    src={SignInPhoto}/>
            </Grid>
        <Grid item xs={4}> 
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3" className={classes.intro} >Let's jump in!</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>     
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
          </Grid>
          
          <Button type="submit" fullWidth variant="contained" style={{backgroundColor: 'black', color: 'white' }} className={classes.button}>
             Log In
          </Button>

          <GoogleLogin
            clientId="845634240768-kvo54le0rosqct90tkgdcsl41ul6o0t0.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.button} style={{backgroundColor: '#ffffff' }} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess = {googleSuccess}
            onFailure = {googleFailure}
            cookiePolicy="single_host_origin"
          />
        <Grid className={classes.switchText}>
            Not a member yet? <Button className={classes.switchButton} onClick={()=> navigate('/signup')}> SIGN UP </Button>
        </Grid>
        </form>
      </Paper>
      </Grid>
      </Grid>
    </Container>
  )
}

export default SignIn;
