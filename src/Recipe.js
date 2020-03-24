const Ingredient = require('./Ingredient');

class Recipe {
  constructor(recipeData) {
    this.name = recipeData.name;
    this.id = recipeData.id;
    this.ingredients = recipeData.ingredients;
    this.image = recipeData.image;
    this.instructions = recipeData.instructions;
    this.tags = recipeData.tags;
    this.hasBeenCooked = false;
  }

  calculateCostOfIngredients() {
    // use ingredients array (amt & quantity) and use reduce to
    // add all prices together
    //this.ingredients.find(ingredient => ingredient ===  ? then execute code
    //this.ingredients.
    //maybe go through all ingredients (entire array) to see which ingredients are in the recipe

  }

  returnInstructions() {
    //use return value of this function to display instructions
    //on DOM in script.js
    //return instructions
  }

  cookRecipe() {
    // this.hasBeenCooked = true;
    // return true;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
