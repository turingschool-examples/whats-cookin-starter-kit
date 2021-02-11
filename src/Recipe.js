const Ingredient = require('./Ingredient');
const ingredientsData = require('../data/ingredients.js')
const ingredients = ingredientsData.ingredientsData;

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient));
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  getIngredientsNeeded() {
    const ingredientIds = this.ingredients.map(ingredient => ingredient.id);
    const ingredientNames = ingredientIds.map(id => {
      if (ingredients.find(el => el.id === id)) {
        return ingredients[ingredients.findIndex(el => el.id === id)].name;
      }
    });
    return ingredientNames;
  }

  getCost() {
    const costInCents = this.ingredients.reduce((acc, ing) => {
      acc += ing.amount * ingredients[ingredients.findIndex(el => el.id === ing.id)].estimatedCostInCents;
      return acc;
    }, 0);
    return (costInCents / 100);
  }

  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;
