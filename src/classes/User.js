class User {
  constructor(user, ingredientsData, recipesData) {
    this.favoriteRecipes = []
    this.id = user.id
    this.name = user.name
    this.pantry = user.pantry
    // below is placeholder until later refactor (import ES6 at top of page)
    this.ingredientsData = ingredientsData
    this.recipesData = recipesData
  }

  getAllPantryIngredients() {
    const b = this.pantry.map(pantryObj => {
      const c = this.ingredientsData.reduce((acc, ingredientsObj) => {
        if (pantryObj.ingredient === ingredientsObj.id) {
          acc['id'] = ingredientsObj.id,
          acc['name'] = ingredientsObj.name,
          acc['amount'] = pantryObj.amount
        }
        return acc
      }, {})
      return c
    })
    b.map(pantryObj => {
      const d = this.recipesData.forEach(recipe => {
        const e = recipe.ingredients.forEach(ingredient => {
          if (pantryObj.id === ingredient.id) {
            pantryObj['unit name'] = ingredient.quantity.unit
          }
        })
      }
      )
    })
  return b
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
