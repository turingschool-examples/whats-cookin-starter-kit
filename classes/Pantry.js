class Pantry {
  constructor(user) {
    this.pantryId = user.id
    this.pantry = user.pantry
  }

  // -START-- MethodHandler1: calls 3 methods --START-//
  verifyIngredients(recipe) {

    let recipeIds = this.findRecipeIds(recipe)
    let pantryIngredients = this.findPantryIds(recipe)
    let hasIngredients =
      recipeIds.every(ingredient => pantryIngredients.includes(ingredient))
    if (hasIngredients === true) {
      checkIngredientCount(recipe)
      return true
    }
    this.handler2(recipeIds, pantryIngredients, recipe) // not the handler
  }

  // These are the function declorations for MethodHandler 1//
  findRecipeIds(recipe) {
    let recipeId = recipe.ingredients.map(ingredient => {
      return ingredient.id
    })
    return recipeId
  }

  findPantryIds(recipe) {
    let pantryIngredients = this.pantry.map(ingredient => {
      return ingredient.ingredient
    })
    return pantryIngredients
  }

  getMissingIds(recipeIds, pantryIngredients) {
    let missingIds = recipe
  }

  checkIngredientCount() {

  }
  // -END-- handler1 -- handler1 --END- //


  // -START-- MethodHandler2: calls ??? methods --START-//
  handler2(recipeIds, pantryIngredients, recipe) {
    let missingIds = returnMissingIds(recipeIds, pantryIngredients);
    let names = turnIdsIntoNames(missingIds, recipe);
  }



  // These are the function declorations for MethodHandler 2//
  getMissingIds(recipeIds, pantryIngredients) {
    let missingIds = recipe
  }

  returnMissingIds(recipeIds, pantryIngredients) {
    var missingIds = recipeIds.filter((id) => !pantryIngredients.includes(id));
  }

  turnIdsIntoNames(missingIds, recipe) {
    recipe.ingredients.filter()
  }
  // -END-- handler2 -- handler2 --END- //
}
module.exports = Pantry;