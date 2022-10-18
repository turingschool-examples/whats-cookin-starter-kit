class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id
    this.image = recipeData.image
    this.ingredients = recipeData.ingredients
    this.instructions = recipeData.instructions
    this.name = recipeData.name
    this.tags = recipeData.tags
  }

  getInstructions() {
    return this.instructions
  }
}
// A Recipe represents one recipe object.
//
// It should hold on to all its information
//  (provided in the data file).
// It should have methods to:
// Determine the names of ingredients needed
// Get the cost of its ingredients
// Return its directions / instructions
// export default Recipe
//
/*
id- num,
image- string url,
ingredients- array of ingredients objects,
instructions- array of instructions objects,
name- string,
tags- array of strings
*/

export default Recipe
