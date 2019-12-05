class Recipe {
  constructor(recipeData) {
    this.name = recipeData.name;
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.tags = recipeData.tags;
  }
  searchByIngredient(){

  }
  filterByType(){

  }
  getCost(){

  }
  getInstructions(){

  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
