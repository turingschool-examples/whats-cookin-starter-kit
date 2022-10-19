class Recipe {
  constructor(recipeList) {
    this.recipeList = recipeList
  }

  getInfoById(currentId){
    let recipeObject = this.recipeList.find((recipe) => {
      return recipe.id === currentId
    })
    return recipeObject
    //console.log('test', this.recipeList)
//take in id, return recipe object
//if currentId matches recipeList
  }

  getIngredientNames() {
    // let ingredientIds = this.ingredients.map(ingredient => {
    //   console.log(ingredient.id)
    //   return ingredient.id
    // })

    //create a list(array) of ingredient
    //names for a recipe.
    //if(ingredient.id === ingredientsData[i].id)
  }

// estimatedCostInCents(id) {
//     The price (estimatedCostInCents) of an ingredient is per unit.
// For example, if flour is marked as 100 cents, and the recipe
// calls for 1.5 cups, then it would cost 150 cents.
// Similarly, if a tomato is $2, and the recipe requires 2 tomatoes, then the cost would be $4.
//  }

  getInstructions() {
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
//?findById helper function?


export default Recipe
