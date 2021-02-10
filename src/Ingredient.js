class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.cost = ingredient.estimatedCostInCents;
  }
}

module.exports = Ingredient;
