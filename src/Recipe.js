const Ingredient = require('./Ingredient');

class Recipe {
  constructor(recipeData) {
    this.name = recipeData.name;
    this.id = recipeData.id;
    this.ingredients = recipeData.ingredients;
    this.image = recipeData.image;
    this.instructions = recipeData.instructions;
    this.tags = recipeData.tags;
    this.printedInstructions = undefined;
    this.hasBeenCooked = false;
    this.hasBeenFavorited = false;
  }

  calculateCostOfIngredients(ingredients) {
    let allIngredientIds = ingredients.map(ingredient => ingredient.id);
    let ingredientIds = this.ingredients.map(ingredient => ingredient.id)
    let necessaryIngIds = allIngredientIds.filter(item => {
      return ingredientIds.includes(item);
    })
  }

  returnInstructions() {
    return this.printedInstructions = this.instructions.map(instruction =>
      instruction.instruction)
  }

  cookRecipe() {
    this.hasBeenCooked = true;
    return true;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
