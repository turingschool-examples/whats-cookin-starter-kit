class User {
  constructor(user) {
    this.pantry = []
    this.name = user.name
    this.id = user.id
    this.pantry = user.pantry
    this.favoriteRecipes = []
    this.storedFavoriteRecipes = []
    this.recipesToCook = []
  }

  addRecipeToFavorites(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  filterByTag(tag) {
    return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
  }

  filterByNameOrIngredient(input) {
    let filteredRecipes = [];
    
    this.favoriteRecipes.forEach(recipe => {
      if (recipe.name.includes(input)) {
        filteredRecipes.push(recipe)
      } else {
        recipe.ingredients.forEach(ingredient => {
          if (ingredient.includes(input)) {
            filteredRecipes.push(recipe)
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