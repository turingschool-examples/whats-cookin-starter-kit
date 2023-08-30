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
  saveRecipe,
} from "./domUpdates.js";

import { filterByTag, searchRecipes } from "../src/recipes.js";
const activeTags = [];
let currentUser;
let activeRecipes;
// ^ This will be used to help double check and see if a recipe has already been made or not

// ===== QUERY SELECTORS =====
const tagSection = document.querySelector(".tag-area");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const recipeArea = document.querySelector(".recipe-area");
const recipeCard = document.querySelector(".recipe-card");
const recipeCardClose = document.querySelector(".close");
const recipeCardBookmark = document.querySelector(".bookmark");
const userSavedRecipes = document.querySelector("#myRecipes");
const discoverRecipes = document.querySelector("#discoverRecipes");

// ===== EVENT LISTENERS =====
window.addEventListener("load", function () {
  loadUser(usersData);
  createRecipeCards(recipeData);
  activeRecipes = [...recipeData];
});

tagSection.addEventListener("click", function (event) {
  let tag = event.target.closest(".tag-card");
  tag.classList.toggle("tag-active");
  // let tagStatus = event.target.parentElement.classList.contains("tag-active");
  let tagId = tag.id;
  if (!activeTags.includes(tagId)) {
    activeTags.push(tagId);
  } else {
    let index = activeTags.indexOf(tagId);
    activeTags.splice(index, 1);
  }
  let filteredArray = filterByTag(activeTags, activeRecipes);
  console.log(filteredArray);
  createRecipeCards(filteredArray);
  // if (activeTags.length >= 0) {
  //   let newActiveRecipes = filterByTag(
  //     activeTags,
  //     activeRecipes,
  //     recipeData,
  //     saved
  //   );
  //   activeRecipes = newActiveRecipes;
  //   console.log(activeRecipes);
  //   createRecipeCards(activeRecipes);
  // } else {
  //   activeRecipes = [...recipeData];
  //   createRecipeCards(activeRecipes);
  // }
});

searchButton.addEventListener("click", function (event) {
  let searchTerm = searchInput.value;
  let searchedRecipes = searchRecipes(searchTerm, activeRecipes);
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

recipeCardBookmark.addEventListener("click", function (event) {
  let bookmarkClicked = event.target.id;
  saveRecipe(bookmarkClicked, currentUser, recipeData);
});

userSavedRecipes.addEventListener("click", function (event) {
  activeRecipes = currentUser.savedRecipes;
  createRecipeCards(activeRecipes);
});

discoverRecipes.addEventListener("click", function (event) {
  activeRecipes = [...recipeData];
  createRecipeCards(recipeData);
});

function loadUser(users) {
  let randomUserIndex = Math.floor(Math.random() * users.length);
  currentUser = users[randomUserIndex];
  currentUser.savedRecipes = [];
  console.log(currentUser);
}
