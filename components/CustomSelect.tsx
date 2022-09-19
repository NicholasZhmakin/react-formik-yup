import React from 'react';
import { useField } from 'formik';

interface CustomSelectProps {
  id?: string,
  label: string;
  name: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
   return (
     <div>
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error-message">{meta.error}</div>
       ) : null}
     </div>
   );
};

export default CustomSelect;