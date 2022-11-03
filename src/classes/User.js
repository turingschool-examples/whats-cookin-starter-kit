const allData = require("../scripts")

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

  filterByTag(tag) {
    return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
  }

  filterByNameOrIngredient(input) {
    let filteredRecipes = []
    input = input.toLowerCase()
    this.favoriteRecipes.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(input)) {
        filteredRecipes.push(recipe)
      } else {
        recipe.ingredients.forEach(ingredient => {
          if (ingredient.name.toLowerCase().includes(input)) {
            if (!filteredRecipes.includes(recipe)) {
              filteredRecipes.push(recipe)
            }
          }
        })
      }
    })
    return filteredRecipes
  }

  filterByTag(tag) {
    return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
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
