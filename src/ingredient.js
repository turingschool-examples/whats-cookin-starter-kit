class Ingredient {
  constructor(id, name, estimatedCost) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = estimatedCost
  }

  calculateIngredientCost() {
    const ingredientCost = this.estimatedCostInCents / 100;
    return Number(ingredientCost.toFixed(2));
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}