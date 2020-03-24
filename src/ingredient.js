class Ingredient {
  constructor(ingredient, ingredientsData) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
    this.amount = ingredient.amount;
    this.ingredientsData = ingredientsData;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}
