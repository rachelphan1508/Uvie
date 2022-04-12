import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility.js';
import VisibilityOff from '@material-ui/icons/VisibilityOff.js';
const Input = ({name, handleChange, label, half, autoFocus, type, handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half? 6 : 12}>
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
           
        />
    </Grid>
  )
}

export default Input;

/*
 InputProps={name === 'password' ? {
                endAdornment: (
                    
                ),

            } : null}
<InputAdornment position = "end">
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                    */