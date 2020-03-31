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

  getIngredientsCost(recipe) {
    let ingredientsCost = recipe.ingredients
      .map(ingredient => ingredient.estimatedCostInCents)
      .reduce((sum, cost) => {
        sum += cost;
        return sum
      }, 0);
    return `$${(ingredientsCost * .01).toFixed(2)}`
  }

  toggleFavorite() {
    if (!this.isFavorite) {
      this.isFavorite = true;
    } else {
      this.isFavorite = false;
    }
  }

  toggleCookNext() {
    this.cookNext = !this.cookNext
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
