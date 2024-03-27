import { findIngredient } from "./recipes.js";

export const calculateRecipeCost = (recipe, ingredient_dataset) => {
  if (!recipe.hasOwnProperty("ingredients")) return 0;
  if (!Array.isArray(recipe.ingredients)) return 0;

  const totalPrice = recipe.ingredients.reduce((totalPrice, ingredient) => {
    const ingredientData = findIngredient(ingredient.id, ingredient_dataset);
    const ingredientPrice =
      (ingredient.quantity.amount * ingredientData.estimatedCostInCents) / 100;
    return totalPrice + ingredientPrice;
  }, 0);
  return +totalPrice.toFixed(2);
};
