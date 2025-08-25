import { useState } from 'react';

export default function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    else if (ingredients.split('\n').length < 2) newErrors.ingredients = 'Include at least two ingredients';
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = { title, ingredients, steps };
    console.log('Submitting:', newRecipe);
    // TODO: Send to backend or update state
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-2xl font-bold text-center">Add a New Recipe</h2>

      <div>
        <label className="block font-medium mb-1">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Ingredients (one per line)</label>
        <textarea
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Preparation Steps</label>
        <textarea
          rows="4"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
}