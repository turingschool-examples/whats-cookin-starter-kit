const Recipe = require('../src/recipe');
const recipeData = require('../data/recipes');

class Pantry {
  constructor(userPantry) {
    this.pantry = userPantry;
    this.mealToCook = []
  };

  validateMeal(currentRecipe) {
    
    //checkes ingridients and quantity required
    //if above equals true, return true (enable cook button)
    //if above equals false return false. (run requiredForMeal)
  };

  requiredForMeal() {
    //return values and required amount
  };

  cookMeal() {
    /// set mealToCook to empty []
    //run remove item(s) from pantry
  }

  removeUsedIngredient() {
    //after user clicks cook mean removes items and quantities from pantry.
  };


}

module.exports = Pantry;
