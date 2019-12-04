class Recipes {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.instructions = recipe.instructions;
    this.ingredients = recipe.ingredients;
    this.tags = recipe.tags;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipes;
}
