//
import "./styles.css";
import "./domUpdates.js";
import "./functions.js";

import "./images/antipasti.png";
import "./images/antipasto.png";
import "./images/appetizer.png";
import "./images/breakfast.png";
import "./images/brunch.png";
import "./images/condiment.png";
import "./images/dinner.png";
import "./images/dip.png";
import "./images/hor d'oeuvre.png";
import "./images/lunch.png";
import "./images/main course.png";
import "./images/main dish.png";
import "./images/morning meal.png";
import "./images/salad.png";
import "./images/sauce.png";
import "./images/side dish.png";
import "./images/snack.png";
import "./images/spread.png";
import "./images/starter.png";

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
import { fetchIngredients, fetchRecipes, fetchUsers } from "./apiCalls";

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

let currentUser = {};

let usersData = null;
let ingredientsData = null;
let recipeData = null;
let idClicked = null;

function createRandomUser(users) {
  const randIndex = Math.floor(Math.random() * users.length);

  const randomUser = users.find((userEl) => {
    return userEl.id == randIndex;
  });
  currentUser.name = randomUser.name;
  currentUser.id = randomUser.id;
  currentUser.recipesToCook = [];
  console.log(currentUser);

  return currentUser;
}
const viewSavedRecipes = (recipeData) => {
  if (savedRecipesBtn.innerText === "View Saved Recipes") {
    // console.log(currentUser.recipesToCook);
    // console.log(currentUser);
    displayRecipes(currentUser.recipesToCook, "Remove Recipe");
    savedRecipesBtn.innerText = "View All";
    displayTags(currentUser.recipesToCook);
  } else {
    displayRecipes(recipeData, "Save Recipe");
    savedRecipesBtn.innerText = "View Saved Recipes";
    displayTags(recipeData);
  }
};

savedRecipesBtn.addEventListener("click", () => {
  viewSavedRecipes(recipeData);
});

recipeDisplay.addEventListener("click", (event) => {
  let clickedId = event.target.parentNode.firstChild.id;
  if (event.target.innerText === "Save Recipe") {
    event.target.innerText = "✓ Saved";
    event.target.style.backgroundColor = "#89ce94";
    saveRecipe(recipeData, currentUser.recipesToCook, clickedId);
  } else if (event.target.innerText === "✓ Saved") {
    event.target.innerText = "Save Recipe";
    event.target.style.backgroundColor = "#e5e7e9";
    deleteRecipe(currentUser.recipesToCook, clickedId);
  } else if (event.target.innerText === "Remove Recipe") {
    deleteRecipe(currentUser.recipesToCook, clickedId);
    displayRecipes(currentUser.recipesToCook, "Remove Recipe");
    displayTags(currentUser.recipesToCook);
  }
});

inputName.addEventListener("keyup", (event) => {
  if(savedRecipesBtn.innerText === "View Saved Recipes") {
    const userInput = getUserInput(".input-name");
    const recipeIdsByName = findRecipeByName(userInput, recipeData);
    displayRecipes(recipeIdsByName, "Save Recipe");
  } else {
    const userInput = getUserInput(".input-name");
    const recipeIdsByName = findRecipeByName(
      userInput,
      currentUser.recipesToCook
    );
    displayRecipes(recipeIdsByName, "Remove Recipe");
  }
});

inputIngredient.addEventListener("keyup", (event) => {
  if (savedRecipesBtn.innerText === "View Saved Recipes") {
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
        currentUser.recipesToCook
      );
      displayRecipes(recipeIdsByIngredient, "Remove Recipe");
    }
  });

tagButtons.addEventListener("click", (event) => {
  let tagClicked;
  tagClicked = event.target.id;

  // clicked tag img
  const clickedTag = event.target;

  if (clickedTag.classList.contains("tag-btn")) {
    const allTagButtons = tagButtons.querySelectorAll(".tag-btn");
    
    allTagButtons.forEach((tagButton) => {
      if (tagButton === clickedTag) {
        tagButton.parentNode.classList.toggle("bold");
      } else {
        // reset the others
        tagButton.parentNode.classList.remove("bold");
      }
    })
  }

  if (event.target === savedRecipesBtn) {
    const filteredRecipeIDByTag = returnFilteredTag(recipeData, tagClicked);
    displayRecipes(filteredRecipeIDByTag, "Remove Recipe");
  } else if (tagClicked !== '' && savedRecipesBtn.innerHTML !== 'View All') {
    const filteredRecipeIDByTag = returnFilteredTag(recipeData, tagClicked);
    displayRecipes(filteredRecipeIDByTag, "Save Recipe");
  } else if (tagClicked !== '' && savedRecipesBtn.innerHTML === 'View All') {
    const filteredRecipeIDByTag = returnFilteredTag(
      currentUser.recipesToCook,
      tagClicked
    );
    displayRecipes(filteredRecipeIDByTag, "Remove Recipe");
  }
});

recipeDisplay.addEventListener("click", (event) => {
  idClicked = event.target.id;
  if (idClicked.length === 6) {
    createModal();
    updateCost();
    updateTitle();
    updateDirections();
    updateIngredients();
    updateTags();
  }
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

Promise.all([fetchUsers, fetchIngredients, fetchRecipes]).then(
  ([usersDataValue, ingredientsDataValue, recipeDataValue]) => {
    usersData = usersDataValue;
    ingredientsData = ingredientsDataValue;
    recipeData = recipeDataValue;

    displayRecipes(recipeData, "Save Recipe");
    displayTags(recipeData);
    createRandomUser(usersData);
  }
);

function createModal() {
  const url = returnRecipeImgUrl(recipeData, idClicked);

  modalOverlay.classList.add("open-modal");

  modalContainer.style.backgroundImage = `linear-gradient(
    rgba(15, 15, 15, 0.7),
    rgba(15, 15, 15, 0.7)
  ), url(${url})`;
}

function updateCost() {
  const cost = returnRecipeCost(recipeData, ingredientsData, idClicked);
  modalCost.innerText = `Estimated Cost of Ingredients: $${cost}`;
}

function updateTitle() {
  const title = returnRecipeTitle(recipeData, idClicked);
  modalTitle.innerHTML = title;
}

function updateDirections() {
  const directions = returnRecipeDirections(recipeData, idClicked);
  let directionsHtml = "";
  directions.forEach((directionsEl, index) => {
    let stepNumber = index + 1;
    directionsHtml += `<li><strong>Step${stepNumber}:</strong> ${directionsEl}</li><br>`;
  });
  modalDirections.innerHTML = directionsHtml;
}

function updateIngredients() {
  const ingredients = returnIngredientNames(
    recipeData,
    ingredientsData,
    idClicked
  );

  let ingredientsHtml = "";
  ingredients.forEach((ingredientEl) => {
    ingredientsHtml += `<li>- ${ingredientEl}</li>`;
  });
  modalIngredients.innerHTML = ingredientsHtml;
}

function updateTags() {
  const tags = returnRecipeTags(recipeData, idClicked);
  let tagsHtml = "";
  tags.forEach((tagsEl) => {
    tagsHtml += `<li>${tagsEl}</li>`;
  });
  modalTags.innerHTML = tagsHtml;
}
