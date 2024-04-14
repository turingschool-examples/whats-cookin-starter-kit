import { findRecipeIngredients } from "./recipes";

export function search(searchQuery, recipeDataset, ingredientDataset) {
  const searchResult = [];
  const sanitizedQuery = sanitizeString(searchQuery);

  return searchResult.concat(
    recipeDataset.filter((recipe) => {
      return (
        matchName(recipe, sanitizedQuery) ||
        matchIngredient(recipe, sanitizedQuery, ingredientDataset)
      );
    })
  );
}

function matchName(recipe, searchQuery) {
  const sanitizedQuery = sanitizeString(searchQuery);
  return sanitizeString(recipe.name).includes(sanitizedQuery);
}

function matchIngredient(recipe, searchQuery, ingredientDataset) {
  const sanitizedQuery = sanitizeString(searchQuery);
  const ingredients = findRecipeIngredients(recipe, ingredientDataset);

  for (const ingredient of ingredients)
    if (sanitizeString(ingredient).includes(sanitizedQuery)) return true;
  return false;
}

export function sanitizeString(string) {
  return string.toLowerCase();
}
