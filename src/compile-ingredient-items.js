import { getIngredientName } from './get-ingredient-name';

const compileIngredientItems = (recipe, ingredientsData) => {
  const ingredientItems = recipe.ingredients.map(ele => {
    return `${getIngredientName(ele.id, ingredientsData)} × ${ele.quantity.amount} ${ele.quantity.unit}`;
  });
  return ingredientItems;
};

export { compileIngredientItems };