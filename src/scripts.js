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
const searchBar = document.querySelector(".search-bar");
const closeIcon = document.querySelector(".close-icon");
const homeButton = document.querySelector(".home-button");
const header = document.querySelector(".results-header");
const keywordList = document.getElementById("keyword-list");
const toggleSeachOption = document.querySelector(".toggle-search-option");
const keywordSection = document.querySelector(".keyword-section");

const saveIcon = document.querySelector(".save-recipe-icon");
const searchButton = document.querySelector(".submit-search");
window.addEventListener("load", displayAllRecipesView);
toggleSeachOption.addEventListener("click", showKeywords);

keywordList.addEventListener("click", keywordClicked);
homeButton.addEventListener("click", displayAllRecipesView);
searchButton.addEventListener("click", executeSearch);
closeIcon.addEventListener("click", closeSpecificRecipe);
saveIcon.addEventListener("click", specificRecipeClicked);
resultCardsContainer.addEventListener("click", specificRecipeClicked);

document
  .querySelector(".my-recipes-button")
  .addEventListener("click", displayUserRecipes);

function listKeywords() {
  keywordList.replaceChildren();
  recipeRepo.allTags.forEach((tag) => {
    let keyword = document.createElement("div");
    keyword.classList.add("keyword");
    keyword.innerText = tag;
    keywordList.appendChild(keyword);
  });
}

function showKeywords() {
  toggle(searchBar);
  toggle(keywordSection)
   listKeywords();
   toggleSeachOption.innerText = `or search by name`
   searchBar.value = ``;

}

function keywordClicked(event) {
  let keywordElement = event.target.closest(".keyword");
    searchBar.classList.add("disabled");
    //ingredientList.classList.add("disabled");
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
  if (!searchBar.value) {
 recipeRepo.filterByMultipleTags();
  header.innerText = `Your search results`;
  resultCardsContainer.replaceChildren();
  recipeRepo.filteredAllRecipes.forEach((recipe) => {
    let recipeCard = makeRecipeCard(recipe);
    addRecipeCardToResultsContainer(recipeCard);
  });
} else {
  recipeRepo.clearData()
  let searchInput = searchBar.value
  let searchTerms = searchInput.split(',')
  searchTerms.forEach((term) => recipeRepo.addInputToSearch(term));
  recipeRepo.filterByMultipleRecipeNames()
  recipeRepo.filterByMultipleIngredients()
  header.innerText = `Your search results`;
  resultCardsContainer.replaceChildren();
  recipeRepo.filteredAllRecipes.forEach((recipe) => {
  let recipeCard = makeRecipeCard(recipe);
  addRecipeCardToResultsContainer(recipeCard);
})
}
searchBar.value = ``
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
  recipeRepo.clearData();
  listKeywords();
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
function toggle(domElement) {
  domElement.classList.toggle("hidden");
}

function capitalize(string) {
  let stringArray = string.split("");
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join("");
}