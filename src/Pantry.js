class Pantry {
  constructor(userObject) {
    this.pantry = userObject.pantry;
    this.recipe = userObject.recipesToCook;
    this.shoppingList = [];
  }

  checkPantry(recipe) {
    let hasIngredients;
    const ingObj = this.pantry.reduce((acc, element) => {
      return {...acc, [element.ingredient] : element.amount};
    }, {})
    
    recipe.ingredients.forEach(ingredient => {
      if (!ingObj.hasOwnProperty(ingredient.id)) {
        this.addToShoppingList(ingredient);
        hasIngredients = false;
      } else {
        hasIngredients = true;
      }
    })
    return hasIngredients;
  }

  addToShoppingList(missingIngredient) {
    this.shoppingList.push(missingIngredient);
    /*
    if enoughIngredients() === false;
     Determine the amount of ingredients still needed to cook a
     given meal, based on what’s in my pantry
    return ingredients missing form the user pantry
    need recipes class and user class to test method

    might be able to just be a helper method and be used when an ingredient is missing from a users pantry when checkPantry is run.
    */
  }

  pantryIngredientAdjust(ing1, ing2) {
    
  }

  removeFromPantry() {
    /*
    Remove the ingredients used for a given meal from my pantry,once that meal has been cooked
    after cook adjust qty of ingredients from pantry to recipe
    required ingredints
    need recipes class and user class to test method

    if a user cooks a meal the quantity from the pantry is reduced.
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
