const recipes = require('../data/recipes');
const ingredients = require('../data/ingredients');
const allIngredients = ingredients.ingredientsData;

class Recipe {
  constructor(recipeObject) {
    this.id = recipeObject.id;
    this.ingredients = recipeObject.ingredients;
    this.instructions = recipeObject.instructions;
  }

  returnIngredients() {
    return this.ingredients.map(ingredient => allIngredients.find(i => i.id === ingredient.id).name);
  }

  returnTotalCost() {
    let costs = this.ingredients.map(ingredient => allIngredients.find(i => i.id === ingredient.id).estimatedCostInCents);
    let totalCost = costs.reduce((total, currentValue) => total + currentValue);
    return totalCost / 100;
  }

  returnInstructions() {
    return this.instructions;
  }

}



module.exports = Recipe;
