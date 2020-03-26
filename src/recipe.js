class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
    this.isFavorite = false;
    this.cookNext = false;
  }

  getIngredientsCost() {
    let ingredientsCost = this.ingredients
      .map(ingredient => ingredient.estimatedCostInCents)
      .reduce((sum, cost) => {
        sum += cost;
        return sum
      }, 0);
    return `$${(ingredientsCost * .01).toFixed(2)}`
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite
  }

  toggleCookNext() {
    this.cookNext = !this.cookNext
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}