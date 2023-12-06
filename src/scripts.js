//NOTE: Data model and non-dom manipulating logic will live in this file.

import "./styles.css";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import ingredientsData from "./data/ingredients";
// Below are examples of how you can import functions from either the recipes or domUpdates files.
import { filterRecipesByTag, filterRecipesByName } from "./recipes";
import { displayRecipeByTag, displayRecipeByName } from "./domUpdates";
import recipeData from "./data/recipes";
import usersData from "./data/users";
import { updateDom } from "./domUpdates";
import { showAllRecipes } from "./domUpdates";

window.addEventListener("load", function () {
  showAllRecipes(recipeData);
  filterRecipesByTag(recipeData, "antipasti");
  // updateFilteredResults(recipeData, ingredientsData);
  console.log(filterRecipesByTag(recipeData, "antipasti"));
  // console.log(updateFilteredResults(recipeData, ingredientsData));
});
