import "./styles.css";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import Recipe from "./classes/Recipe";
import RecipeRepository from "./classes/RecipeRepository";
import ingredientsData from "./data/ingredients";
import recipesData from "./data/recipes";
import UserRepo from "./classes/UserRepo";
import allUsersData from "./data/users-sample";
import User from "./classes/User";
import UserList from "./classes/UserList";

let allIngredients = ingredientsData;
let allRecipes = recipesData
  .map((recipe) => {
    const newRecipe = new Recipe(recipe);
    newRecipe.retrieveIngredients(allIngredients);
    return newRecipe;
  })
  .sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
let recipeRepository = new RecipeRepository(allRecipes);
let currentUser;
let userRepo = new UserRepo(allUsersData);
const newUserList = new UserList();

//query selectors go here
//pages
const homePage = document.querySelector(".home-page");
const allRecipesPage = document.querySelector(".all-recipes-page");
const currentRecipePage = document.querySelector(".current-recipe");
const savedRecipePage = document.querySelector(".saved-recipes-page");
//containers
const allRecipesContainer = document.querySelector("#all-recipes-container");
const currentRecipeContainer = document.querySelector("#current-recipe-id");
const savedRecipeContainer = document.querySelector(
  "#saved-recipe-card-container"
);
const headerTitle = document.querySelector(".header-title");
//button
const homeButton = document.querySelector(".return-home");
const recipesButton = document.querySelector(".all-recipes-button");
const allSearchButtons = document.querySelectorAll(".search-button");
const myRecipesButton = document.querySelector(".my-recipes-button");
//filters
const allTagSelect = document.querySelector("#all-tag-select");
const userTagSelect = document.querySelector("#user-tag-select");
const userSeachForm = document.querySelector(".user-search-bar");
const allSeachForm = document.querySelector(".all-search-bar");

const allImages = document.querySelectorAll(".image");
const allMiniImages = document.querySelectorAll(".mini-image");

//event listeners go here
window.addEventListener("load", loadPage);
recipesButton.addEventListener("click", renderAllRecipesPage);
homeButton.addEventListener("click", returnHome);
myRecipesButton.addEventListener("click", viewMyRecipes);

allImages.forEach((image) => {
  image.addEventListener("click", seeRecipe);
});
allMiniImages.forEach((image) => {
  image.addEventListener("click", seeRecipe);
});

// myRecipeSearch.addEventListener("click", searchMyRecipeNames);
allSearchButtons.forEach((button) => {
  button.addEventListener("click", searchForRecipes);
});

allTagSelect.addEventListener("change", searchAllRecipesByTag);
userTagSelect.addEventListener("change", searchUserRecipesByTag);

//event handlers go here
function loadPage() {
  renderTags();
  selectRandomUser();
}

function renderTags() {
  const tags = recipeRepository.getAllTags();
  tags.forEach((tag) => {
    allTagSelect.innerHTML += `<option value="${tag}">${tag}</option>`;
    userTagSelect.innerHTML += `<option value="${tag}">${tag}</option>`;
  });
}

function searchAllRecipesByTag(event) {
  const tagValue = event.target.value;
  const filteredRecipes = recipeRepository.filterByTag(tagValue);
  viewAllRecipes(filteredRecipes);
}

function searchUserRecipesByTag(event) {
  const tagValue = event.target.value;
  const filteredRecipes = newUserList.filterByTag(tagValue);
  console.log(filteredRecipes);
  viewAllRecipes(filteredRecipes);
}

function selectRandomUser() {
  let randomIndex = Math.floor(Math.random() * userRepo.userCatalog.length);
  let randomUser = userRepo.userCatalog[randomIndex];
  return (currentUser = new User(randomUser));
}

function renderAllRecipesPage() {
  viewAllRecipes(recipeRepository.newRecipes);
  headerTitle.innerText = "All Recipes";
  changeToAllInputs();
}

function viewAllRecipes(recipes) {
  addHidden(homePage);
  addHidden(currentRecipePage);
  removeHidden(allRecipesPage);
  addHidden(savedRecipePage);
  removeHidden(homeButton);
  removeHidden(myRecipesButton);

  allRecipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    const newSection = document.createElement("section");
    newSection.className = "recipe-card-container";
    newSection.innerHTML = `
        <img class="image" id="${recipe.id}" src="${recipe.image}">
        <p class="recipe-name"> ${recipe.name} </p>`;

    allRecipesContainer.appendChild(newSection);
    const recipeImage = newSection.querySelector(".image");
    recipeImage.addEventListener("click", seeRecipe);
  });
}

function searchForRecipes(event) {
  event.preventDefault();
  let filteredElements;

  if (event.target.id.includes("all")) {
    const inputValue = allSeachForm.elements.search.value;
    filteredElements = recipeRepository.filterByName(inputValue);
  } else {
    const inputValue = userSeachForm.elements.search.value;
    filteredElements = newUserList.filterByName(inputValue);
  }

  viewAllRecipes(filteredElements);
}

