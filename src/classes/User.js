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

  filterByName(name) {
    return this.favoriteRecipes.filter(recipe => recipe.name.includes(name))
  }

  clearFilters() {
    this.filteredFavorites = []
  }
}

module.exports = User