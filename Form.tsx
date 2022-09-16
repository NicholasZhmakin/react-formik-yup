import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Form: React.FC = () => {
  const [showValue, setShowValue] = useState({
    password: false,
    confirmPassword: false,
  });
  const handleClickShowPassword = (name: 'password' | 'confirmPassword') => {
    setShowValue({
      ...showValue,
      [name]: !showValue[name],
    });
  };

  return (
    <form
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField name="email" label="Email" variant="filled" />

      <TextField name="username" label="Username" variant="filled" />

      <TextField
        name="password"
        label="Password"
        variant="filled"
        type={showValue.password ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  handleClickShowPassword('password');
                }}
                edge="end"
              >
                {showValue.password ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        name="confirm-password"
        label="Confirm password"
        variant="filled"
        type={showValue.confirmPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={() => {
                  handleClickShowPassword('confirmPassword');
                }}
                edge="end"
              >
                {showValue.confirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField name="firstName" label="First name" variant="filled" />

      <TextField name="lastName" label="Last name" variant="filled" />

      <FormControlLabel
        control={<Checkbox />}
        label="I agree to terms & conditions"
        name="policy"
      />

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
