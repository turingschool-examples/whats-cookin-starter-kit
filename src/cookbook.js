// const recipeClassData = require('../data/recipes.js');

class Cookbook {
  constructor(recipeData) {
    this.cookbook = recipeData;
  }

  loadBook() {
    this.cookbook.push();
  }
}

if (typeof module !== 'undefined'){
  module.exports = Cookbook;
}
