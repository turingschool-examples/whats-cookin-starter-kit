class User {
  constructor(user, userData, recipeData, ingredientsData) {
    this.userId = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = user.favoriteRecipes || [];
    this.recipesToCook = user.recipesToCook;
    this.recipesCooked = user.recipesCooked;
    this.userData = userData;
    this.recipeData = recipeData;
    this.ingredientsData = ingredientsData;
  }
  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }
  removeFromFavorites(recipeToRemove) {
    this.favoriteRecipes.forEach(recipe => {
      if (recipeToRemove === recipe) {
        this.favoriteRecipes.splice(recipeToRemove, 1);
      }
    })
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
