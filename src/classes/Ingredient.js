class Ingredient {
  constructor(ingredientsData) {
    this.id = ingredientsData.id;
    this.name = ingredientsData.name;
    this.estimatedCostInCents = ingredientsData.estimatedCostInCents;
  }
};

module.exports = Ingredient;