function seeRecipe(event) {
  const visibleRecipe = recipeRepository.newRecipes.find((recipe) => {
    return parseInt(event.target.id) === recipe.id;
  });
  renderRecipe(visibleRecipe);
}

//other functions go here
function renderRecipe(recipe) {
  addHidden(allRecipesPage);
  removeHidden(currentRecipePage);
  addHidden(savedRecipePage);
  addHidden(homePage);
  removeHidden(myRecipesButton);
  changeToAllInputs();
  headerTitle.innerText = "More Info";

  currentRecipeContainer.innerHTML = "";
  const newSection = document.createElement("section");
  newSection.className = "recipe-details";
  newSection.innerHTML += `<h2>${recipe.name}</h2>`;
  newSection.innerHTML += `<img class="image" id="${recipe.id}" src="${recipe.image}">`;
  newSection.innerHTML += renderIngredients(recipe.ingredients);
  newSection.innerHTML += renderInstructions(recipe.instructions);
  newSection.innerHTML += `<p>Estimated cost: ${recipe.getCost()} cents</p>
  <button class="save-recipe-button" id="${recipe.id}"> Save Recipe </button>`;

  currentRecipeContainer.appendChild(newSection);
  const recipeImage = newSection.querySelector(".image");
  recipeImage.addEventListener("click", seeRecipe);
  const saveRecipeButton = newSection.querySelector(".save-recipe-button");
  saveRecipeButton.addEventListener("click", addToSavedRecipe);
}

function renderInstructions(instructions) {
  let html = "";
  instructions.forEach((item) => {
    html += `<li>${item.instruction}</li>`;
  });

  return `
    <ol>
      <p>Instructions:</p>
      ${html}
    </ol>
  `;
}

function renderIngredients(ingredients) {
  let html = "";
  ingredients.forEach((item) => {
    html += `<li>${item.quantity.amount} ${item.quantity.unit} ${item.name}</li>`;
  });
  return `
    <ul>
      <p>Ingredients</p>
      ${html}
    </ul>
  `;
}

function addToSavedRecipe(event) {
  const newSavedRecipe = recipeRepository.newRecipes.find((recipe) => {
    return parseInt(event.target.id) === recipe.id;
  });
  const existingData = newUserList.recipesToCook.find((recipe) => {
    return newSavedRecipe.id === recipe.id;
  });
  if (!existingData) {
    newUserList.recipesToCook.push(newSavedRecipe);
  }
  savedRecipes();
}

function savedRecipes() {
  viewMyRecipes();
  savedRecipeContainer.innerHTML = "";
  newUserList.recipesToCook.forEach((recipe) => {
    const newSection = document.createElement("section");
    newSection.className = "recipe-card-container";
    newSection.innerHTML = `
        <img class="image" id="${recipe.id}" src="${recipe.image}">
        <button class="delete-recipe" id="${recipe.id}">Delete Recipe</button>
        <p class="recipe-name"> ${recipe.name} </p>`;

    savedRecipeContainer.appendChild(newSection);
    const recipeImage = newSection.querySelector(".image");
    recipeImage.addEventListener("click", seeRecipe);
    const deleteRecipeButtons = newSection.querySelectorAll(".delete-recipe");
    deleteRecipeButtons.forEach((button) => {
      button.addEventListener("click", deleteRecipe);
    });
  });
}

function deleteRecipe(event) {
  const removeRecipe = newUserList.recipesToCook.find((recipe) => {
    return parseInt(event.target.id) === recipe.id;
  });
  const indexNumber = newUserList.recipesToCook.indexOf(removeRecipe);
  newUserList.recipesToCook.splice(indexNumber, 1);
  savedRecipes();
}

function returnHome() {
  addHidden(allRecipesPage);
  addHidden(currentRecipePage);
  addHidden(savedRecipePage);
  removeHidden(homePage);
  addHidden(homeButton);
  removeHidden(myRecipesButton);
  changeToAllInputs();
  headerTitle.innerText = "Whats Cookin', Good Lookin'?";
}

function viewMyRecipes() {
  addHidden(allRecipesPage);
  addHidden(currentRecipePage);
  addHidden(homePage);
  addHidden(myRecipesButton);
  removeHidden(savedRecipePage);
  changeToUserInputs();
  headerTitle.innerText = "Recipes to Cook";
}

function changeToAllInputs() {
  addHidden(userTagSelect);
  removeHidden(allTagSelect);
  removeHidden(allSeachForm);
  addHidden(userSeachForm);
}

function changeToUserInputs() {
  addHidden(allTagSelect);
  removeHidden(userTagSelect);
  addHidden(allSeachForm);
  removeHidden(userSeachForm);
}

function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}
