const recipeData = require('../sub-data/recipes-sub-data.js')
const ingredientData = require('../sub-data/ingredients-sub-data.js')

class Recipe {
  constructor(name, id, image, ingredients, instructions, tags) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
  }

  retrieveRecipe(name) {
    return recipeData.find(recipe => {
      if (recipe.name === name) {
        return recipe.ingredients.map(ingredient => {
          return ingredient
        })
      }
    })
  }

  calculateTotalCost(name) {
    let recipeObj = this.retrieveRecipe(name)
    let recipeI = recipeObj.ingredients
    let recipeIdAndAmount = recipeI.map(i => {
      return { id:i.id, amount:i.quanitity.amount}
    })
    let sum = ingredientData.reduce((acc, r) => {
      recipeIdAndAmount.map((i) => {
        if(r.id === i.id) {
          acc += r.estimatedCostInCents * i.amount
        }
      })
      return acc;
    }, 0)
    return sum * .01;
  
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
