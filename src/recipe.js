const Pantry = require('../src/Pantry');

class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.ingredients = recipeDetails.ingredients;
    this.instructions = recipeDetails.instructions;
    this.name = recipeDetails.name;
    this.tags = recipeDetails.tags;
  }

  getTotalCost() {
    this.ingredients.reduce((acc, ingredient) => {
      acc += ingredients.estimatedCostInCents;
      return acc;
    }, 0)
    Pantry.estimatedCostInCents = acc;
  }
}

module.exports = Recipe;
