class User {
  constructor(usersData) {
    this.name = usersData.name
    this.id = usersData.id
    this.pantry = usersData.pantry
    this.favoriteRecipes = []
    this.recipesToCook = []
    this.groceryList = []
  }

  toggleFavoriteRecipe(recipe) {
    let existingRecipe = this.favoriteRecipes.find(faveRecipe => {
      if(faveRecipe.id === recipe.id) {
        return faveRecipe;
      }
    })
    if(existingRecipe) {
      let index = this.favoriteRecipes.indexOf(existingRecipe)
      this.favoriteRecipes.splice(index, 1);
    } else {
      this.favoriteRecipes.push(recipe)
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
