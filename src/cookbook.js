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
