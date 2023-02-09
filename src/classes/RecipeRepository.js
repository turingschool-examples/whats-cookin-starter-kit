class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData ? recipeData : [];
    this.recipesByTag = [];
    this.recipesByName = [];
  };

  filterRecipesByTag(tag) {
    this.recipesByTag = this.recipes.filter((recipe) => recipe.tags.includes(tag))
  };

  filterRecipesByName(name) {
    this.recipesByName = this.recipes.filter((recipe) => recipe.name.toUpperCase().includes(name));
  };
}

export default RecipeRepository;
