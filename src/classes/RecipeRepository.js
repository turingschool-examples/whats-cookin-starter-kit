import Recipe from "./Recipe";

class RecipeRepository {
  constructor(data, ingData) {
    this.recipes = data ? this.parseRecipes(data, ingData) : [];
    this.recipesByTag = [];
    this.recipesByName = [];
  };

  parseRecipes(allRecipes, ingData) {
    return allRecipes.map(recipe => new Recipe(recipe, ingData));
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
