class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
    // this.amount = amount;
    // this.ingredientsData = ingredientsData;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}
