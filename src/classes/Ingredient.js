class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.unit = ingredient.quanitity.unit;
    this.amount = ingredient.quantity.amount;
    this.cost;
  }
  getCost() {
    this.cost = this.amount * ingredient.estimatedCostInCents;
  }

}

export default Ingredient;
