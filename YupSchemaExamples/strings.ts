import * as Yup from 'yup';

const SchemaString1 = Yup.object().shape({
  firstName: Yup.string().max(255).required('First name is required'),
  lastName: Yup.string().max(255).required('Last name is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup.string().min(8).required('password is required'),
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

/*
  string.ensure(): Schema
  Transforms undefined and null values to an empty string along with setting the default to an empty string.
*/
const SchemaString2 = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Not valid email')
    .required('Email is required'),
  url: Yup.string().url('Not valid url').ensure(),
});

/*
  string.length(limit: number | Ref, message?: string | function): Schema
  Set a required length for the string value. 
  The ${length} interpolation can be used in the message argument
*/
const SchemaString3 = Yup.object().shape({
  username: Yup.string()
    .length(10, 'Username must contain 10 characters')
    .required('username is required'),
});

/*
  string.trim(message?: string | function): Schema
  Transforms string values by removing leading and trailing whitespace. If strict() is set it will only validate that the value is trimmed.
*/
const SchemaString4 = Yup.object().shape({
  username: Yup.string().trim(),
});

/*
  string.lowercase(message?: string | function): Schema
  Transforms the string value to lowercase. If strict() is set it will only validate that the value is lowercase.

  string.uppercase(message?: string | function): Schema
  Transforms the string value to uppercase. If strict() is set it will only validate that the value is uppercase.
*/
const SchemaString5 = Yup.object().shape({
  firstName: Yup.string().lowercase().trim().required('First name is required'),
  lastName: Yup.string().uppercase().trim().required('Last name is required'),
});
