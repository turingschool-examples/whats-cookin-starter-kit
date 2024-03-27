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

export function addRecipeToArray(recipesArray, recipeToAdd) {
  const recipeExists = recipesArray.some(
    (recipe) => recipe.id === recipeToAdd.id
  );
  if (!recipeExists) {
    recipesArray.push(recipeToAdd);
  }
}

export function removeRecipeFromArray(recipesArray, recipeIdToRemove) {
  const recipeIndex = recipesArray.findIndex(
    (recipe) => recipe.id === recipeIdToRemove
  );
  if (recipeIndex > -1) {
    recipesArray.splice(recipeIndex, 1);
  }

export function findRecipeFromID(recipeID, recipe_dataset) {
  return recipe_dataset.find((recipe) => recipe.id === +recipeID);
}

export function isFavorited(favoriteRecipes, recipe_dataset) {
  return favoriteRecipes.filter((recipe) =>
    recipe_dataset.some((dataRecipe) => dataRecipe.id === recipe.id)
  );
}
