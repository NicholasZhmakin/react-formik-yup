import React from 'react';
import './style.css';

import Form from './Form';
import FirstStepUseFormik from './useFormik/FirstStepUseFormik';
import SecondStepUseFormik from './useFormik/SecondStepUseFormik';

export default function App() {
  return (
    <div>
      <h1>Formik and Yup</h1>
      {/* <Form /> */}
      <SecondStepUseFormik />
    </div>
  );
}
