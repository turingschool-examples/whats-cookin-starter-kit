const recipeData = require('../sub-data/recipes-sub-data.js')
const ingredientData = require('../data/ingredients.js')

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
    let recipeIngredients = recipeObj.ingredients
    console.log(this.retrieveRecipe(name))
  
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
