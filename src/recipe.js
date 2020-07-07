const ingredientsData = require('../data/ingredients.js');
class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.isFavorite = false;
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
    return this.ingredients.reduce((ingredientList, ingredient) => {
      return ingredientList.concat(this.checkIngredientMatch(ingredient));
    }, []);
  }

  checkIngredientMatch(recipeIngredient) {
    return ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
  }
}

module.exports = Recipe;