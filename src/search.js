import recipeData from "./data/recipes";
import { findRecipeIngredients } from "./recipes";

export function search(searchQuery, recipe_dataset, ingredient_dataset) {
  const searchResult = [];
  const sanitizedQuery = sanitizeString(searchQuery);

  return searchResult.concat(
    recipe_dataset.filter((recipe) => {
      return (
        matchName(recipe, sanitizedQuery) ||
        matchIngredient(recipe, sanitizedQuery, ingredient_dataset)
      );
    })
  );
}

function matchName(recipe, searchQuery) {
  const sanitizedQuery = sanitizeString(searchQuery);
  return sanitizeString(recipe.name).includes(sanitizedQuery);
}

function matchIngredient(recipe, searchQuery, ingredient_dataset) {
  const sanitizedQuery = sanitizeString(searchQuery);
  const ingredients = findRecipeIngredients(recipe, ingredient_dataset);

  for (const ingredient of ingredients)
    if (sanitizeString(ingredient).includes(sanitizedQuery)) return true;
  return false;
}

function sanitizeString(string) {
  return string.toLowerCase();
}
