const Recipe = require('../src/recipe');

class RecipeRepo {
  constructor(recipeData = []) {
    this.recipes = recipeData.map(recipe => new Recipe(
      recipe.id,
      recipe.image,
      recipe.ingredients,
      recipe.instructions,
      recipe.name,
      recipe.tags
    ))
  }
}


if (typeof module !== "undefined") {
  module.exports = RecipeRepo;
}