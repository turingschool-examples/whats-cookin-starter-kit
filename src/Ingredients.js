class Ingredients {
  constructor(ingredientsData) {
    this.id = ingredientsData.id
    this.name = ingredientsData.name
    this.estimatedCostInCents = ingredientsData.estimatedCostInCents
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredients;
}
