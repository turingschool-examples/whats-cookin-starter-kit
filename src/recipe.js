class Recipe {
  constructor(recipe) {
    this.tags = recipe.tags;
    this.name = recipe.name;
    this.ingredients = recipe.ingredients;
    this.id = recipe.id;
    this.instructions = recipe.instructions;
  }
}

module.exports = Recipe;