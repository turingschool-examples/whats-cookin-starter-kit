const Ingredient = require('../src/Ingredient');

class IngredientRepo {
  constructor(ingredientData = []) {
    this.ingredients = ingredientData.map(ingredient => {
      return new Ingredient(
        ingredient.id,
        ingredient.name,
        ingredient.estimatedCostInCents
      );
    });
  }
  returnIngredientId(ingredientName) {
    const ingredient = this.ingredients.find(ingredient => {
      return ingredient.name === ingredientName;
    });
    if (!ingredient) {
      return false;
    }
    return ingredient.id;
  }
}
if (typeof module !== 'undefined') {
  module.exports = IngredientRepo;
}
