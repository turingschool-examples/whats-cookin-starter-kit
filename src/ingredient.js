class Ingredient {
  constructor(ingredientId, name, costInCents, amount) {
    this.ingredientId = ingredientId;
    this.name = name;
    this.costInCents = costInCents;
    this.amount = amount;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}
