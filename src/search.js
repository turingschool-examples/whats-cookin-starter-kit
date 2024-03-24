import recipeData from "./data/recipes";
import { findRecipeIngredients } from "./recipes";

export function search(searchQuery) {
  let searchResult = [];
  const sanitizedQuery = sanitizeString(searchQuery);

  searchResult = searchResult.concat(
    recipeData.filter((recipe) => {
      return (
        matchName(recipe, sanitizedQuery) ||
        matchIngredient(recipe, sanitizedQuery)
      );
    })
  );

  return searchResult;
}

function matchName(recipe, searchQuery) {
  const sanitizedQuery = sanitizeString(searchQuery);
  return sanitizeString(recipe.name).includes(sanitizedQuery);
}

function matchIngredient(recipe, searchQuery) {
  const sanitizedQuery = sanitizeString(searchQuery);
  const ingredients = findRecipeIngredients(recipe);

  for (const ingredient of ingredients)
    if (sanitizeString(ingredient).includes(sanitizedQuery)) return true;
  return false;
}

function sanitizeString(string) {
  return string.toLowerCase();
}
