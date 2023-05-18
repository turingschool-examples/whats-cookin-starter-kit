// recipe ingredients function here

import ingredientsData from "../data/ingredients";
import recipeData from "../data/recipes";

const recipeIngredients = (recipe) => {
  const filteredRecipe = recipeData.find((item) => {
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