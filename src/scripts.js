//NOTE: Data model and non-dom manipulating logic will live in this file.
import "./styles.css";
import "./images/bookmark-regular.svg";
import "./images/bookmark-solid.svg";
import "./images/x-solid.svg";
import promises, { addRecipe, fetchUsers } from "./apiCalls";

import {
  createRecipeCards,
  locateRecipe,
  buildRecipeCard,
  displayRecipeCard,
  displayRecipeArea,
  saveRecipe,
  deleteRecipe,
  displayRecipeTag,
  buildSearchFail,
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
const recipeCardClose = document.querySelector(".close");
const recipeCardBookmarkAdd = document.querySelector(".icon-bookmark");
const recipeCardBookmarkDelete = document.querySelector(".solid-bookmark");
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
    console.log(currentUser);
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
  if (searchedRecipes.length === 0) {
    buildSearchFail();
  }
});

recipeArea.addEventListener("click", function (event) {
  let recipeClicked = event.target.parentElement.id;
  let foundRecipe = locateRecipe(recipeClicked, data.recipes);
  buildRecipeCard(foundRecipe, data.ingredients);
  displayRecipeTag(recipeClicked, currentUser, data.recipes);
  displayRecipeCard();
});

recipeCardClose.addEventListener("click", function (event) {
  displayRecipeArea();
  createRecipeCards(activeRecipes);
});

recipeCardBookmarkAdd.addEventListener("click", function (event) {
  let bookmarkClicked = event.target.id;
  addRecipe(currentUser.id, bookmarkClicked).then((responseData) => {
    console.log("Data from the POST request: ", responseData);
    data.users = responseData;
    let users = data.users.users;
    const updateUser = (users) => {
      return users.find((user) => {
        if (user.id === currentUser.id) {
          return user;
        }
      });
    };
    currentUser = updateUser(users);
    // updateUser updates the currentUser with the data from the database!!!
    console.log(currentUser);
    // currentUser.id => the place where data.users (id matches)
    // saveRecipe(bookmarkClicked, currentUser);
    displayRecipeTag(bookmarkClicked, currentUser, data.recipes);
  });
});

recipeCardBookmarkDelete.addEventListener("click", function (event) {
  let bookmarkClicked = event.target.id;
  deleteRecipe(bookmarkClicked, currentUser);
  displayRecipeTag(bookmarkClicked, currentUser, data.recipes);
  let recipesToCook = currentUser.recipesToCook.map((recipeId) => {
    let wholeRecipe = locateRecipe(recipeId, data.recipes);
    return wholeRecipe;
  });
  activeRecipes = recipesToCook;
});

userSavedRecipes.addEventListener("click", function (event) {
  let recipesToCook = currentUser.recipesToCook.map((recipeId) => {
    let wholeRecipe = locateRecipe(recipeId, data.recipes);
    return wholeRecipe;
  });
  activeRecipes = recipesToCook;
  createRecipeCards(activeRecipes);
});

discoverRecipes.addEventListener("click", function (event) {
  activeRecipes = [...data.recipes];
  createRecipeCards(activeRecipes);
});

const loadUser = (users) => {
  let randomUserIndex = Math.floor(Math.random() * users.length);
  currentUser = users[randomUserIndex];
  currentUser.recipesToCook = [];
};
