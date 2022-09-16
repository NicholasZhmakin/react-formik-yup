import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { SignupSchema } from './../validation-schema';
import { ISignupValues } from './../types';

const FormikWithMUI: React.FC = () => {
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
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" className="custom-input" />
          <ErrorMessage name="email" component="div" className="error-message" />

          <label htmlFor="username">Username</label>
          <Field name="username" type="text" className="custom-input" />
          <ErrorMessage name="username" component="div" className="error-message" />

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type={showValue.password ? 'text' : 'password'}
            className="custom-input"
          />
          <ErrorMessage name="password" component="div" className="error-message" />

          <label>
            <Field
              name="show-password"
              type="checkbox"
              checked={showValue.password}
              onChange={() => {
                handleClickShowPassword('password');
              }}
            />
            Show password
          </label>
          <br />

          <label htmlFor="confirm-password">Confirm password</label>
          <Field
            name="confirm-password"
            type={showValue.confirmPassword ? 'text' : 'password'}
            className="custom-input"
          />
          <ErrorMessage name="confirm-password" component="div" className="error-message" />

          <label>
            <Field
              name="show-confirm-password"
              type="checkbox"
              checked={showValue.confirmPassword}
              onChange={() => {
                handleClickShowPassword('confirmPassword');
              }}
            />
            Show confirm password
          </label>
          <br />

          <label htmlFor="firstName">First name</label>
          <Field name="firstName" type="text" className="custom-input" />
          <ErrorMessage name="firstName" component="div" className="error-message" />

          <label htmlFor="lastName">Last name</label>
          <Field name="lastName" type="text" className="custom-input" />
          <ErrorMessage name="lastName" component="div" className="error-message"/>

          <label>
            <Field type="checkbox" name="policy" />I agree to terms & conditions
          </label>
          <ErrorMessage name="policy" component="div" className="error-message" />

          <br />
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikWithMUI;
