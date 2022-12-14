import React from 'react';
import { useField } from 'formik';

interface CustomInputProps {
  id?: string,
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="custom-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

export default CustomInput;
