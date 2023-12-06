import "./data/recipes";
import recipeData from "./data/recipes";

const recipes = recipeData;

// export const findRecipeIngredients = recipe => {
//   console.log(recipe)
// }

function filterRecipesByTag(recipes, tags) {
  const filteredRecipesByTag = recipes.filter((recipe) => {
    const allTagsMatch = tags.every((tag) => recipe.tags.includes(tag));
    return allTagsMatch;
  });
  return filteredRecipesByTag;
}

function filterRecipesByName(recipes, name) {
  const filteredRecipesByName = recipes.filter((recipe) => {
    const upperCaseRecipeName = recipe.name.toUpperCase();
    return upperCaseRecipeName.includes(name.toUpperCase());
  });
  return filteredRecipesByName;
}

function getIngredientNames(recipe, ingredientsData) {
  return !recipe || !ingredientsData
    ? "Error"
    : recipe.ingredients.map(
        (ingredient) =>
          getIngredientProperty(ingredient.id, ingredientsData, "name") ||
          "Ingredient not found"
      );
}

function calculateRecipeCost(recipe, ingredientsData) {
  const totalCost =
    !recipe || !ingredientsData
      ? 0
      : recipe.ingredients.reduce((acc, ingredient) => {
          const ingredientCost = getIngredientProperty(
            ingredient.id,
            ingredientsData,
            "estimatedCostInCents"
          );
          return (
            acc +
            (ingredientCost ? ingredientCost * ingredient.quantity.amount : 0)
          );
        }, 0);

  return (totalCost / 100).toFixed(2);
}

function getIngredientProperty(ingredientId, ingredientsData, property) {
  const ingredientObject = ingredientsData.find(
    (ingredientData) => ingredientData.id === ingredientId
  );
  return ingredientObject ? ingredientObject[property] : null;
}

function getRecipeDirections(recipe) {
  return recipe.instructions;
}
export {
  filterRecipesByTag,
  filterRecipesByName,
  getIngredientNames,
  calculateRecipeCost,
  getRecipeDirections,
  getIngredientProperty,
};
