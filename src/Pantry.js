class Pantry {
  constructor(userObject) {
    this.pantry = userObject.pantry;
    this.recipe = userObject.recipesToCook;
    this.shoppingList = [];
  }
  enoughIngredients() {
    /*
    Determine whether my pantry has enough ingredients to cook a given meal
    need to check recipe ingredients against pantry ingredients
    return boolean value? 
    need recipes class and user class to test method
    */


  }

  stillNeedIngredients() {
    /*
    if enoughIngredients() === false;
     Determine the amount of ingredients still needed to cook a
     given meal, based on what’s in my pantry
    return ingredients missing form the user pantry
    need recipes class and user class to test method
    */
  }

  removeFromPantry() {
    /*
    Remove the ingredients used for a given meal from my pantry,once that meal has been cooked
    after cook adjust qty of ingredients from pantry to recipe
    required ingredints
    need recipes class and user class to test method
    */
  }
  /*
  mealsToCook() {
    stretch method
    (only applicable if users have a list of mealsToCook; can be considered a stretch goal)
  }
  */
}

module.exports = Pantry;