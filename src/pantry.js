class Pantry {
  constructor(user, pantry, recipeData, ingredientsData) {
    this.user = user;
    this.pantry = pantry;
    this.recipeData = recipeData;
    this.ingredientsData = ingredientsData;
  }
  determineIfHasIngredients(recipe) {
    var neededIngredients = this.getNeededIngredients(recipe);
    if (neededIngredients.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  convertIngredientIdToName() {

  }
  getNeededIngredients(recipe) {
    let userNeeds = [];
    recipe.ingredients.forEach(recipeIngredient => {
      let pantryItem = this.pantry.find(currentPantryItem => {
        return recipeIngredient.id === currentPantryItem.ingredient;
      });
      if (pantryItem) {
        let difference = this.calculateDifference(recipeIngredient.quantity.amount, pantryItem.amount);
        if (difference > 0) {
          userNeeds.push({
            "ingredient": pantryItem.ingredient,
            "amount": difference
          });
        }
      } else {
        userNeeds.push({
          "ingredient": recipeIngredient.id,
          "amount": recipeIngredient.quantity.amount
        });
      }
    });
    return userNeeds;
  }
  calculateDifference(recipeAmount, pantryAmount) {
    let difference = recipeAmount - pantryAmount;
    return difference;
  }
  removeUsedIngredients(recipe) {
    // called by user.cookRecipe
    // subtracts the amount of each ingredient from pantry
    return this.pantry.filter(ingredient => {})
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
