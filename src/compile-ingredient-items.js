import { getIngredientName } from './get-ingredient-name';

const compileIngredientItems = (recipe, ingredientsData) => {
  const ingredientsInfos = recipe.ingredients.map(ele => {
    return `${getIngredientName(ele.id, ingredientsData)} × ${ele.quantity.amount} ${ele.quantity.unit}`;
  })

  return ingredientsInfos;
};

export { compileIngredientItems }