import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Ім\'я обов\'язкове для заповнення';
  } else if (/\d/.test(values.name)) {
    errors.name = 'Ім\'я не повинно містити цифри';
  }

  if (!values.email) {
    errors.email = 'Email обов\'язковий для заповнення';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Невірний формат email';
  }

  if (!values.phone) {
    errors.phone = 'Телефон обов\'язковий для заповнення';
  } else if (!/^\d{12}$/.test(values.phone)) {
    errors.phone = 'Телефон повинен містити 12 цифр';
  }

  return errors;
};

const Main = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '' }}
      validate={validate}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <div>
          <label>Ім'я</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label>Email</label>
          <Field type="text" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label>Телефон</label>
          <Field type="text" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>

        <button type="submit">Відправити</button>
      </Form>
    </Formik>
  );
};

export default Main;
