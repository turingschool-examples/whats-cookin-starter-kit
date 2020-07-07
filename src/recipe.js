class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.isFavorite = false;
  }

  giveInstructions() {
    return this.instructions.reduce((list, direction) => {
      return list += `${direction.number}: ${direction.instruction}<br>`
    }, '');
  }

  toggleFavorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }
}

module.exports = Recipe;