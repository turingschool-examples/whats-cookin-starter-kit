class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.quantity = ingredient.quantity;
    this.amount = this.quantity.amount;
    this.unit = this.quantity.unit;
  }
}

module.exports = Ingredient;
