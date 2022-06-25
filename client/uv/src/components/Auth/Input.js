import React from 'react';
import { TextField, Grid } from '@material-ui/core';

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
