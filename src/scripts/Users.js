class Users {
  constructor(user) {
    this.id = user.id,
    this.name = user.name,
    this.pantry = null,
    this.favoriteRecipes = [],
    this.currentRecipes = []
  }

  createPantry(pantry) {
    this.pantry = pantry;
  }

  addFavoriteRecipe(recipeId) {
    this.favoriteRecipes.push(recipeId);
  }

  addCurrentRecipe(recipeId) {
    this.currentRecipes.push(recipeId);
  }

}

if (typeof module !== 'undefined') {
  module.exports = Users;
}
