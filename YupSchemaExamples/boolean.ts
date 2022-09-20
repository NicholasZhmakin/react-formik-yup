import * as Yup from 'yup';

export const SchemaBoolean = Yup.object({
  acceptance: Yup.bool(),
  policy: Yup.bool().oneOf([true], 'Field must be checked'),
});
