import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const onSubmit = (values) => {
  console.log(values);
};


  

export default function FormValidate() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            {errors.name && touched.name && <div className="error text-white">{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            {errors.email && touched.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            {errors.password && touched.password && <div className="error">{errors.password}</div>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" name="confirmPassword" id="confirmPassword" />
            {errors.confirmPassword && touched.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
