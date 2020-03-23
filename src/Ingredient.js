class Ingredient {
  constructor(estimatedCostInCents, id, name) {
    this.estimatedCostInCents = estimatedCostInCents;
    this.id = id;
    this.name = name;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}
