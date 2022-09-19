import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

type FriendInfoType = {
  name: string;
  email: string;
};

interface FieldArrayFormInitValues {
  friends: FriendInfoType[];
}

const CustomFormikSchema = Yup.object().shape({
  friends: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })
    )
    .min(3, 'You need at least three friends')
});

const initialValues: FieldArrayFormInitValues = {
  friends: [
    {
      name: '',
      email: '',
    },
  ],
};

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  alert(JSON.stringify(values, null, 2));
};

const FieldArrayForm = () => (
  <div>
    <Formik
      initialValues={initialValues}
      validationSchema={CustomFormikSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => {
        console.log(errors);

        return (
          <Form>
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div className="friends">
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div className="friend-card" key={index}>
                        <div className="friend-field">
                          <label
                            htmlFor={`friends.${index}.name`}
                            className="custom-label"
                          >
                            Name
                          </label>
                          <Field
                            name={`friends.${index}.name`}
                            className="custom-input"
                            placeholder="Jane Doe"
                            type="text"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="col">
                          <label
                            htmlFor={`friends.${index}.email`}
                            className="custom-label"
                          >
                            Email
                          </label>
                          <Field
                            name={`friends.${index}.email`}
                            className="custom-input"
                            placeholder="jane@acme.com"
                            type="email"
                          />
                          <ErrorMessage
                            name={`friends.${index}.name`}
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="col">
                          <button
                            type="button"
                            className="remove-friend-button"
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="add-friend-button"
                    onClick={() => push({ name: '', email: '' })}
                  >
                    +
                  </button>
                </div>
              )}
            </FieldArray>


            {errors.friends && typeof errors.friends === 'string' &&
              <ErrorMessage
                name="friends"
                component="div"
                className="error-message"
              />
            }

            <br />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default FieldArrayForm;
