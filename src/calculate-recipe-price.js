const calculateRecipePrice = (recipe, ingredientsData) => {
  if (!recipe) {
    return "Sorry this is not a recipe!";
  } else {
    const ingredientQuantityInfo = recipe.ingredients.map((quantity) => {
      quantity = {
        id: quantity.id,
        quantity: quantity.quantity.amount,
      };
      return quantity;
    });

    const sumTotalQuantity = ingredientQuantityInfo.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0);

    const costInCents = ingredientQuantityInfo.map((id) => {
      const ingredient = ingredientsData.find((ingredient) => {
        return ingredient.id === id.id;
      });
      return ingredient.estimatedCostInCents;
    });

    const hello = costInCents.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);

    const finalTotalCost = (sumTotalQuantity * hello) / 100;
    return `$${finalTotalCost.toFixed(2)}`;
  }
};

export { calculateRecipePrice };
