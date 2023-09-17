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
  returnIngredientNames,
  returnFilteredTag,
  returnRecipeCost,
  returnRecipeDirections,
  returnRecipeTitle,
  returnRecipeTags,
  returnRecipeImgUrl,
  findRecipeByIngredient,
  findRecipeByName,
  getUserInput,
  saveRecipe,
  deleteRecipe,
} from "/src/functions.js";

import { 
  displayRecipes, 
  displayTags, 
  displayFilteredRecipes,
} from "./domUpdates.js";

import {
  fetchCurrenciesCode,
  fetchCurrencies,
  fetchIngredients,
  fetchRecipes,
  fetchUsers,
  sendDeleteRequest,
  sendPostRequest,
} from "./apiCalls";

const recipeDisplay = document.querySelector(".recipes");
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
const headerMsg = document.querySelector(".header-msg");

// User
let currentUser = {};
let clickedRecipe = null;

let usersData = null;
let ingredientsData = null;
let recipeData = null;
let idClicked = null;

// Currency
let fetchedCodes = null;
let fetchedRates = null;

let fetchedCad = null;
let fetchedUsd = null;
let fetchedEuro = null;
let fetchedYen = null;

fetchCurrenciesCode().then((currencies) => {
  fetchedCodes = currencies;
  console.log(fetchedCodes);
});

fetchCurrencies().then((currenciesRates) => {
  fetchedRates = currenciesRates;
  console.log(fetchedRates);
  fetchedCad = fetchedRates.usd["cad"];
  fetchedUsd = fetchedRates.usd["usd"];
  fetchedEuro = fetchedRates.usd["eur"];
  fetchedYen = fetchedRates.usd["jpy"];
  console.log(fetchedCad);
  console.log(fetchedUsd);
  console.log(fetchedEuro);
  console.log(fetchedYen);
});

function createRandomUser(users) {
  const randIndex = Math.floor(Math.random() * users.length);

  const randomUser = users.find((userEl) => {
    return userEl.id == randIndex;
  });
  currentUser.name = randomUser.name;
  currentUser.id = randomUser.id;
  currentUser.recipesToCook = [];
  console.log(currentUser);
  headerMsg.innerText = `What's Cookin', ${currentUser.name}?`

  return currentUser;
}
const viewSavedRecipes = (recipeData) => {
  if (savedRecipesBtn.innerText === "View Saved Recipes") {
    displayRecipes(currentUser.recipesToCook, "Remove Recipe");
    savedRecipesBtn.innerText = "View All";
    displayTags(currentUser.recipesToCook);
  } else {
    displayFilteredRecipes(recipeData, currentUser.recipesToCook);
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
    clickedRecipe = clickedId;
    saveRecipe(recipeData, currentUser.recipesToCook, clickedId);
    sendPostRequest(currentUser, clickedRecipe);
  } else if (event.target.innerText === "✓ Saved") {
    event.target.innerText = "Save Recipe";
    event.target.style.backgroundColor = "#e5e7e9";
    deleteRecipe(currentUser.recipesToCook, clickedId);
    sendDeleteRequest(currentUser, clickedRecipe);
  } else if (event.target.innerText === "Remove Recipe") {
    deleteRecipe(currentUser.recipesToCook, clickedId);
    sendDeleteRequest(currentUser, clickedRecipe);
    displayRecipes(currentUser.recipesToCook, "Remove Recipe");
    displayTags(currentUser.recipesToCook);
  }
});

inputName.addEventListener("keyup", (event) => {
  if (savedRecipesBtn.innerText === "View Saved Recipes") {
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
  handleTagButtonClick(event);
});

tagButtons.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleTagButtonClick(event);
  }
});

function handleTagButtonClick(event) {
  let tagClicked;
  tagClicked = event.target.id;

  const clickedTag = event.target;

  if (clickedTag.classList.contains("tag-btn")) {
    const allTagButtons = tagButtons.querySelectorAll(".tag-btn");

    allTagButtons.forEach((tagButton) => {
      if (tagButton === clickedTag) {
        tagButton.parentNode.classList.add("bold");
      } else {
        tagButton.parentNode.classList.remove("bold");
      }
    });
  }

  if (event.target === savedRecipesBtn) {
    const filteredRecipeIDByTag = returnFilteredTag(recipeData, tagClicked);
    displayRecipes(filteredRecipeIDByTag, "Remove Recipe");
  } else if (tagClicked !== "" && savedRecipesBtn.innerHTML !== "View All") {
    const filteredRecipeIDByTag = returnFilteredTag(recipeData, tagClicked);
    displayRecipes(filteredRecipeIDByTag, "Save Recipe");
  } else if (tagClicked !== "" && savedRecipesBtn.innerHTML === "View All") {
    const filteredRecipeIDByTag = returnFilteredTag(
      currentUser.recipesToCook,
      tagClicked
    );
    displayRecipes(filteredRecipeIDByTag, "Remove Recipe");
  }
}


