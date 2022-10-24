class Ingredient {
  constructor(ingredientInfo, recipeInfo) {
    this.amount = recipeInfo.quantity.amount
    this.estimatedCostInCents = ingredientInfo.estimatedCostInCents
    this.id = ingredientInfo.id
    this.name = ingredientInfo.name
    this.unit = recipeInfo.quantity.unit
  }
}

module.exports = Ingredient 