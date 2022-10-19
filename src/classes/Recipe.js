class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id
    this.image = recipeData.image
    this.ingredients = recipeData.ingredients
    this.instructions = recipeData.instructions
    this.name = recipeData.name
    this.tags = recipeData.tags
    //this.ingredientNames = []
  }

  getIngredientNames() {
    let ingredientIds = this.ingredients.map(ingredient => {
      console.log(ingredient.id)
      return ingredient.id
    })
    let 
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
    return this.instructions
  }
}

// It should have methods to:
// Determine the names of ingredients needed
// if id #s match, return name
// ==>use ingredients id to access ingredient names
//  and costs
// ==>use recipe.ingredients.quantity to access
//  amounts and units
// Get the cost of its ingredients


export default Recipe
