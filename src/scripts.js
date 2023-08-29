//
import "./styles.css";
import "./domUpdates.js";
import "./functions.js";

import {
  createFunction,
  returnFilteredListName,
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
  returnRecipeTitle,
  returnRecipeTags,
  returnRecipeImgUrl,
  returnListOfUniqueTags,
  returnFilteredRecipeArrayByTagID,
  findRecipeByIngredient,
  findRecipeByName,
  getUserInput,
  saveRecipe,
  deleteRecipe,
} from "/src/functions.js";

import { displayRecipes } from "./domUpdates.js";
import { displayTags } from "./domUpdates.js";

import ingredientsData from "../src/data/ingredients.js";

import recipeData from "../src/data/recipes.js";

import usersData from "../src/data/users.js";

const recipeDisplay = document.querySelector(".recipes");

const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const modalOverlay = document.querySelector(".modal-overlay");
const modalTitle = document.querySelector(".modal-title");
const modalTags = document.querySelector(".modal-tags");
const modalDirections = document.querySelector(".modal-directions-list");
const modalCost = document.querySelector(".modal-cost");
const modalIngredients = document.querySelector(".modal-ingredients-list");
const closeBtn = document.querySelector(".close-btn");
const tagButtons = document.querySelector(".tag-buttons");
const inputName = document.querySelector(".input-name");
const inputIngredient = document.querySelector(".input-ingredient");
const savedRecipesBtn = document.querySelector(".view-saved");

const userData = {
  savedRecipes: [],
};

document.addEventListener("DOMContentLoaded", (event) => {
  displayRecipes(recipeData, "Save Recipe");
  displayTags(recipeData);
});

savedRecipesBtn.addEventListener("click", () => {
  if (savedRecipesBtn.innerText === "View Saved") {
    displayRecipes(userData.savedRecipes, "Remove Recipe");
    savedRecipesBtn.innerText = "View All";
    displayTags(userData.savedRecipes);
  } else {
    displayRecipes(recipeData, "Save Recipe");
    savedRecipesBtn.innerText = "View Saved";
    displayTags(recipeData);
  }
});

recipeDisplay.addEventListener("click", (event) => {
  let clickedId = event.target.parentNode.firstChild.id;
  if (event.target.innerText === "Save Recipe") {
    event.target.innerText = "Saved";
    saveRecipe(recipeData, userData.savedRecipes, clickedId);
  } else if (event.target.innerText === "Saved") {
    event.target.innerText = "Save Recipe";
    deleteRecipe(userData.savedRecipes, clickedId);
  } else if (event.target.innerText === "Remove Recipe") {
    deleteRecipe(userData.savedRecipes, clickedId);
    displayRecipes(userData.savedRecipes, "Remove Recipe");
    displayTags(userData.savedRecipes);
  }
});

inputName.addEventListener("keydown", (event) => {
  if (savedRecipesBtn.innerText === "View Saved") {
    const userInput = getUserInput(".input-name");
    const recipeIdsByName = findRecipeByName(userInput, recipeData);
    displayRecipes(recipeIdsByName, "Save Recipe");
  } else {
    const userInput = getUserInput(".input-name");
    const recipeIdsByName = findRecipeByName(userInput, userData.savedRecipes);
    displayRecipes(recipeIdsByName, "Remove Recipe");
  }
});

inputIngredient.addEventListener("keydown", (event) => {
  if (savedRecipesBtn.innerText === "View Saved") {
    const userInput = getUserInput(".input-ingredient");
    const recipeIdsByIngredient = findRecipeByIngredient(
      userInput,
      ingredientsData,
      recipeData
    );
    displayRecipes(recipeIdsByIngredient, "Save Recipe");
  } else {
    const userInput = getUserInput(".input-ingredient");
    const recipeIdsByIngredient = findRecipeByIngredient(
      userInput,
      ingredientsData,
      userData.savedRecipes
    );
    displayRecipes(recipeIdsByIngredient, "Remove Recipe");
  }
});

tagButtons.addEventListener("click", (event) => {
  let tagClicked;
  tagClicked = event.target.id;
  if (savedRecipesBtn.innerText === "View Saved") {
    const filteredRecipeIDByTag = returnFilteredTag(recipeData, tagClicked);
    displayRecipes(filteredRecipeIDByTag, "Save Recipe");
  } else {
    const filteredRecipeIDByTag = returnFilteredTag(
      userData.savedRecipes,
      tagClicked
    );
    displayRecipes(filteredRecipeIDByTag, "Remove Recipe");
  }
});

recipeDisplay.addEventListener("click", (event) => {
  let idClicked;
  idClicked = event.target.id;
  if (idClicked.length === 6) {
    const directions = returnRecipeDirections(recipeData, idClicked);
    const cost = returnRecipeCost(recipeData, ingredientsData, idClicked);
    modalCost.innerText = `Estimated Cost of Ingredients: $${cost}`;
    const ingredients = returnIngredientNames(
      recipeData,
      ingredientsData,
      idClicked
    );
    const title = returnRecipeTitle(recipeData, idClicked);
    modalTitle.innerHTML = title;

    const tags = returnRecipeTags(recipeData, idClicked);
    const url = returnRecipeImgUrl(recipeData, idClicked);

    let directionsHtml = "";
    directions.forEach((directionsEl, index) => {
      let stepNumber = index + 1;
      directionsHtml += `<li>Step ${stepNumber}: ${directionsEl}</li>`;
    });
    modalDirections.innerHTML = directionsHtml;

    let ingredientsHtml = "";
    ingredients.forEach((ingredientEl) => {
      ingredientsHtml += `<li>${ingredientEl}</li>`;
    });
    modalIngredients.innerHTML = ingredientsHtml;

    let tagsHtml = "";
    tags.forEach((tagsEl) => {
      tagsHtml += `<li>${tagsEl}</li>`;
    });
    modalTags.innerHTML = tagsHtml;

    modalOverlay.classList.add("open-modal");

    modalContainer.style.backgroundImage = `linear-gradient(
        rgba(15, 15, 15, 0.7),
        rgba(15, 15, 15, 0.7)
      ), url(${url})`;
  }
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
