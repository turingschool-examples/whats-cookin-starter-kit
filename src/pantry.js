class Pantry {
  constructor(userPantry) {
    this.pantry = userPantry;
  };

  getIngredientDetails(ingredientsData) {
    this.pantry = this.pantry.map(ingredient => {
      let ingredientData = ingredientsData.find(data => data.id === ingredient.ingredient)
      return {...ingredient, ...ingredientData}
    })
  };
  requiredForMeal(recipe) {
    const missingItems = []
    recipe.ingredients.forEach((ingredientRecipe) => this.pantry.forEach((ingredientPantry) =>
      {
        if (ingredientRecipe.id === ingredientPantry.ingredient && ingredientRecipe.quantity.amount > ingredientPantry.amount) {
        missingItems.push(ingredientPantry.name)
        }
      }
    ))
    return missingItems;
  };

  cookMeal(recipe) {
    const reducedRecipeItems = recipe.ingredients.map(ingredient => {
      return ingredient = {id: ingredient.id, amount: ingredient.quantity.amount}
    })

    let updatedPantry = this.pantry.reduce((acc, ingredient) => {
      const reducedRecipeItem = reducedRecipeItems.find(item => item.id === ingredient.id)
      if (reducedRecipeItem) {
        ingredient.amount = ingredient.amount - reducedRecipeItem.amount;
      }
      return acc;
    }, [])
  };

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Pantry;
}
