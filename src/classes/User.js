//const allData = require("../scripts")
const ingredientsData = require("../data/ingredients")
const recipeData = require("../data/recipes")

class User {
  constructor(user, allIngredients) {
    this.favoriteRecipes = []
    this.id = user.id
    this.name = user.name
    this.pantry = this.getAllPantryIngredients(user.pantry, allIngredients)
  }

  getAllPantryIngredients(pantry, allIngredients) {
    let reserved = ['small', 'large', 'pinch', '']
    const allPantryIngredients = pantry.map(pantryObj => {
      return allIngredients.reduce((acc, ingredientsObj) => {
        if (pantryObj.ingredient === ingredientsObj.id) {
          acc['id'] = ingredientsObj.id,
          acc['name'] = ingredientsObj.name,
          acc['amount'] = pantryObj.amount
          if (pantryObj.amount > 1 && !reserved.includes(ingredientsObj.unit)) {
            acc['unit'] = `${ingredientsObj.unit}s`
          } else { acc['unit'] = ingredientsObj.unit }
        }
        return acc
      }, {})
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
}

module.exports = User