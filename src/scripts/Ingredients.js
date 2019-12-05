class Ingredients {
  constructor(ingredient) {
    this.id = ingredient.id,
    this.name = ingredient.name,
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
  }

  priceInDollars() {
    let dollars = this.estimatedCostInCents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
  }

}

if (typeof module !== 'undefined') {
  module.exports = Ingredients;
}
