import { getIngredientName } from './get-ingredient-name';

const compileIngredientItems = (recipe, ingredientsData) => {
  if (typeof recipe !== 'object' || Array.isArray(recipe)|| (typeof ingredientsData !== 'object' && !Array.isArray(ingredientsData))) {
    return 'Error: wrong input type';
  }

  const ingredientItems = recipe.ingredients.map(ele => {
    return `${getIngredientName(ele.id, ingredientsData)} × ${ele.quantity.amount} ${ele.quantity.unit}`;
  });
  return ingredientItems;
};

export { compileIngredientItems };