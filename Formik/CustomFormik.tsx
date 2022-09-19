import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import CustomInput from './../components/CustomInput';

interface CustomFormikInitValues {
  name: string,
  jobType: string,
  group: string,
  policy: false,
}

const CustomFormikSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  group: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  policy: Yup.bool().oneOf([true], 'Field must be checked')
});


const CustomFormik: React.FC = () => {

  const initialValues: CustomFormikInitValues = {
    name: '',
    jobType: '',
    group: ''
    policy: false,
  };

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CustomFormikSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >


          <CustomInput
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />

          
          <br />
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomFormik;
