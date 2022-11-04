// const allData = require("../scripts")

// REPLACE REPLACE REPLACE
const allData = require("../data/testData")

class User {
  constructor(user) {
    this.favoriteRecipes = []
    this.id = user.id
    this.name = user.name
    this.pantry = user.pantry
  }

  getAllPantryIngredients() {
    const allPantryIngredients = this.pantry.map(pantryObj => {
      return allData.ingredientsData.reduce((acc, ingredientsObj) => {
        if (pantryObj.ingredient === ingredientsObj.id) {
          acc['id'] = ingredientsObj.id,
          acc['name'] = ingredientsObj.name,
          acc['amount'] = pantryObj.amount
        }
        return acc
      }, {})
    })
    allPantryIngredients.map(pantryObj => {
      const targetObject = allData.recipesData.find(recipe => {
        return recipe.ingredients.some(ingredient => ingredient.id === pantryObj.id)
      })
      const targetIngredient = targetObject.ingredients.find(ingredient => ingredient.id === pantryObj.id)
      pantryObj['unit'] = targetIngredient.quantity.unit
    })
    return allPantryIngredients
  }

  addRecipeToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeRecipeFromFavorites(id) {
    this.favoriteRecipes.forEach((currentValue, i) => {
      if (id === currentValue.id) {
        this.favoriteRecipes.splice(i, 1)
      }
    })
  }

  removeRecipeFromFavorites(id) {
    this.favoriteRecipes.forEach((currentValue, i) => {
      if (id === currentValue.id) {
        this.favoriteRecipes.splice(i, 1)
      }
    })
  }
}

module.exports = User