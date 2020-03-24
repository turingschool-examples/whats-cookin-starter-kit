class Ingredient {
  constructor(eachIngredient) {
    this.estimatedCostInCents = eachIngredient.estimatedCostInCents;
    this.id = eachIngredient.id;
    this.name = eachIngredient.name;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}
