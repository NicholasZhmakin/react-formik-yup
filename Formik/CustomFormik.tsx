import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import CustomInput from './../components/CustomInput';
import CustomSelect from './../components/CustomSelect';
import CustomCheckbox from './../components/CustomCheckbox';

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
  jobType: Yup.string().required('Required'),
  group: Yup.string().required("A radio option is required"),
  policy: Yup.bool().oneOf([true], 'Field must be checked')
});


const CustomFormik: React.FC = () => {

  const initialValues: CustomFormikInitValues = {
    name: '',
    jobType: '',
    group: '',
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
          <CustomSelect label="Job Type" name="jobType">
             <option value="">Select a job type</option>
             <option value="designer">Designer</option>
             <option value="development">Developer</option>
             <option value="product">Product Manager</option>
             <option value="other">Other</option>
          </CustomSelect>

          <br />
          <div id="my-radio-group">Group</div>
            <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="group" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="group" value="Two" />
              Two
            </label>
            <ErrorMessage name="group" component="div" className="error-message" />
          </div>

          <br />
          <CustomCheckbox name="policy">
             I accept the terms and conditions
          </CustomCheckbox>
          
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
