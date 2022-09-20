import * as Yup from 'yup';

const SchemaObject1 = Yup.object({
  name: Yup.string().required(),
  age: Yup.number().required().positive().integer(),
  email: Yup.string().email(),
  website: Yup.string().url(),
});

const SchemaObject2 = Yup.object().shape({
  person: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().required().positive().integer(),
    email: Yup.string().email(),
    website: Yup.string().url(),
  }),
});

// To make a validation async return a promise that resolves true or false or a ValidationError
const SchemaObject3 = Yup.object().shape({
  bevrage: Yup.string().test(
    'is-tea',
    '${path} is not tea',
    async (value) => (await value) === 'tea'
  ),
});
