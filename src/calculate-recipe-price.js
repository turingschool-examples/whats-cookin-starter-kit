import { sampleRecipeData } from "../test/sampleIngredients";

const compileIngredientQuantity = (recipe, ingredientsData) => {
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
  sampleIngredientsData
) => {
  const ingQuantityData = compileIngredientQuantity(
    sampleRecipeData[0],
    sampleIngredientsData
  );
  return ingQuantityData.reduce((acc, curr) => {
    acc += curr.quantity;
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
  console.log("centsPerRecipe", centsPerRecipe);
  return centsPerRecipe.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
};

export {
  compileIngredientQuantity,
  sumTotalIngredientQuantity,
  costInCents,
  totalCostInCents
};
