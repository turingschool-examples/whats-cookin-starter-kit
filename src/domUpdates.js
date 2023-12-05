//NOTE: Your DOM manipulation will occur in this file
import recipeData from "./data/recipes";
import { filterRecipesByTag, filterRecipesByName } from "./recipes";

const updateDom = () => {};

const displayRecipesByTag = (recipes, tag) => {
  const containerId = "recipes-by-tag-container";
  const recipesContainer = document.getElementById(containerId);
  const filteredRecipes = filterRecipesByTag(recipes, tag);

  recipesContainer.innerHTML = filteredRecipes.length
    ? `<ul>${filteredRecipes
        .map((recipe) => `<li>${recipe.name}</li>`)
        .join("")}</ul>`
    : "<p>No recipes found.</p>";
};

const displayRecipesByName = (recipes, name) => {
  const containerId = "recipes-by-name-container";
  const recipesContainer = document.getElementById(containerId);
  const filteredRecipes = filterRecipesByName(recipes, name);

  recipesContainer.innerHTML = filteredRecipes.length
    ? `<ul>${filteredRecipes
        .map((recipe) => `<li>${recipe.name}</li>`)
        .join("")}</ul>`
    : "<p>No recipes found.</p>";
};

export { updateDom, displayRecipesByTag, displayRecipesByName };
