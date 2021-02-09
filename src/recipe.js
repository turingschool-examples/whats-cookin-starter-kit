// const Ingredient = require("./ingredient.js");

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }
  returnIngredientNames(ingredientData) {
    const recipeIngredients = [];
    this.ingredients.forEach((recipeIngredient) => {
      return recipeIngredients.push(
        ingredientData.find((ingredient) => {
          return recipeIngredient.id === ingredient.id;
        })
      );
    });
    const ingredientNames = recipeIngredients.map((ingredient) => {
      return ingredient.name;
    });

    return ingredientNames;
  }
  calculateRecipeCost(ingredientData) {
    const recipeIngredients = [];
    this.ingredients.forEach((recipeIngredient) => {
      return recipeIngredients.push(
        ingredientData.find((ingredient) => {
          return recipeIngredient.id === ingredient.id;
        })
      );
    });
    const cost = recipeIngredients.reduce((acc, curr) => {
      return acc + curr.estimatedCostInCents;
    }, 0);
    return Number((cost / 100).toFixed(2));
  }
  returnRecipeInstructions() {
    return this.instructions;
  }
}

if (typeof module !== "undefined") {
  module.exports = Recipe;
}
