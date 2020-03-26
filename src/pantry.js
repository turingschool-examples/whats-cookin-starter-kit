const Recipe = require('../src/Recipe');
const User = require('../src/User');

let recipeTestData = require('../tests/Recipe-test-data');

class Pantry {
  constructor(userPantry) {
    this.pantry = userPantry;
  };

  validateMealToCook() {
    var mealToCook = recipeTestData[0];
    var mealIngridients = mealToCook.ingredients;

    //checks user mealtocoook property checkes ingridients and quantity required
    //if above equals true, return true
    //if aboce equals false return false.
  };

  requiredForMeal() {
  };

  removeUsedIngredient() {
    //after user selects mealToCook removes items and quantities form pantry.
  };


}

module.exports = Pantry;
