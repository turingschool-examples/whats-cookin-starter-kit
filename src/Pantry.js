class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients || [];
  }

  checkForRecipeIngredients = recipe => {
    return recipe.ingredients.every(recipeIngredient => {
      if (this.checkIngredientStockInPantry(recipeIngredient) > 0) {
        return false;
      } else {
        return true;
      };
    });
  }
    
  checkIngredientStockInPantry(recipeIngredient) {
    let matchingIngredient = this.ingredients.find(pantryIngredient => pantryIngredient.ingredient === recipeIngredient.id);
    //returns how much of ingredient is still needed
    //If > 0, pantry is not stocked for recipe
    //If <= 0, pantry is stocked for recipe
    if (matchingIngredient === undefined) {
      return recipeIngredient.quantity.amount
    } else {
      let missingAmount = recipeIngredient.quantity.amount - matchingIngredient.amount;
      if (missingAmount < 0) {
        missingAmount = 0;
      };
      return missingAmount; 
    } 
  } 
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}

//A pantry should be able to determine the amount of ingredients still needed to cook a given meal, based on what’s in my pantry
//take in a recipe; for each ingredient in that recipe, invoke checkIngredientStockInPantry(recipeIngredient)
//that method returns 



// -Method: listMissingIngredients(recipe): If checkIfPantryStocked returns true, return empty list; otherwise: iterate through ingredients in given recipe & check against pantry
//   - If ingredient is missing from pantry, add it to an array with amount needed specified in recipe(likely as object with key - value pair ingredientName: ingredientAmount)
// -If ingredient is in pantry but amount is LESS than specified in recipe, add it to array with amount of: (amount needed - current amount)
// -return list at end; this will be used by User class to create Grocery List
