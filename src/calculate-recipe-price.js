import { matchIngredient } from './get-ingredient-name'

const getIngredientCost = (id, ingredientsData) => {
  const matchedIngredient = matchIngredient(id, ingredientsData);
  return matchedIngredient.estimatedCostInCents;
};


const calculateRecipePrice = (recipe, ingredientsData) => {
  const costInCents = recipe.ingredients.reduce((acc, curr) => {
    const cost = getIngredientCost(curr.id, ingredientsData);
    const amount = curr.quantity.amount;
    acc += cost * amount;
    return acc
  }, 0);
  const costInDollar = costInCents / 100;
  return `$${costInDollar.toFixed(2)}`;
}



// const calculateRecipePrice = (recipe, ingredientsData) => {
//   if (!recipe) {
//     return "Sorry this is not a recipe!";
//   } else {
//     const ingredientQuantityInfo = compileIngredientQuantity(recipe);

//     const sumTotalQuantity = sumTotalIngredientQuantity(ingredientQuantityInfo);

//     const costInCentss = costInCents(ingredientQuantityInfo, ingredientsData);

//     const totalCost = totalCostInCents(costInCentss);

//     const finalTotalCost = (sumTotalQuantity * totalCost) / 100;
//     return `$${finalTotalCost.toFixed(2)}`;
//   }
// };

export {
  calculateRecipePrice
};
