import React from 'react';
import './style.css';

import Form from './Form';

import FirstStepUseFormik from './useFormik/FirstStepUseFormik';
import SecondStepUseFormik from './useFormik/SecondStepUseFormik';
import ThirdStepUseFormik from './useFormik/ThirdStepUseFormik';

import FormikWithMUI from './Formik/FormikWithMUI';
import FormikWithoutMUI from './Formik/FormikWithoutMUI';
import CustomFormik from './Formik/CustomFormik';
import FieldArrayForm from './Formik/FieldArrayForm';

export default function App() {
  return (
    <div>
      <h1>Formik and Yup</h1>
      <CustomFormik />
    </div>
  );
}
