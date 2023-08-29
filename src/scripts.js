//NOTE: Data model and non-dom manipulating logic will live in this file.
import "./styles.css";
import "./images/bookmark-regular.svg";
import "./images/x-solid.svg";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
// import { recipeTestData } from "./data/testData";

// ===== OLD ABOVE =====
import ingredientsData from "./data/ingredients.js";
import recipeData from "./data/recipes.js";
import usersData from "./data/users.js";

//Example of one way to import functions from the domUpdates file. You will delete these examples.
import {
  createRecipeCards,
  locateRecipe,
  buildRecipeCard,
  displayRecipeCard,
  displayRecipeArea,
} from "./domUpdates.js";
import { filterByTag, searchRecipes } from "../src/recipes.js";
const activeTags = [];
let currentUser;
const filteredRecipes = [];
// ^ This will be used to help double check and see if a recipe has already been made or not

// ===== QUERY SELECTORS =====
const tagSection = document.querySelector(".tag-area");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const recipeArea = document.querySelector(".recipe-area");
const recipeCard = document.querySelector(".recipe-card");
const recipeCardClose = document.querySelector(".close");

// ===== EVENT LISTENERS =====
window.addEventListener("load", function () {
  loadUser(usersData);
  createRecipeCards(recipeData);
});

tagSection.addEventListener("click", function (event) {
  let tag = event.target.parentElement;
  tag.classList.toggle("tag-active");
  let tagStatus = event.target.parentElement.classList.contains("tag-active");
  let tagId = event.target.parentElement.id;
  if (!activeTags.includes(tagId)) {
    activeTags.push(tagId);
  } else {
    let index = activeTags.indexOf(tagId);
    activeTags.splice(index, 1);
  }

  if (activeTags.length > 0) {
    let filteredRecipes = filterByTag(activeTags, recipeData);
    createRecipeCards(filteredRecipes);
  } else {
    createRecipeCards(recipeData);
  }
});

searchButton.addEventListener("click", function (event) {
  let searchTerm = searchInput.value;
  let searchedRecipes = searchRecipes(searchTerm, recipeData);
  createRecipeCards(searchedRecipes);
});

recipeArea.addEventListener("click", function (event) {
  let recipeClicked = event.target.parentElement.id;
  let foundRecipe = locateRecipe(recipeClicked, recipeData);
  buildRecipeCard(foundRecipe);
  displayRecipeCard();
});

recipeCardClose.addEventListener("click", function (event) {
  displayRecipeArea();
});

function loadUser(users) {
  let randomUserIndex = Math.floor(Math.random() * users.length);
  currentUser = users[randomUserIndex];
}
