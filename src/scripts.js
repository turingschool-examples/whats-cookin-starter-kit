import "./styles.css";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import Recipe from "./classes/Recipe";
import RecipeRepository from "./classes/RecipeRepository";
import Ingredient from "./classes/Ingredient";
import ingredientsData from "./data/ingredients";
import recipesData from "./data/recipes";
// import UserRepo from "./classes/UserRepo";

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

//query selectors go here
let allRecipesButton = document.querySelector(".all-recipes-button");
let allRecipesPage = document.querySelector(".all-recipes-page");
let homePage = document.querySelector(".home-page");
let currentRecipePage = document.querySelector(".current-recipe");
let searchButton = document.querySelector(".search-button");
let inputBar = document.querySelector(".search-bar > input");
let tagSelect = document.querySelector("#tag-select");

//event listeners go here
allRecipesButton.addEventListener("click", viewAllRecipes);allRecipesButton.addEventListener("click", renderAllRecipesPage);
searchButton.addEventListener("click", searchForRecipes);
tagSelect.addEventListener("change", searchByTag);
window.addEventListener("load", selectRandomUser);

//event handlers go here
function searchByTag(event) {
  const tagValue = event.target.value;
  const filteredRecipes = recipeRepository.filterByTag(tagValue);
  viewAllRecipes(filteredRecipes);
}

function selectRandomUser() {
  let randomIndex = Math.floor(Math.random() * userRepo.userCatalog.length)
  let randomUser = userRepo.userCatalog[randomIndex]
  console.log(currentUser)
  return currentUser = new User(randomUser)
  
}

function renderAllRecipesPage() {
  viewAllRecipes(recipeRepository.newRecipes);
}

function viewAllRecipes(recipes) {
  addHidden(homePage);
  removeHidden(allRecipesPage);
  recipes.forEach((recipe) => {
    const newSection = document.createElement("section");
    newSection.className = "recipe-card-container";
    newSection.innerHTML = `
        <img class="image" id="${recipe.id}" src="${recipe.image}">
        <p class="recipe-name"> ${recipe.name} </p>`;

    allRecipesPage.appendChild(newSection);
    newSection.addEventListener("click", seeRecipe);
  });
}

function searchForRecipes() {
  const inputValue = inputBar.value;
  const filteredElements = recipeRepository.filterByName(inputValue);
  viewAllRecipes(filteredElements);
}

//other functions go here

function seeRecipe(event) {
  let visibleRecipe = recipeRepository.newRecipes.find((recipe) => {
    return parseInt(event.target.id) === recipe.id;
  });
  renderRecipe(visibleRecipe);
}

function renderRecipe(recipe) {
  addHidden(allRecipesPage);
  removeHidden(currentRecipePage);

  const newSection = document.createElement("section");
  newSection.className = "recipe-details";
  newSection.innerHTML += `<h2>${recipe.name}</h2>`;
  newSection.innerHTML += `<img class="image" src="${recipe.image}">`;
  newSection.innerHTML += renderIngredients(recipe.ingredients);
  newSection.innerHTML += renderInstructions(recipe.instructions);
  newSection.innerHTML += `<p>Estimated cost: ${recipe.getCost()} cents</p>`;

  currentRecipePage.appendChild(newSection);
}

function renderInstructions(instructions) {
  let html = "";
  instructions.forEach((item) => {
    html += `<li>${item.instruction}</li>`;
  });

  return `<ol>
  <p>Instructions:</p>
  ${html}
  </ol>`;
}

function renderIngredients(ingredients) {
  let html = "";
  ingredients.forEach((item) => {
    html += `<li>${item.quantity.amount} ${item.quantity.unit} ${item.name}</li>`;
  });
  return `<ul>
  <p>Ingredients</p>
  ${html}
  </ul>`;
}

function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}
