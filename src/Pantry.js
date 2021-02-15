class Pantry {
  constructor(ingredients) {
    this.ingredients = ingredients;
    this.canCook = false;
  }

  returnPantryIngredients() {

  }

  checkUserIngredients(recipe) {
  let result = "You cooked this!"
	let missingIngredient;

   recipe.ingredients.forEach(recipeIngredient => {
      if(!this.ingredients.find(pantryIngredient => recipeIngredient.id === pantryIngredient.ingredient && recipeIngredient.quantity.amount <= pantryIngredient.amount)) {
		missingIngredient = recipeIngredient;
      }
    });

	if(missingIngredient){

		let qtyOnHand = 0;

		let ingredientOnHand = this.ingredients.find(pantryIngredient => missingIngredient.id === pantryIngredient.ingredient);

		if(ingredientOnHand) {
			qtyOnHand = ingredientOnHand.quantity.amount;
		}
    let missingIngredientName = ingredientsData.find(ingredient => ingredient.id === missingIngredient.id).name
		let missingAmount = missingIngredient.quantity.amount - qtyOnHand;
    this.canCook = false;
	  result = `You can’t cook this, you need ${missingAmount} more ${missingIngredient.quantity.unit} of ${missingIngredientName}`;
    return result;
	}
    this.canCook = true;
    this.cookMeal(recipe)
    return result;
  }

  cookMeal(recipe) {
    if(this.canCook) {recipe.ingredients.forEach(recipeIngredient => {
    let pantryIngredient = this.ingredients.find(pantryIngredient => pantryIngredient.ingredient === recipeIngredient.id);
    pantryIngredient.amount -= recipeIngredient.quantity.amount;
    });}

  }
}


if (typeof module !== "undefined") {
  module.exports = Pantry;
}
