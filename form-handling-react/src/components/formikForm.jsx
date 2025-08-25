import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function FormikForm() {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values) => {
    console.log('Formik submitting:', values);
    // Simulate API call here
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="space-y-4">
        {['username', 'email', 'password'].map((field) => (
          <div key={field}>
            <label className="block">{field}</label>
            <Field
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              className="border p-2 w-full"
            />
            <ErrorMessage name={field} component="p" className="text-red-500" />
          </div>
        ))}
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Register with Formik
        </button>
      </Form>
    </Formik>
  );
}