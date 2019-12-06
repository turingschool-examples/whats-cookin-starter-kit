// const Ingredient = require('../src/ingredients.js');
// ingredients = new Ingredient(20081, 'wheat flour', 142);
// move ingredients to test class


class Recipe {
  constructor(id, name, image, tags, instructions, ingredients) {
    this.id = id;
    this.tags = tags;
    this.name = name;
    this.image = image;
    this.instructions = instructions;
    this.ingredients = ingredients;
  }



  filterByIngredients() {
  }

  findCostPerRecipe() {
  }

  retrieveInstructions() {
  }
}

module.exports = Recipe;
