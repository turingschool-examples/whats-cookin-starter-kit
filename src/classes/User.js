class User {
  constructor(user) {
    this.favoriteRecipes = []
    this.id = user.id
    this.name = user.name
    this.pantry = []
    this.pantry = user.pantry
  }

  addRecipeToFavorites(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
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

    return filteredRecipes;
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