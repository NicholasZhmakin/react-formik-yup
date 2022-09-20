import * as Yup from 'yup';

const SchemaArray1 = Yup.object().shape({
  names: Yup.array().of(Yup.string()),
  years: Yup.array().of(Yup.number().integer()),
  daysOfWeek: Yup.array().of(
    Yup.object().shape({
      dayOfWeek: Yup.string().required(),
      checked: Yup.boolean(),
    })
  ),
});

/*
  array.ensure(): this
  Ensures that the value is an array, by setting the default to [] and transforming null and undefined values to an empty array as well. Any non-empty, non-array value will be wrapped in an array.

  array.compact(rejector: (value) => boolean): Schema
  Removes falsey values from the array. Providing a rejecter function lets you specify the rejection criteria yourself.
*/
const SchemaArray2 = Yup.object().shape({
  people: Yup.array().min(10, 'Min 10 people'),
  places: Yup.array().max(5, 'Max 5 places'),
  countries: Yup.array().max(5).min(10),
  planets: Yup.array().of(Yup.string()).length(8),
  other: Yup.array().ensure(),
  mix: Yup.array().compact(),
});

const SchemaArray3 = Yup.object().shape({
  services: Yup.array().min(1).of(SchemaArray2),
});

const SchemaArray4 = Yup.object().shape({
  email: Yup.mixed()
    .when('isArray', {
      is: Array.isArray,
      then: Yup.array().of(Yup.string()),
      otherwise: Yup.string(),
    })
    .required(),
});
