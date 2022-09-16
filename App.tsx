import React from 'react';
import './style.css';

import Form from './Form';
import FirstStepUseFormik from './useFormik/FirstStepUseFormik';
import SecondStepUseFormik from './useFormik/SecondStepUseFormik';
import ThirdStepUseFormik from './useFormik/ThirdStepUseFormik';

export default function App() {
  return (
    <div>
      <h1>Formik and Yup</h1>
      {/* <Form /> */}
      <ThirdStepUseFormik />
    </div>
  );
}
