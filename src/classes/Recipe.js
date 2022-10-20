const Ingredient = require("./Ingredient");

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }
  retrieveIngredients(ingredientsData) {
    this.ingredients = this.ingredients.map((item) => {
      const element = ingredientsData.find((ingr) => ingr.id === item.id);
      return new Ingredient(element, item.quantity);
    });
  }

  determineNames() {
    const ingredientNames = this.ingredients.map((item) => {
      return item.name;
    });
    return ingredientNames;
  }

  getCost() {
    return this.ingredients.reduce((acc, currentItem) => {
      const totalCost = acc + currentItem.countEstCost();
      return totalCost;
    }, 0);
  }

  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;
