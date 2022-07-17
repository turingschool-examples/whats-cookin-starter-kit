import "./styles.css";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import recipeData from "./data/recipes";
import ingredientsData from "./data/ingredients";
import usersData from "./data/users";
import RecipeRepository from "./classes/RecipeRepository";
import User from "./classes/User";

const recipeRepo = new RecipeRepository();
const user = new User(usersData[Math.floor(Math.random() * 41)]);
recipeRepo.importRecipesFromFile(recipeData, ingredientsData);

const resultTemplate = document.querySelector("#mini-recipe-template");
const resultCardsContainer = document.querySelector(".results-grid-container");
const specificRecipeSection = document.getElementById(
  "specific-recipe-section"
);
const modalCurtain = document.querySelector(".grey-out-bg");
const greeting = document.querySelector(".greeting");
const closeIcon = document.querySelector(".close-icon");
const homeButton = document.querySelector(".home-button");
const header = document.querySelector(".results-header");
const keywordList = document.getElementById("keyword-list");
const saveIcon = document.querySelector(".save-recipe-icon");
const searchIcon = document.querySelector(".search-icon");
window.addEventListener("load", displayAllRecipesView);
window.addEventListener("load", listKeywords);
keywordList.addEventListener("click", keywordClicked);
homeButton.addEventListener("click", displayAllRecipesView);
searchIcon.addEventListener("click", executeSearch);
closeIcon.addEventListener("click", closeSpecificRecipe);
saveIcon.addEventListener("click", specificRecipeClicked);
resultCardsContainer.addEventListener("click", specificRecipeClicked);

document
  .querySelector(".my-recipes-button")
  .addEventListener("click", displayUserRecipes);

function listKeywords() {
  recipeRepo.allTags.forEach((tag) => {
    let keyword = document.createElement("div");
    keyword.classList.add("keyword");
    keyword.innerText = tag;
    keywordList.appendChild(keyword);
  });
}

function keywordClicked(event) {
  let keywordElement = event.target.closest(".keyword");
  if (keywordElement.classList.contains("clicked")) {
    keywordElement.classList.remove("clicked");
    recipeRepo.selectedInput.find((inputItem) =>
      recipeRepo.selectedInput.splice(inputItem, 1)
    );
  } else {
    keywordElement.classList.add("clicked");
    recipeRepo.addInputToSearch(keywordElement.innerText);
  }
}

function executeSearch() {
  recipeRepo.filterByMultipleTags();
  header.innerText = `Your search results`;
  resultCardsContainer.replaceChildren();
  recipeRepo.filteredAllRecipes.forEach((recipe) => {
    let recipeCard = makeRecipeCard(recipe);
    addRecipeCardToResultsContainer(recipeCard);
  });
}

function removeUserRecipe(recipe) {
  user.removeRecipeToCook(recipe);
}

function addUserRecipe(recipe) {
  user.addRecipeToCook(recipe);
}

function displayUserRecipes() {
  greeting.innerText = ``;
  if (user.recipesToCook.length >= 1) {
    header.innerText = `${user.name}'s recipes!`;
    resultCardsContainer.replaceChildren();
    user.recipesToCook.forEach((recipe) => {
      let recipeCard = makeRecipeCard(recipe);
      addRecipeCardToResultsContainer(recipeCard);
    });
  } else {
    header.innerText = `There are no recipes saved.`;
    resultCardsContainer.replaceChildren();
  }
}

function specificRecipeClicked(event) {
  let recipeID = getRecipeIdFromClickEvent(event);
  let specificRecipe = findSpecificRecipe(recipeID);
  if (event.target.classList.contains("favorite-button")) {
    if (event.target.classList.contains("saved")) {
      event.target.classList.remove("saved");
      removeUserRecipe(specificRecipe);
    } else {
      event.target.classList.add("saved");
      addUserRecipe(specificRecipe);
    }
  } else {
    displaySpecificRecipe(specificRecipe);
  }
}

function getRecipeIdFromClickEvent(event) {
  let specificRecipeId = event.target.closest("[data-id]").dataset.id;
  return specificRecipeId;
}

function findSpecificRecipe(recipeID) {
  let specificRecipe = recipeRepo.recipes.find((recipe) => {
    return recipe.id === parseInt(recipeID);
  });
  return specificRecipe;
}

function displaySpecificRecipe(recipe) {
  updateSpecificRecipeCard(recipe);
  show(specificRecipeSection);
  show(modalCurtain);
}

function updateSpecificRecipeCard(recipe) {
  specificRecipeSection.querySelector(".title").innerText = recipe.name;
  if (user.recipesToCook.includes(recipe)) {
    specificRecipeSection
      .querySelector(".save-recipe-icon")
      .classList.add("saved");
  }
  specificRecipeSection.querySelector(".save-recipe-icon").dataset.id =
    recipe.id;
  specificRecipeSection.querySelector(".specific-recipe-image").src =
    recipe.imageURL;
  updateSpecificRecipeIngredients(recipe);
  updateSpecificRecipeInstructions(recipe);
  specificRecipeSection.querySelector(".recipe-cost h5").innerText =
    "$" + recipe.calcTotalRecipeCost();
}

function updateSpecificRecipeIngredients(recipe) {
  let ingredientsList = specificRecipeSection.querySelector(".ingredients ol");
  ingredientsList.replaceChildren();
  let portionNames = recipe.getPortionNames();
  portionNames.forEach((portionName) => {
    let listItem = document.createElement("li");
    listItem.innerText = capitalize(portionName);
    ingredientsList.append(listItem);
  });
}

function updateSpecificRecipeInstructions(recipe) {
  let instructionsList =
    specificRecipeSection.querySelector(".instructions ol");
  instructionsList.replaceChildren();
  let instructions = recipe.getInstructions();
  instructions.forEach((instruction) => {
    let listItem = document.createElement("li");
    listItem.innerText = capitalize(instruction);
    instructionsList.append(listItem);
  });
}

function closeSpecificRecipe() {
  hide(specificRecipeSection);
  hide(modalCurtain);
}

function displayAllRecipesView() {
  greeting.innerText = `Welcome, ${user.name}!`;
  header.innerText = `All Recipes!`;
  resultCardsContainer.replaceChildren();
  recipeRepo.recipes.forEach((recipe) => {
    let recipeCard = makeRecipeCard(recipe);
    addRecipeCardToResultsContainer(recipeCard);
  });
}

function makeRecipeCard(recipe) {
  let newCard = resultTemplate.cloneNode(true);
  newCard.removeAttribute("id");
  newCard.dataset.id = recipe.id;
  if (user.recipesToCook.includes(recipe)) {
    newCard.querySelector(".favorite-button").classList.add("saved");
  }
  newCard.querySelector(".recipe-name").innerText = recipe.name;
  newCard.querySelector(".recipe-image").src = recipe.imageURL;
  show(newCard);
  return newCard;
}

function addRecipeCardToResultsContainer(recipeCard) {
  resultCardsContainer.appendChild(recipeCard);
}

function hide(domElement) {
  domElement.classList.add("hidden");
}

function show(domElement) {
  domElement.classList.remove("hidden");
}

function capitalize(string) {
  let stringArray = string.split("");
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join("");
}