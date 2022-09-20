import * as Yup from 'yup';

export const SchemaBoolean = Yup.object({
  acceptance: Yup.bool(),
  policy: Yup.bool().oneOf([true], 'Field must be checked'),
});

export const SchemaDate = Yup.object({
  website: Yup.string().url().nullable(),
  createdOn: Yup.date().default(() => new Date()),
});
