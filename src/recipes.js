//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later!
import recipeData from "./data/recipes";
import ingredientsData from "./data/ingredients";

export const findRecipeTags = (recipeData, tag) => {
  let recipeNamesTags = recipeData
    .filter((recipe) => recipe.tags.includes(tag))
    .map((recipe) => recipe.name);
  return recipeNamesTags;
};

export const findRecipeIngredients = (recipeData, ingredient) => {
  let recipeNames = recipeData
    .filter((recipe) => recipe.name.toLowerCase().includes(ingredient.trim().toLowerCase()))
    .map((recipe) => recipe.name);
  return recipeNames;
};

export const createRecipesNeeded = (recipeID, recipeData, ingredientsData) => {
  let foundRecipe = recipeData.find((recipe) => recipe.id === recipeID);

  let ingredientsIds = foundRecipe.ingredients.map(
    (ingredient) => ingredient.id
  );
  let ingredientsNamesArray = ingredientsData
    .filter((ingredient) => ingredientsIds.includes(ingredient.id))
    .map((ingredient) => ingredient.name);

  return ingredientsNamesArray;
};

export const calculateRecipeCost = (recipeID, recipeData, ingredientsData) => {
  const recipe = recipeData.find((recipe) => recipe.id === recipeID);

  const totalCost = recipe.ingredients.reduce((acc, ingredient) => {
    const ingredientData = ingredientsData.find(
      (data) => data.id === ingredient.id
    );

    if (ingredientData) {
      return (
        acc + ingredientData.estimatedCostInCents * ingredient.quantity.amount
      );
    }

    return acc;
  }, 0);

  return totalCost / 100;
};

export const getRecipeInstructions = (recipeID, recipeData) => {
  const recipe = recipeData.find((recipe) => recipe.id === recipeID);
  return recipe.instructions.map((instruction) => `${instruction.number}: ${instruction.instruction}`);;
};
