const Pantry = require('../scripts/Pantry');

class Users {
  constructor(user) {
    this.id = user.id,
    this.name = user.name,
    this.pantry = new Pantry(user.pantry),
    this.favoriteRecipes = [],
    this.currentRecipes = []
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
