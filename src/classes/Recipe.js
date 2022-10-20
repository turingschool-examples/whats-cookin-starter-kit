class Recipe {
  constructor(recipeList) {
    this.recipeList = recipeList

  }

  getRecipeById(currentId){
    let singleRecipe = this.recipeList.find((recipe) => {
      return recipe.id === currentId
    })
    return singleRecipe
  }

  getIngredientIds(currentId) {
    let singleRecipe = this.recipeList.find((recipe) => {
      return recipe.id === currentId
    })
    console.log('singleRecipe', singleRecipe.ingredients);
    return singleRecipe.ingredients.map(ingredient => {
      return ingredient.id
    })
    // let ingredientIds = this.recipeList.map(recipe => {
    //   console.log('recipe', recipe)
    //   // console.log('recipe ingredients', recipe.ingredients)
    //   return recipe.ingredients
    // })
    // //console.log('ingredientIds', ingredientIds)
    // return ingredientIds
      }

// estimatedCostInCents(id) {
//     The price (estimatedCostInCents) of an ingredient is per unit.
// For example, if flour is marked as 100 cents, and the recipe
// calls for 1.5 cups, then it would cost 150 cents.
// Similarly, if a tomato is $2, and the recipe requires 2 tomatoes, then the cost would be $4.
//  }

  getInstructions(currentId) {
    let singleRecipe = this.recipeList.find((recipe) => {
      return recipe.id === currentId
    })
    return singleRecipe.instructions
    //return this.instructions
  }
}

// It should have methods to:
// 1. Determine the names of ingredients needed
// if id #s match, return name
// ==>use ingredients id to access ingredient names
//  and costs
// ==>use recipe.ingredients.quantity to access
//  amounts and units
// 2.Get the cost of its ingredients
//3.Get instructions



export default Recipe
