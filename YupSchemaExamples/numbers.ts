import * as Yup from 'yup';

/*
  number.truncate(): Schema
  Transformation that coerces the value to an integer by stripping off the digits to the right of the decimal point.

  number.round(type: 'floor' | 'ceil' | 'trunc' | 'round' = 'round'): Schema
  Adjusts the value via the specified method of Math (defaults to 'round').
*/
const SchemaNumbers = Yup.object().shape({
  age: Yup.number().min(1, 'Min 1').max(100, 'Max 100'),
  value: Yup.number().positive('Value must be a positive number'),
  day: Yup.number().integer(),
  code: Yup.number()
    .moreThan(10, 'Must be more than 10')
    .lessThan(9999, 'Must be less than 9999'),
  price: Yup.number().truncate(),
  cost: Yup.number().round('ceil'),
});
