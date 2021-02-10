const Ingredient = require('./Ingredient');


class Recipe {
  constructor(recipe) {  //original data
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient => new Ingredient(ingredient));
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }
}

module.exports = Recipe;
