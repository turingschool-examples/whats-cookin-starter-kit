class Ingredient {
  constructor(ingredientInfo, recipeInfo) {
    this.id = ingredientInfo.id
    this.name = ingredientInfo.name
    this.estimatedCostInCents = ingredientInfo.estimatedCostInCents
    this.amount = recipeInfo.quantity.amount
    this.unit = recipeInfo.quantity.unit

  }
}

module.exports = Ingredient 