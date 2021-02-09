class Ingredient {
  constructor(id, name, estimatedCost) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = estimatedCost
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}