import { sampleRecipeData } from "../test/sampleIngredients";

const compileIngredientQuantity = (recipe) => {
  console.log("RECIPE,", recipe)
  return recipe.ingredients.map((quantity) => {
    quantity = {
      id: quantity.id,
      quantity: quantity.quantity.amount,
    };
    return quantity;
  });
};

const sumTotalIngredientQuantity = (
  sampleRecipeData,
) => {
  const ingQuantityData = compileIngredientQuantity(
    sampleRecipeData
  );
  return ingQuantityData.reduce((acc, curr) => {
    acc += curr.quantity;
    console.log(acc)
    return acc;
  }, 0);
};

const costInCents = (sampleRecipeData, sampleIngredientsData) => {
  const ingInfo = compileIngredientQuantity(
    sampleRecipeData,
    sampleIngredientsData
  );
  return ingInfo.map((id) => {
    const ingredient = sampleIngredientsData.find((ingredient) => {
      return ingredient.id === id.id;
    });
    return ingredient.estimatedCostInCents;
  });
};

const totalCostInCents = (sampleRecipeData, sampleIngredientsData) => {
  const centsPerRecipe = costInCents(sampleRecipeData, sampleIngredientsData);
  return centsPerRecipe.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
};

const calculateRecipePrice = (sampleRecipeData, sampleIngredientsData) => {
  if (!sampleRecipeData) {
    return "Sorry no price could be calculated.";
  } else {
    const totalQuantityAmt = sumTotalIngredientQuantity(
      sampleRecipeData,
      sampleIngredientsData
    );
    const totalCents = totalCostInCents(
      sampleRecipeData[0],
      sampleIngredientsData
    );
    const finalTotal = (totalQuantityAmt * totalCents) / 100;
    return `$${finalTotal.toFixed(2)}`;
  }
};

export {
  compileIngredientQuantity,
  sumTotalIngredientQuantity,
  costInCents,
  totalCostInCents,
  calculateRecipePrice,
};
