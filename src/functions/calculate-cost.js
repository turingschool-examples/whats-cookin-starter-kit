import ingredientsData from "../data/ingredients";
import { sampleRecipeData } from "../data/sample-recipes";

const calculateCost = (recipe) => {
  let costs = [];
  const currentRecipe = sampleRecipeData.find((item) => {
    return item.name === recipe
   });
  let recipeIngredients = currentRecipe.ingredients;
  recipeIngredients.forEach((recipeIngredient) => {
    ingredientsData.forEach((ingredient) => {
      if (ingredient.id === recipeIngredient.id){
        costs.push(recipeIngredient.quantity.amount * (ingredient.estimatedCostInCents / 1000))
      }
    })
  })
  let totalCost = costs.reduce((acc, currentValue) => 
  acc + currentValue)
  totalCost = totalCost.toFixed(2)
  return `$${totalCost}`
}

export { calculateCost }