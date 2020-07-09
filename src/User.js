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
    if(this.favoriteRecipes.includes(recipe)) {
      let index = this.favoriteRecipes.indexOf(recipe)
      this.favoriteRecipes.splice(index, 1);
    } else {
      this.favoriteRecipes.push(recipe)
    }
  }

  toggleRecipeToCook(recipe) {
    if(this.recipesToCook.includes(recipe)) {
      let index = this.recipesToCook.indexOf(recipe)
      this.recipesToCook.splice(index, 1);
    } else {
      this.recipesToCook.push(recipe)
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
