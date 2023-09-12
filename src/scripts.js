//NOTE: Data model and non-dom manipulating logic will live in this file.
import "./styles.css";
import "./images/bookmark-regular.svg";
import "./images/bookmark-solid.svg";
import "./images/x-solid.svg";
import promises, { addRecipe, userPromise } from "./apiCalls";

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
  addRecipe(currentUser.id, bookmarkClicked);
  // edit saveRecipe function
  // invoke saveRecipe function to make the DM look the same as the POST Request 
  // currentUser = {id...,etc.... recipesToCook: ['12345']}
  displayRecipeTag(bookmarkClicked, currentUser, data.recipes);
  // Promise.all(userPromise).then((res) => {
  //   // I think there's gona be a promise here
  //   data.users = res["0"].users;
  //   console.log(res["0"].users);
  //   // let newCurrentUser = data.users.find((user) => {
  //   //   if (user.id === currentUser.id) {
  //   //     console.log(user);
  //   //     return user;
  //   //   }
  //   // });

  //   // console.log(newCurrentUser);
  //   // console.log(typeof currentUser.id);
  //   // console.log(typeof data.users[0].id);

  //   // activeRecipes = currentUser.recipesToCook.map((recipeId) => {
  //   //   console.log("getting here");
  //   //   console.log(recipeId);
  //   //   let wholeRecipe = locateRecipe(recipeId, data.recipes);
  //   //   console.log(wholeRecipe);
  //   //   return wholeRecipe;
  //   // });
  //   // lookup the actual recipes from ids in the currentUser
  //   // set that equal to activeRecipes
  // });
});

recipeCardBookmarkDelete.addEventListener("click", function (event) {
  let bookmarkClicked = event.target.id;
  deleteRecipe(bookmarkClicked, currentUser, data.recipes);
  displayRecipeTag(bookmarkClicked, currentUser, data.recipes);
});

userSavedRecipes.addEventListener("click", function (event) {
  
  // console.log(data.users);
  // console.log("getting here");
  // currentUser = data.users.find((user) => {
  //   if (user.id === currentUser.id) {
  //     console.log(user);
  //     return user;
  //   }
  // });
  // activeRecipes = currentUser.recipesToCook.map((recipeId) => {
  //   console.log("getting here");
  //   console.log(recipeId);
  //   let wholeRecipe = locateRecipe(recipeId, data.recipes);
  //   console.log(wholeRecipe);
  //   return wholeRecipe;
  // });
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
