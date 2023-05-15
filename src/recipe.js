import { ingredientTestData } from "./data/testData";

const createRecipe = recipe => ({
  id: recipe.id,
  image: recipe.image,
  ingredients: recipe.ingredients,
  instructions: recipe.instructions,
  name: recipe.name,
  tags: recipe.tags
});

const calculateCost = recipe => {
  let iDs = ingredientTestData.reduce((array, ingredient) => [...array, ingredient.id], []);
  recipe.ingredients.forEach(ingredient => ingredient.cost = ingredientTestData[iDs.indexOf(ingredient.id)].estimatedCostInCents);
  return recipe.ingredients.reduce((sum, ingredient) => sum + (ingredient.quantity.amount * ingredient.cost), 0) / 100;
};

export {
  createRecipe,
  calculateCost
}