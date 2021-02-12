const Ingredient = require('./Ingredient');

class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient));
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;

  }

  getIngredientsByName() {
    const ingredientNames = this.ingredients.map(recipeIngredient => {
        let matchingId = this.ingredientsData.find(ingredient => {
          return ingredient.id === recipeIngredient.id;
        });
        return matchingId.name;
    });
    return ingredientNames;
  }

  getCost() {
    const costInCents = this.ingredients.reduce((acc, recipeIngredient) => {
      acc += recipeIngredient.amount * this.ingredientsData[this.ingredientsData.findIndex(el => el.id === recipeIngredient.id)].estimatedCostInCents;
      return acc;
    }, 0);
    return (costInCents / 100);
  }

  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;
