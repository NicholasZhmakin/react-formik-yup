import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


export const SignupSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  username: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  password: Yup.string()
    .min(8)
    .matches(passwordRules, 'Minimum eight characters, at least one letter, one capitalize letter and one number')
    .required('Required'),
  ['confirm-password']: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  policy: Yup.bool().oneOf([true], 'Field must be checked')
});