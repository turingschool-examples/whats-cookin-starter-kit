//NOTE: Data model and non-dom manipulating logic will live in this file.
import "./styles.css";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import ingredientsData from "./data/ingredients.js";
// import { recipeTestData } from "./data/testData";
console.log(ingredientsData);

// ===== OLD ABOVE =====
import recipeData from "./data/recipes.js";

//Example of one way to import functions from the domUpdates file. You will delete these examples.
import { createRecipeCards } from "./domUpdates.js";
import { filterByTag } from "../src/recipes.js";
// ===== QUERY SELECTORS =====
const tagSection = document.querySelector(".tag-area");

// ===== EVENT LISTENERS =====
window.addEventListener("load", function () {
  createRecipeCards(recipeData);
});

tagSection.addEventListener("click", function (event) {
  let tag = event.target.parentElement;
  tag.classList.toggle("tag-active");
  let tagStatus = event.target.parentElement.classList.contains("tag-active");
  let tagId = event.target.parentElement.id;
  // console.log(tagStatus);
  // console.log(tagId);
  let filteredRecipes = filterByTag(tagId, recipeData, tagStatus);
  console.log(filteredRecipes);
  createRecipeCards(filteredRecipes);
});
