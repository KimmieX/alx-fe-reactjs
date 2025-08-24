import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const {
    setSearchTerm,
    setIngredientFilter,
    setMaxPrepTime,
    filterRecipes,
  } = useRecipeStore();

  const handleChange = () => {
    filterRecipes(); // Trigger filtering after any input change
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleChange();
        }}
      />
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => {
          setIngredientFilter(e.target.value);
          handleChange();
        }}
      />
      <input
        type="number"
        placeholder="Max prep time (mins)"
        onChange={(e) => {
          setMaxPrepTime(Number(e.target.value));
          handleChange();
        }}
      />
    </div>
  );
};