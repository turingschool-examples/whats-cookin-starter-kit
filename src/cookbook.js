const recipeData = require('../data/recipes.js');

class Cookbook {
  constructor() {
    this.cookbook = [];
  }

  loadBook(recipeData) {
    this.cookbook.push(recipeData);
  }
}
