import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(recipeId); // Call the delete function
    navigate('/'); // Redirect after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
