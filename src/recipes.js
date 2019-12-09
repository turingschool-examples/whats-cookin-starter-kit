class Recipes {
  constructor(recipe) {
    this.name = recipe.name;
    this.image = recipe.image;
    this.id = recipe.id;
    this.instructions = recipe.instructions;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;
  }
  calculateDollars() {
    // take each ingredient price through ingredients data and divide by 100
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Recipes;
}
