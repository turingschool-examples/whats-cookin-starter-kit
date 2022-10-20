class Ingredient {
  constructor(ingredientRow, quantity) {
    this.id = ingredientRow.id;
    this.name = ingredientRow.name;
    this.estCost = ingredientRow.estimatedCostInCents;
    this.quantity = quantity;
  }
  countEstCost() {
    return this.quantity.amount * this.estCost;
  }
}

module.exports = Ingredient;
