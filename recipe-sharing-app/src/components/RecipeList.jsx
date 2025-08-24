import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';
import React from 'react';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <><div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>Prep Time: {recipe.prepTime} mins</p>
          <p>Ingredients: {recipe.ingredients.join(', ')}</p>
        </div><div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <Link to={`/recipes/edit/${recipe.id}`}>
              <button>Edit</button>
            </Link>
          </div></>

      ))}
    </div>
  );
};

export default RecipeList;