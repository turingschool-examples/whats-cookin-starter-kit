const Ingredient = require('./Ingredient');

class Recipe {
  constructor(name, id, image) {
    this.name = name;
    this.id = id;
    this.ingredients = []; // think on this...may be too long to pass in constructor
    this.image = image;
    this.instructions = []; // ''
    this.tags = []; // ''
    this.hasBeenCooked = false;
  }
  calculateCostOfIngredients() {
    // use ingredients array (amt & quantity) and use reduce to
    // add all prices together
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
