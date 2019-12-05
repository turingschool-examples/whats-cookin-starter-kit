class Cookbook {

  constructor(recipeData) {
    this.recipes = recipeData;
    this.costOfRecipe = 0;
    this.currentInstruction = 0;
  }

  filterRecipesByType() {

  }

  searchRecipeByIngredient() {

  }

  costOfRecipe() {

  }

  displayDirections() {

  }



}

  if (typeof module !== 'undefined') {
  module.exports = Cookbook;
} else {
  window.Cookbook = Cookbook;
}
