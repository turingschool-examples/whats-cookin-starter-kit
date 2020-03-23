class User {
  constructor(userId, pantry, favoriteRecipes, recipesToCook, recipesCooked) {
    this.userId = userId;
    this.pantry = pantry || [];
    this.favoriteRecipes = favoriteRecipes || [];
    this.recipesToCook = recipesToCook || [];
    this.recipesCooked = recipesCooked || [];
  }
  addToFavorites() {

  }
  removeFromFavorites() {

  }
  checkPantry() {

  }
  addToPantry() {

  }
  removeFromPantry() {

  }
  cookRecipe() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
