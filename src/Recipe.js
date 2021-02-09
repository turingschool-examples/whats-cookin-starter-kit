
const Ingredient = require('../src/Ingredient.js');

class Recipe {
  constructor(recipe, ingredientsArray) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient.id, ingredient.quantity, ingredientsArray))
    this.name = recipe.name;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }

  getIngredients() {
    return this.ingredients.map(ingredient => ingredient.name);
  }

  getIngredientsCost() {
    let centsCost = this.ingredients.reduce((totalCost, ingredient) => totalCost += ingredient.estimatedCost, 0);
    return `$${centsCost / 100}`
  }

  returnInstructions() {
    let result =[]
    this.instructions.forEach(instruction => result.push(`${instruction.number}.) ${instruction.instruction}`))
    return result;
  }
}

module.exports = Recipe;