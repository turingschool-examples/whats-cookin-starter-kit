class Ingredient {
  constructor(id, name, estimatedCost) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = estimatedCost;
    this.quantity = {}
  }
}

module.exports = Ingredient;
