class Ingredients {
  constructor(id, name, estimatedCost) {
    this.id = id,
    this.name = name,
    this.estimatedCostInCents = estimatedCost;
  }

  priceInDollars() {
    return this.estimatedCostInCents / 100;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Ingredients;
}
