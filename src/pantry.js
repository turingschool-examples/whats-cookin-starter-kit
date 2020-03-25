class Pantry {
  constructor(user, pantry, recipeData, ingredientsData) {
    this.user = user;
    this.ingredients = pantry;
    this.recipeData = recipeData;
    this.ingredientsData = ingredientsData;
  }
  checkIngredients(recipe) {
    // iterate over the recipe ingredients
    // iterate over the users pantry
    // if the user has the ingredient,
    // check if they have the right amount
    // if they don't have the right amount, add that.
    // addIngredient()
    // if they don't have the ingredient, add the entire object
    
  }
  addIngredient() {

  }
  removeIngredient() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
