const Ingredient = require("./Ingredient")

class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id
    this.name = recipe.name
    this.image = recipe.image
    this.instructions = recipe.instructions
    this.tags = recipe.tags
    this.ingredients = this.instantiateIngredients(recipe, ingredientsData)
  }

  instantiateIngredients(recipe, ingredientsData) {
    // console.log(ingredientsData)
    return recipe.ingredients.map(recipeObject => {
      let targetDatasetObject = ingredientsData.find(datasetObj => recipeObject.id === datasetObj.id)
      return new Ingredient(targetDatasetObject, recipeObject)
    })
  }

  getTotalCost() {
    let total = this.ingredients.reduce((acc, ingredient) => {
      return acc = acc += ingredient.estimatedCostInCents * ingredient.amount
    }, 0) / 100
    return `$${total.toFixed(2).toString()}`
  }
}

module.exports = Recipe