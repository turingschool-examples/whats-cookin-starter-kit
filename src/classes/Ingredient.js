class Ingredient {
  constructor(ingredientInfo, recipeInfo) {
    this.id = ingredientInfo.id
    this.name = ingredientInfo.name
    this.estimatedCostInCents = ingredientInfo.estimatedCostInCents
    this.amount = recipeInfo.amount
    this.unit = recipeInfo.unit

  }
}

module.exports = Ingredient 