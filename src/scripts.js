//NOTE: Data model and non-dom manipulating logic will live in this file.

import apiCalls from "./apiCalls";
import "./styles.css";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import ingredientsData from "./data/ingredients";
import "./images/turing-logo.png";
// Below are examples of how you can import functions from either the recipes or domUpdates files.
import { displayRecipes } from "./domUpdates";
import { findRecipeIngredients } from "./recipes";

// all the favorite recipes should be stored as recipe objects here
const favoriteRecipes = [];

console.log(ingredientsData);
findRecipeIngredients("Dirty Steve's Original Wing Sauce");
displayRecipes();
