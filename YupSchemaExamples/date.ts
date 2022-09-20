import * as Yup from 'yup';

export const SchemaDate = Yup.object({
  website: Yup.string().url().nullable(),
  createdOn: Yup.date().default(() => new Date()),
});
