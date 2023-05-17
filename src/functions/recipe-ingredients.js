// recipe ingredients function here

import ingredientsData from "../data/ingredients";
import sampleRecipeData from "../data/sample-recipes";

const recipeIngredients = (recipe) => {
  const filteredRecipe = sampleRecipeData.find((item) => {
   return item.name === recipe
  });
  if (!filteredRecipe){
    return `Sorry, cannot find a recipe for ${recipe}.`
  }
  const ingredientIds = filteredRecipe.ingredients.map((ingredient) => {
    return ingredient.id
  })
  let ingredientObjects = ingredientIds.map((ingedientId) => {
    return ingredientsData.find((ingredient) => {
      if(ingredient.id === ingedientId) {
        return ingredient.name
      }
    })
  })
  let ingredientStrings = ingredientObjects.map((object) => object.name)
  return ingredientStrings
}

export { recipeIngredients };