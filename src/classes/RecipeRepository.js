class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData ? recipeData : [];
    this.recipesByTag = [];
    this.recipesByName = [];
  };

  filterRecipesByTag(tag) {
    const filteredList = this.recipes.filter((recipe) => {
      return recipe.tags.includes(tag);
    })
    this.recipesByTag = filteredList;
  };

  filterRecipesByName(name) {
    this.recipesByName = this.recipes.filter((recipe) => recipe.name.toUpperCase().includes(name));
  };

  filterAllByTag(tag) {
    this.allRecipesByTag = this.allRecipes.recipes.filter(recipe => recipe.tags.includes(tag));
  };
}

export default RecipeRepository;
