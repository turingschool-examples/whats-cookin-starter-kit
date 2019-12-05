class Ingredients {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    // cost in cents
  }
  priceInDollars() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredients;
}