recipeDisplay.addEventListener("click", handleRecipeDisplayEvent);

recipeDisplay.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleRecipeDisplayEvent(event);
  }
});

function handleRecipeDisplayEvent(event) {
  idClicked = event.target.id;
  if (idClicked.length === 6) {
    createModal();
    updateCost();
    createCurrencyDropdown();
    updateTitle();
    updateDirections();
    updateIngredients();
    updateTags();
  }
}

closeBtn.addEventListener("click", function () {
  closeDropdownAndModal();
});

closeBtn.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    closeDropdownAndModal();
  }
});

function closeDropdownAndModal() {
  const currencyDropDown = document.querySelector("#currencies-dropdown");
  const currencyLabel = document.querySelector(".choose-currency");
  if (currencyDropDown && currencyLabel) {
    currencyDropDown.remove();
    currencyLabel.remove();
  }

  modalOverlay.classList.remove("open-modal");
}

modalOverlay.addEventListener("click", (event) => {
  const currencyDropDown = document.querySelector("#currencies-dropdown");
  const currencyLabel = document.querySelector(".choose-currency");
  if (event.target.id === "modal-overlay") {
  modalOverlay.classList.remove("open-modal");
  currencyDropDown.remove();
  currencyLabel.remove();
 }
});

document.addEventListener("keydown", (event) => {
  const currencyDropDown = document.querySelector("#currencies-dropdown");
  const currencyLabel = document.querySelector(".choose-currency");
  if (event.key === "Escape") {
    modalOverlay.classList.remove("open-modal");
    currencyDropDown.remove();
    currencyLabel.remove();
  }
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

  modalOverlay.id = "modal-overlay";

  modalContainer.style.backgroundImage = `linear-gradient(
    rgba(15, 15, 15, 0.7),
    rgba(15, 15, 15, 0.7)
  ), url(${url})`;
}

function updateCost() {
  const cost = returnRecipeCost(recipeData, ingredientsData, idClicked);
  modalCost.innerText = `Estimated Cost of Ingredients: ${cost} USD`;
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

function createCurrencyDropdown() {
  const currencyDropDown = document.createElement("div");
  currencyDropDown.innerHTML = `<label for="currencies" class="choose-currency">Choose a currency</label>
    <select tabindex="0" name="currencies" class="currencies-dropdown" id="currencies-dropdown">
      <option value="USD">Choose Currency</option>
      <option value="usd">USD</option>
      <option value="cad">CAD</option>
      <option value="eur">EUROS</option>
      <option value="jpy">JAPANESE YEN</option>
    </select>`;
  modalCost.insertAdjacentElement("afterend", currencyDropDown);
  
  const selectMenu = document.querySelector("#currencies-dropdown");
  selectMenu.focus();
}


document.addEventListener("change", (event) => {
  if (event.target.classList.contains("currencies-dropdown")) {
    const selectedCurrencyId = event.target.value;
    const costSelected = returnRecipeCost(
      recipeData,
      ingredientsData,
      idClicked
    );
    const convertedCost = returnUpdatedCost(selectedCurrencyId, costSelected);
    modalCost.innerText = `Estimated Cost of Ingredients: ${convertedCost} ${selectedCurrencyId.toUpperCase()}`;
  }
});

function returnUpdatedCost(currencySelected, costSelected) {
  if (currencySelected === "usd") {
    const usdCost = costSelected * fetchedUsd;
    return Math.round(usdCost);
  } else if (currencySelected === "cad") {
    const cadCost = costSelected * fetchedCad;
    return Math.round(cadCost);
  } else if (currencySelected === "eur") {
    const eurCost = costSelected * fetchedEuro;
    return Math.round(eurCost);
  } else if (currencySelected === "jpy") {
    const yenCost = costSelected * fetchedYen;
    return Math.round(yenCost);
  } else {
    const usdCost = costSelected * fetchedUsd;
    return Math.round(usdCost);
  }
}
