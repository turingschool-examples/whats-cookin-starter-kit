
class Recipe {
  constructor(recipeInfo) {
    this.name = recipeInfo.name
    this.id = recipeInfo.id
    this.image = recipeInfo.image
    this.ingredients = recipeInfo.ingredients
    this.instructions = recipeInfo.instructions
    this.tags = recipeInfo.tags
  }

  findIngredientNames(ingredientsArray) {
    let result = []
    this.ingredients.forEach(ingredient => result.push((ingredientsArray.filter(item => item.id === ingredient.id)[0].name)))
    return result
  }

  calculateTotalCost(ingredientsArray) {
    let result = 0
    this.ingredients.forEach(ingredient => result += ((ingredientsArray.filter(item => item.id === ingredient.id)[0].estimatedCostInCents)))
    return `$${result / 100}`
  }

  printInstructions() {
    let result =[]
    this.instructions.forEach(instruction => result.push(`${instruction.number}.) ${instruction.instruction}`))
    return result;
  }

}

module.exports = Recipe;