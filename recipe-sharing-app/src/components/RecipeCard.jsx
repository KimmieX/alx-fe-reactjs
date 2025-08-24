// src/components/RecipeCard.jsx
import { useRecipeStore } from '../store/recipeStore';

const RecipeCard = ({ recipe }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>💔 Unfavorite</button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>❤️ Favorite</button>
      )}
    </div>
  );
};

export default RecipeCard;