const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');

class User {
  constructor(userData) {
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry; //
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  checkIngredientAmts() {
  // Determine whether my pantry has enough ingredients to cook a given meal
  // returns boolean
  }

  determineMissingIngredients(recipe, pantry) {
  // Determine the amount of ingredients still needed to cook a given meal, based
  //on what’s in my pantry
  // check amounts against each other and return difference;
  // if difference is greater than zero, checkIngredientAmts will return false

  }

  removeIngredients() {
  // Remove the ingredients used for a given meal from my pantry, once that meal
  //has been cooked (only applicable if users have a list of mealsToCook; can be
  //considered a stretch goal)
  //we may need prop in recipe class - hasBeenCoooked (boolean) - that we will
  // reference in this method
  // check recipe for meal that has been cooked ( if === true) and subtract
  // ingredient amount from ingredient in pantry
  }

  checkIfHasBeenCooked() {
  // update recipesToCook array; invoke at end of removeIngredients()
  }

  unfavoriteMeal() {
 // remove meal from favorites array
  }

  favoriteMeal() {

  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
