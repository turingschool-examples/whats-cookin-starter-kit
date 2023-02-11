import Recipe from "./Recipe";

class RecipeRepository {
  constructor(data, ingredientsData) {
    this.recipes = data ? this.parseRecipes(data, ingredientsData) : [];
    this.recipesByTag = [];
    this.recipesByName = [];
  };

  parseRecipes(allRecipes, ingredientsData) {
    return allRecipes.map(recipe => new Recipe(recipe, ingredientsData));
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
