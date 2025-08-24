import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),


    addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(recipe =>
      favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

}));