class Ingredient {
  constructor(ingredientInfo, recipeInfo) {
    this.amount = recipeInfo.quantity.amount
    this.estimatedCostInCents = ingredientInfo.estimatedCostInCents
    this.id = ingredientInfo.id
    this.name = ingredientInfo.name
    this.unit = this.convertUnits(recipeInfo.quantity.unit)
  }

  convertUnits(unit) {
    let conversions = {
      "c": ["cup", "cups"],
      "tsp": ["teaspoon", "teaspoons"],
      "tbsp": ["tablespoon", "tablespoons"],
      "lb": ["pound", null],
      "lbs": [null, "pounds"],
      "oz": ["ounce", "ounces"],
    }
    unit = unit.toLowerCase()
    if (conversions.hasOwnProperty(unit) && this.amount <= 1) {
      unit = conversions[unit][0]
    } else if (conversions.hasOwnProperty(unit) && this.amount > 1) {
      unit = conversions[unit][1]
    }
    return unit
  }
}

module.exports = Ingredient 