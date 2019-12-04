class Users {
  constructor(id, name, pantry) {
    this.id = id,
    this.name = name,
    this.pantry = pantry,
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
