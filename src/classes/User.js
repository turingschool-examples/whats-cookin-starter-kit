class User {
  constructor(user) {
    this.pantry = []
    this.name = user.name
    this.id = user.id
    this.pantry = user.pantry
    this.favoriteRecipes = []
  }

  addRecipeToFavorites(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
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
    return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag));
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

  clearFilters() {
    this.filteredFavorites = []
  }
}

module.exports = User