class Ingredients {
  constructor(id, name, estimatedCostInCents) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = estimatedCostInCents;
  }
  ingredientsCost() {
    return this.estimatedCostInCents
  }
};

module.exports = Ingredients;
