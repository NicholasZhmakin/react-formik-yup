import React, { useState } from 'react';
import { useFormik } from 'formik';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      ['confirm-password']: '',
      firstName: '',
      lastName: '',
      policy: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
      <TextField
        name="email"
        label="Email"
        variant="filled"
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <TextField
        name="username"
        label="Username"
        variant="filled"
        value={formik.values.username}
        onChange={formik.handleChange}
      />

      <TextField
        name="password"
        label="Password"
        variant="filled"
        value={formik.values.password}
        onChange={formik.handleChange}
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
        value={formik.values['confirm-password']}
        onChange={formik.handleChange}
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

      <TextField
        name="firstName"
        label="First name"
        variant="filled"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />

      <TextField
        name="lastName"
        label="Last name"
        variant="filled"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />

      <FormControlLabel
        control={<Checkbox checked={formik.values.policy} />}
        label="I agree to terms & conditions"
        name="policy"
        onChange={formik.handleChange}
      />

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
