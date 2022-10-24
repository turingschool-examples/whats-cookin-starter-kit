const Ingredient = require("./Ingredient")

class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id
    this.image = recipe.image
    this.ingredients = this.instantiateIngredients(recipe, ingredientsData)
    this.instructions = recipe.instructions
    this.name = recipe.name
    this.tags = recipe.tags
 }

  getTotalCost() {
    let total = this.ingredients.reduce((acc, ingredient) => {
      return acc = acc += ingredient.estimatedCostInCents * ingredient.amount
    }, 0) / 100
    return `$${total.toFixed(2).toString()}`
  }
  
  instantiateIngredients(recipe, ingredientsData) {
    return recipe.ingredients.map(recipeObject => {
      let targetDatasetObject = ingredientsData.find(datasetObj => recipeObject.id === datasetObj.id)
      return new Ingredient(targetDatasetObject, recipeObject)
    })
  }
}

module.exports = Recipe