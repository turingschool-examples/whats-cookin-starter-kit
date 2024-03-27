//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later!
export const findRecipeIngredients = (recipe, ingredient_dataset) => {
  return recipe.ingredients.reduce((list, recipeIngredient) => {
    list.push(findIngredient(recipeIngredient.id, ingredient_dataset).name);
    return list;
  }, []);
};

export function findRecipeIngredientsQuantity(recipe) {
  return recipe.ingredients.map((ingredient) => {
    const amount = ingredient.quantity.amount;
    const unit = ingredient.quantity.unit;
    const space = unit.length ? " " : "";

    return `${amount}${space}${unit}`;
  });
}

export const findRecipeInstructions = (recipe) => {
  return recipe.instructions
    .sort((a, b) => a.number - b.number)
    .map((step) => step.instruction);
};

export function findIngredient(ingredientID, ingredient_dataset) {
  return ingredient_dataset.find(
    (ingredientData) => ingredientData.id == ingredientID
  );
}
