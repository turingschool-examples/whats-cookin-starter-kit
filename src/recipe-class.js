const ingredientsData = require('../data/ingredients.js');
class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.requiredIngredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  giveInstructions() {
    return this.instructions.reduce((list, direction) => {
      return list += `${direction.number}: ${direction.instruction}<br>`
    }, '');
  }

  toggleFavorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  getTotalCost() {
    const ingredientList = this.createIngredientList();

    return ingredientList.reduce((totalPrice, ingredient) => {
      return totalPrice += (ingredient.estimatedCostInCents / 100);
    }, 0);
  }

  createIngredientList() {
    return this.requiredIngredients.reduce((ingredientList, ingredient) => {
      return ingredientList.concat(this.checkIngredientMatch(ingredient));
    }, []);
  }

  checkIngredientMatch(recipeIngredient) {
    return ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
  }
}
if (typeof module !== 'undefined') {
  module.exports = Recipe;
}