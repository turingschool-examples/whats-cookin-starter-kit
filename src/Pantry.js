class Pantry {
  constructor(userObject) {
    this.pantry = userObject.pantry;
    this.recipe = userObject.recipesToCook;
    this.shoppingList = [];
  }

  checkPantry(recipe) {
    let hasIngredients;
    const pantryIngredients = this.pantry.reduce((acc, element) => {
      return {...acc, [element.ingredient] : element.amount};
    }, {})
    
    // recipe.ingredients.forEach(ingredient => {
    //     if(item.ingredient !== ingredient.id) {
    //       hasIngredients = false;
    //       this.addToShoppingList(ingredient);
    //     } else if (item.amount > ingredient.quantity.amount){
    //       ingredient.quantity.amount = (ingredient.quantity.amount - item.amount);
    //       this.addToShoppingList(ingredient);
    //       hasIngredients = false;
    //     } else {
    //       hasIngredients = true;
    //     }
    //   })
    //   return hasIngredients;
    // console.log(this.shoppingList);


    recipe.ingredients.forEach(ingredient => {
      if (!pantryIngredients.hasOwnProperty(ingredient.id)) {
        hasIngredients = false;
      } else if (pantryIngredients[ingredient.id] < ingredient.quantity.amount) {
        hasIngredients = false;
      } else {
        hasIngredients = true;
      }
    })
    return hasIngredients;
    //need to add method to adjust for amounts in ingredients
  }

  addToShoppingList(missingIngredient) {
    this.shoppingList.push(missingIngredient);
  }

  pantryIngredientAdjust(recipeIngredient) {
    const recipeIngredients = recipe.ingredients.map(ingredient => ({ id: ingredient.id, amount: ingredient.quantity.amount }));

    const pantryIngredients = this.pantry.map(userIngredient => ({ id: userIngredient.ingredient, amount: userIngredient.amount }));
    console.log(pantryIngredients);
  }

  
     
     //if ingredient in pantry is - qty remove from pantry
     // update user after update
     // 
    

    //need to have a way to return or replace an item in the user pantry to adjust for recipes made
    // does it need to update both pantry class as well as user, 
    // if user is updated everytime the pantry class is instantiated the pantry would update itself
    // if we pass in ing1 to be recipe can subtract pantry from recipe and return amount needed to cook 
    // might also be able to write a function that returns adjustments to pantry after meal is cooked
    // need to figure a clean way to write this in a reusable way to utilize through out pantry class
  

  removeFromPantry(recipe) {
    //pantry ingredient matching recipe id reduce amount from pantry if pantry is equal to 0 remove item from pantry update pantry and maybe user as well. 
    /*
    Remove the ingredients used for a given meal from my pantry,once that meal has been cooked
    after cook adjust qty of ingredients from pantry to recipe
    required ingredints
    need recipes class and user class to test method

    if a user cooks a meal the quantity from the pantry is reduced.

    should cook meal be a part of user or pantry?
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
