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
  checkPantry(recipeToCook) {
    // look into the ingredients of the given recipe
    // look into the ingredients inside the pantry
    // if user has the ingredient, check the amount
    // if the user has the correct amount, return true
    // if the user doesn't have the ingredient, add the correct amount to the shopping shoppingList
    // if the user has the ingredient, but doesn't have the right amount, add it to the shoppingList
  }
  addToPantry(ingredient) {
    // check to see if they have any of the ingredients
    // if they do, add to amount
    // if they dont, add new object
    let something = this.pantry.forEach(item => {
      item.id !== ingredient.id
    })
    return something;
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
