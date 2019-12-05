const recipeData = require('../sub-data/recipes-sub-data.js')
const ingredientData = require('../sub-data/ingredients-sub-data.js')

class Recipe {
  constructor(name, id, image, ingredients, instructions, tags) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
  }

  calculateTotalCost() {
    let name = recipeData.find
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
