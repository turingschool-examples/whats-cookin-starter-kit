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
    return recipeIngredient.quantity.amount - matchingIngredient.amount; 
  } 
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
