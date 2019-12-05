const Ingredient = require('../src/ingredients.js');
ingredients = new Ingredient(20081, 'wheat flour', 142);


class Recipe {
  constructor(id, name, image, tags, instructions) {
    this.id = id;
    this.tags = tags;
    this.name = name;
    this.image = image;
    this.instructions = instructions;
    this.ingredients = ingredients;
    // console.log(this.ingredients);
  }



  filterByIngredients() {
  }

  findCostPerRecipe() {
    return this.ingredients.reduce((acc, ingredient) => {
      return ingredient.forEach(ingredient => {
        console.log('something')
      })
    }, 0);
  }

  retrieveInstructions() {
  }
}

module.exports = Recipe;
