const { postData } = require("../apiCalls")
const allData = require("../scripts")

class User {
  constructor(user) {
    this.favoriteRecipes = []
    this.id = user.id
    this.name = user.name
    this.pantry = user.pantry
  }

  addToPantry(event, addedAmount) {
    restructuredPantryObj = {
      userID: this.id,
      ingredientID: event.target.id, 
      amount: addedAmount
    }
    postData(restructuredPantryObj)
    // chain a .then that calls showPantry() to the above line
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
