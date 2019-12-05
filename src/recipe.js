const Ingredient = require('../src/ingredients.js');
// ingredients = new Ingredient(20081, 'wheat flour', 142);


class Recipe {
  constructor(id, name, image, tags, instructions, ingredients ) {
    this.id = id;
    this.tags = tags;
    this.name = name;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.costPerRecipe = 0;
    // console.log(this.ingredients);
  }



  filterByIngredients() {
  }

  findCostPerRecipe(recipeId) {
    // take in id of ingredient
    // return cost of all ingredients
    this.ingredients.reduce((acc, val) => {
      // console.log(val);
      return acc;
    },0)
  }

  retrieveInstructions() {
  }
}

module.exports = Recipe;
