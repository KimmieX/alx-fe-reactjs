import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = `${key} is required`;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Submitting:', formData);
      // Simulate API call here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['username', 'email', 'password'].map((field) => (
        <div key={field}>
          <label className="block">{field}</label>
          <input
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          {errors[field] && <p className="text-red-500">{errors[field]}</p>}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Register
      </button>
    </form>
  );
}