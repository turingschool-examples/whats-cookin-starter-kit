import { getIngredientName } from './get-ingredient-name';

const compileIngredientInfos = (recipe, ingredientsData) => {
  const ingredientsInfos = recipe.ingredients.map(ele => {
    return `${getIngredientName(ele.id, ingredientsData)} × ${ele.quantity.amount} ${ele.quantity.unit}`;
  })

  return ingredientsInfos;
};

export { compileIngredientInfos }