
export interface ISignupValues {
  email: string,
  username: string,
  password: string,
  ['confirm-password']: string,
  firstName: string,
  lastName: string,
  policy: bool,
}