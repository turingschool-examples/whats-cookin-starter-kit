//NOTE: Data model and non-dom manipulating logic will live in this file.
import "./styles.css";
import "./images/bookmark-regular.svg";
import "./images/bookmark-solid.svg";
import "./images/x-solid.svg";
import promises from "./apiCalls";

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
let data;
// ^ This will be used to help double check and see if a recipe has already been made or not

// ===== QUERY SELECTORS =====
const tagSection = document.querySelector(".tag-area");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const recipeArea = document.querySelector(".recipe-area");
// const recipeCard = document.querySelector(".recipe-card");
const recipeCardClose = document.querySelector(".close");
const recipeCardBookmark = document.querySelector(".bookmark");
const userSavedRecipes = document.querySelector("#myRecipes");
const discoverRecipes = document.querySelector("#discoverRecipes");

// ===== EVENT LISTENERS =====

window.addEventListener("load", function () {
  Promise.all(promises).then((res) => {
    data = {
      users: res["0"].users,
      ingredients: res["1"].ingredients,
      recipes: res["2"].recipes,
    };

    loadUser(res["0"].users);
    createRecipeCards(res["2"].recipes);
    activeRecipes = [...res["2"].recipes];
  });
});

tagSection.addEventListener("click", function (event) {
  let tag = event.target.closest(".tag-card");
  tag.classList.toggle("tag-active");

  let tagId = tag.id;
  if (!activeTags.includes(tagId)) {
    activeTags.push(tagId);
  } else {
    let index = activeTags.indexOf(tagId);
    activeTags.splice(index, 1);
  }
  let filteredArray = filterByTag(activeTags, activeRecipes);
  createRecipeCards(filteredArray);
});

searchButton.addEventListener("click", function (event) {
  let searchTerm = searchInput.value;
  let searchedRecipes = searchRecipes(searchTerm, activeRecipes);
  createRecipeCards(searchedRecipes);
});

recipeArea.addEventListener("click", function (event) {
  let recipeClicked = event.target.parentElement.id;
  let foundRecipe = locateRecipe(recipeClicked, data.recipes);
  buildRecipeCard(foundRecipe, data.ingredients);
  displayRecipeCard();
});

recipeCardClose.addEventListener("click", function (event) {
  displayRecipeArea();
  createRecipeCards(activeRecipes);
});

recipeCardBookmark.addEventListener("click", function (event) {
  let bookmarkClicked = event.target.id;
  saveRecipe(bookmarkClicked, currentUser, data.recipes);
});

userSavedRecipes.addEventListener("click", function (event) {
  activeRecipes = currentUser.savedRecipes;
  createRecipeCards(activeRecipes);
});

discoverRecipes.addEventListener("click", function (event) {
  activeRecipes = [...data.recipes];
  createRecipeCards(activeRecipes);
  recipeArea.classList.toggle("hidden", false);
});

const loadUser = (users) => {
  let randomUserIndex = Math.floor(Math.random() * users.length);
  currentUser = users[randomUserIndex];
  currentUser.savedRecipes = [];
};
