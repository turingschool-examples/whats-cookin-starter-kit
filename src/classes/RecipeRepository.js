class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData ? recipeData : [];
    this.recipesByTag = [];
    this.recipesByName = [];
  };

  filterRecipesByTag(tag) {
    this.recipesByTag = this.recipes.filter((recipe) => recipe.tags.includes(tag))
    return this.recipesByTag.length;
  };

  filterRecipesByName(name) {
    this.recipesByName = this.recipes.filter((recipe) => recipe.name.toUpperCase().includes(name));
    return this.recipesByName.length;
  };
}

export default RecipeRepository;
