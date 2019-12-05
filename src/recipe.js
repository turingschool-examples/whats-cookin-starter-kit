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

  calculateTotalCost(name) {
    let ingredients = []
    let findIngredients = recipeData.find(recipe => {
      if (recipe.name === name) {
        recipe.ingredients.map(ingredient => {
          ingredients.push(ingredient.id);
        })
      }
    })
    let findEachCost = ingredients.reduce((acc, ingredient) => {
      ingredientData.forEach(dataIngredient => {
        if(dataIngredient.id === ingredient) {
          acc += (dataIngredient.estimatedCostInCents*
        }
      })
      return acc;
    }, 0)
    return findEachCost;
    // let recipeCost = ingredientData.reduce((acc, ingredient) => {
    //   if (ingredient.name === recipeName) {
    //     acc += ingredient.estimatedCostInCents;
    //   }
    //   return acc;
    // }, 0)
    // return recipeCost;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
