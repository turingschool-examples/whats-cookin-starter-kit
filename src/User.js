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

  getSavedRecipes() {
    return this.favoriteRecipes.concat(this.recipesToCook)
  }

  searchRecipeByNameOrIng(userQuery) {
    userQuery = userQuery.toLowerCase()
    let savedRecipes = this.getSavedRecipes()
    return savedRecipes.filter(recipe => {
      let recipeName = recipe.id.name.toLowerCase()
      return recipeName.includes(userQuery)
      /* METHOD ONLY HALF COMPLETE, RETURN TO THIS PORTION */
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
