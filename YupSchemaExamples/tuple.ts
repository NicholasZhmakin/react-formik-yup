import * as Yup from 'yup';

const SchemaTuple1 = Yup.tuple([
  Yup.string().label('name'),
  Yup.number().label('age').positive().integer(),
]);
