class Ingredient {
  constructor(ingredientRow) {
    this.id = ingredientRow.id;
    this.name = ingredientRow.name;
    this.estCost = ingredientRow.estimatedCostInCents;
  }
  countEstCost(amount) {
    return amount * this.estCost;
  }
}

module.exports = Ingredient;
