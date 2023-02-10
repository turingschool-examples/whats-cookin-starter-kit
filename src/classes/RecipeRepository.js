import Recipe from "./Recipe";

class RecipeRepository {
  constructor(data) {
    this.recipes = data ? this.parseRecipes(data) : [];
    this.recipesByTag = [];
    this.recipesByName = [];
  };

  parseRecipes(allRecipes) {
    return allRecipes.map(recipe => new Recipe(recipe));
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
