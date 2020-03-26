const Recipe = require('../src/Recipe');
const User = require('../src/User');

class Pantry {
  constructor(userPantry) {
    // this.id = pantryDetails.id;
    // this.name = pantryDetails.name;
    // this.estimatedCostInCents = pantryDetails.estimatedCostInCents;
    this.pantry = userPantry;
  };

  validateMealToCook() {
    //checks user mealtocoook property checkes ingridients and quantity required
    // user.mealToCook
    //checks pantry
    //return boolean if user has ingridients to cook
  };


  requiredForMeal() {
    //checks meal to cook
    //gets items and quantity still required for meal
  };

  removeUsedIngredient() {
    //after user selects mealToCook removes items and quantities form pantry.
  };


}

module.exports = Pantry;
