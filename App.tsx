import React from 'react';
import './style.css';

import Form from './Form';

import FirstStepUseFormik from './useFormik/FirstStepUseFormik';
import SecondStepUseFormik from './useFormik/SecondStepUseFormik';
import ThirdStepUseFormik from './useFormik/ThirdStepUseFormik';

import FormikWithMUI from './Formik/FormikWithMUI';
import FormikWithoutMUI from './Formik/FormikWithoutMUI';

export default function App() {
  return (
    <div>
      <h1>Formik and Yup</h1>
      <FormikWithoutMUI />
    </div>
  );
}
