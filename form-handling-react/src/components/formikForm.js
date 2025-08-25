import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Submitting:', values);
    setSubmitting(false);
    // Simulate API call or next step
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-6 bg-white shadow-md rounded space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <Field
              type="text"
              name="username"
              id="username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}