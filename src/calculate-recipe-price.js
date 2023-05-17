import { sampleRecipeData } from "../test/sampleIngredients";

const compileIngredientQuantity = (recipe) => {
  return recipe.ingredients.map((quantity) => {
      quantity = {
        id: quantity.id,
        quantity: quantity.quantity.amount,
      };
      return quantity;
    });
}

const sumTotalIngredientQuantity = (ingredientQuantityInfo) => {
return ingredientQuantityInfo.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0);
}

const costInCents = (ingredientQuantityInfo, ingredientsData) => { 
  return ingredientQuantityInfo.map((id) => {
      const ingredient = ingredientsData.find((ingredient) => {
        return ingredient.id === id.id;
      });
      return ingredient.estimatedCostInCents;
    });
  }

const totalCostInCents = (costInCents) => { 
  return costInCents.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
}

const calculateRecipePrice = (recipe, ingredientsData) => {
  if (!recipe) {
    return "Sorry this is not a recipe!";
  } else {
    const ingredientQuantityInfo = compileIngredientQuantity(recipe)

    const sumTotalQuantity = sumTotalIngredientQuantity(ingredientQuantityInfo)

    const costInCentss = costInCents(ingredientQuantityInfo, ingredientsData)

    const totalCost = totalCostInCents(costInCentss)

    const finalTotalCost = (sumTotalQuantity * totalCost) / 100;
    return `$${finalTotalCost.toFixed(2)}`;
  }
};

export {
  compileIngredientQuantity,
  sumTotalIngredientQuantity,
  costInCents,
  totalCostInCents,
  calculateRecipePrice,
};
