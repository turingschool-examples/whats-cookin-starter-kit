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
  }
}

export default Recipe
