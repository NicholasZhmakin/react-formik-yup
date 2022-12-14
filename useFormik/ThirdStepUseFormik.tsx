import React, { useState } from 'react';
import { useFormik } from 'formik';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { SignupSchema } from './../validation-schema';
import { ISignupValues } from './../types';

const ThirdStepUseFormik: React.FC = () => {
  const initialValues: ISignupValues = {
    email: '',
    username: '',
    password: '',
    ['confirm-password']: '',
    firstName: '',
    lastName: '',
    policy: false,
  };

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    alert(JSON.stringify(values, null, 2));
  };

  const {
    values,
    touched,
    errors,
    isSubmitting,
    getFieldProps,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit,
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
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField
        name="email"
        label="Email"
        variant="filled"
        {...getFieldProps('email')}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />

      <TextField
        name="username"
        label="Username"
        variant="filled"
        {...getFieldProps('username')}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
      />

      <TextField
        name="password"
        label="Password"
        variant="filled"
        {...getFieldProps('password')}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
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
        {...getFieldProps('confirm-password')}
        error={
          touched['confirm-password'] && Boolean(errors['confirm-password'])
        }
        helperText={touched['confirm-password'] && errors['confirm-password']}
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
        {...getFieldProps('firstName')}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />

      <TextField
        name="lastName"
        label="Last name"
        variant="filled"
        {...getFieldProps('lastName')}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="I agree to terms & conditions"
        name="policy"
        {...getFieldProps('policy')}
      />

      {touched.policy && Boolean(errors.policy) && (
        <FormHelperText error={touched.policy && Boolean(errors.policy)}>
          {errors.policy}
        </FormHelperText>
      )}

      <Button variant="contained" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default ThirdStepUseFormik;
