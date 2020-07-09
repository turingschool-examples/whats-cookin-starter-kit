class Pantry {
  constructor(userObject) {
    this.pantry = userObject.pantry;
    this.recipe = userObject.recipesToCook;
    this.shoppingList = [];
  }

  checkPantry() {
     this.recipe.ingredients.forEach(ingredient => { 
        const userIngredient = this.pantry.find(ingredient.id);
        if(userIngredient === undefined) {
          this.addToShoppingList(ingredient)
        } else if (userIngredient.amount < this.recipe.amount) {
          ingredient.amount -= userIngredient.amount;
          this.addToShoppingList(ingredient);
        } else {
          console.log(ingredient);
        }
        // check if ingredients.id === pantry.ingredients.id
        // on all ingredients of both pantry and recipe
        // if all ingredients are in pantry and amounts also 
        // are also greater in pantry 
        // ingredients that are not in there addToShoppingList()
        // method
        // maybe .filter each and check if all true 
        
    })


    /*
    Determine whether my pantry has enough ingredients to cook a given meal
    need to check recipe ingredients against pantry ingredients
    return boolean value?
    need recipes class and user class to test method

    if(this.recipe.ingredient[id].quantity.amount <= this.pantry[id].quantity.amount)

    check each ingredient to user pantry maybe by id.

    if user has all ingredients return true.

    else push missing ingredients (write a method to do this to keep functions tight)

    return false; (might need for a display in project)
    */


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
