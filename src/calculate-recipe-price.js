import { matchIngredient } from './get-ingredient-name';

const getIngredientCost = (id, ingredientsData) => {
  const matchingResult = matchIngredient(id, ingredientsData);
  if (typeof matchingResult !== 'object') {
    return matchingResult;
  }
  return matchingResult.estimatedCostInCents;
};

const calculateRecipePrice = (recipe, ingredientsData) => {
  if (typeof recipe !== 'object' || Array.isArray(recipe)|| (typeof ingredientsData !== 'object' && !Array.isArray(ingredientsData))) {
    return 'Error: wrong input type';
  }

  const costInCents = recipe.ingredients.reduce((acc, curr) => {
    const cost = getIngredientCost(curr.id, ingredientsData);
    const amount = curr.quantity.amount;
    acc += cost * amount;
    return acc;
  }, 0);
  const costInDollar = costInCents / 100;
  return `$${costInDollar.toFixed(2)}`;
};

export { 
  getIngredientCost,
  calculateRecipePrice 
};
