import { recipeData } from "./data/recipes";

export function search(searchQuery) {
  const searchResult = [];
  const sanitizedQuery = sanitizeString(searchQuery);

  // const searchResult = recipeData.filter((recipe) =>

  // );
  return searchResult;
}

function matchName(recipe, searchQuery) {
  const sanitizedQuery = sanitizeString(searchQuery);
  return sanitizeString(recipe.name).includes(sanitizedQuery);
}

function matchIngredient(recipe, searchQuery) {
  const sanitizedQuery = sanitizeString(searchQuery);
  return sanitizeString().includes(sanitizedQuery);
}

function sanitizeString(string) {
  return string.toLowerCase();
}
