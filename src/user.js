class User {
  constructor(user, userData, recipeData, ingredientsData) {
    this.userId = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.recipesCooked = [];
    this.shoppingList = [];
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
  filterRecipeByType() {

  }
  filterRecipeByIngredient() {

  }
  cookRecipe() {
    // helper function:
      // remove from recipesToCook
      // add to recipesCooked
      // call pantry.removeUsedIngredients() 
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
