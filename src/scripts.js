//NOTE: Data model and non-dom manipulating logic will live in this file.
// File Imports
import "./styles.css";
import "./apiCalls";
import "./images/turing-logo.png";
import ingredientsData from "./data/ingredients";
import recipeData from "./data/recipes";
import usersData from "./data/users";

// Function Imports
import { filterRecipesByTag, filterRecipesByName } from "./recipes";
import { showAllRecipes, updateFilteredResults } from "./domUpdates";

// OnLoad Function Invokation
window.addEventListener("load", function () {
  // filterRecipesByTag(recipeData, tag);
  // filterRecipesByName(recipeData, name);
  showAllRecipes(recipeData);
  updateFilteredResults(recipeData, ingredientsData);
});
