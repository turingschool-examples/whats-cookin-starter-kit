const { testIngredients, recipeData, ingredientsData } = require("../data/testData")
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
    let a = recipe.ingredients.map(recipeObject => {
      let targetDatasetObject = ingredientsData.find(datasetObj => recipeObject.id === datasetObj.id)
      return new Ingredient(targetDatasetObject, recipeObject)
    })

    return this.mergeIngredients(a)
  }
  mergeIngredients(ingredientsData) {
    let counter = 0
    let finalArray = []
    const listUniqueIds = ingredientsData.reduce((acc, curr) => {
      if (!acc.includes(curr.id)) {
        acc.push(curr.id)
      }
      return acc
    }, [])
    for (var i = 0; i < listUniqueIds.length; i++) {
      counter = 0
      const matches = ingredientsData.filter((originalIngredient) => {
        return listUniqueIds[i] === originalIngredient.id
      })
      const addedAmounts = matches.reduce((mergedIngredient, duplicate) => {
        counter += duplicate.amount
        mergedIngredient = duplicate
        mergedIngredient.amount = counter
        return mergedIngredient
      }, {})
      finalArray.push(addedAmounts)
    }
    return finalArray
  }
}

module.exports = Recipe