const recipeData = require('../data/recipes.js');

class Cookbook {
  constructor() {
    this.cookbook = [];
  }

  loadBook() {
    this.cookbook.push(recipeData);
  }
}
