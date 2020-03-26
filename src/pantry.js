class Pantry {
  constructor(user, pantry, recipeData, ingredientsData) {
    this.user = user;
    this.ingredients = pantry;
    this.recipeData = recipeData;
    this.ingredientsData = ingredientsData;
  }
  determineIfHasIngredients(recipe) {
    if (getNeededIngredients(recipe)) {
      return true;
    }
  }
  convertIngredientIdToName() {

  }
  getNeededIngredients(recipe) {
    // iterate over recipe

    // iterate over pantry
    // check each item
    // return array of needed items
  }
  removeUsedIngredients(recipe) {
    // called by user.cookRecipe
    // subtracts the amount of each ingredient from pantry
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
