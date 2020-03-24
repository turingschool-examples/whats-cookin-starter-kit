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
  checkPantry() {
    // if they have the correct amount, push to recipesToCook
    // else, push to shoppingList
  }
  addToPantry() {
    // check to see if they have any of the ingedient
    // if they do, add to amount
    // if they dont, add new object
  }
  removeFromPantry() {
    // remove the amount of ingredient used in meal from pantry
  }
  cookRecipe() {
    // helper function:
      // remove from recipesToCook
      // add to recipesCooked
      // removeFromPantry(ingredients)
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
