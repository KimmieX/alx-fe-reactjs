import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function FormikForm() {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('https://mockapi.io/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      console.log('User registered:', result);
      resetForm();
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          {['username', 'email', 'password'].map((field) => (
            <div key={field}>
              <label>{field}</label>
              <Field type={field === 'password' ? 'password' : 'text'} name={field} />
              <ErrorMessage name={field} component="div" style={{ color: 'red' }} />
            </div>
          ))}
          <button type="submit" disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
}