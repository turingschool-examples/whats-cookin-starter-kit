import "./styles.css";
import apiCalls from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import Recipe from "./classes/Recipe";
import RecipeRepository from "./classes/RecipeRepository";
import Ingredient from "./classes/Ingredient";
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
const newUserList = new UserList()


//query selectors go here
const allRecipesButtons = document.querySelectorAll(".all-recipes-button");
const allRecipesPage = document.querySelector(".all-recipes-page");
const homePage = document.querySelector(".home-page");
const currentRecipePage = document.querySelector(".current-recipe");
const currentRecipeContainer = document.querySelector("#current-recipe-id")
const allSearchButtons = document.querySelectorAll(".search-button");
const allHomeButtons = document.querySelectorAll(".return-home")
const inputBar = document.querySelector(".search-bar > input");
const tagSelect = document.querySelector("#tag-select");
// let saveRecipeButton = document.querySelector(".save-recipe-button");
const savedRecipePage = document.querySelector(".saved-recipes-page");
const savedRecipeContainer = document.querySelector("#saved-recipe-card-container");
const allRecipesContainer = document.querySelector("#all-recipes-container");
const allImages = document.querySelectorAll(".image");
const allMiniImages = document.querySelectorAll(".mini-image");
const myRecipesButtons = document.querySelectorAll(".my-recipes-button");
const myRecipeSearch = document.querySelector(".search-my-recipes-button");

//event listeners go here
allRecipesButtons.forEach((button) => {
  button.addEventListener("click", renderAllRecipesPage)
});
allSearchButtons.forEach((button) => {
  button.addEventListener("click", searchForRecipes)
});
allImages.forEach((image) => {
  image.addEventListener("click", seeRecipe)
});
allMiniImages.forEach((image) => {
  image.addEventListener("click", seeRecipe)
});
allHomeButtons.forEach((button) => {
  button.addEventListener("click", returnHome)
})
myRecipesButtons.forEach((button) => {
  button.addEventListener("click", viewMyRecipes)
})
myRecipeSearch.addEventListener("click", searchMyRecipes);
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
  return currentUser = new User(randomUser)
}

function renderAllRecipesPage() {
  viewAllRecipes(recipeRepository.newRecipes);
}

function viewAllRecipes(recipes) {
  addHidden(homePage);
  addHidden(currentRecipePage);
  removeHidden(allRecipesPage);
  addHidden(savedRecipePage);
  allRecipesContainer.innerHTML = ""
  recipes.forEach((recipe) => {
    const newSection = document.createElement("section");
    newSection.className = "recipe-card-container";
    newSection.innerHTML = `
        <img class="image" id="${recipe.id}" src="${recipe.image}">
        <p class="recipe-name"> ${recipe.name} </p>`;
       

    allRecipesContainer.appendChild(newSection);
    const recipeImage = newSection.querySelector(".image")
    recipeImage.addEventListener("click", seeRecipe);
  });
}

function searchForRecipes(event) {
  event.preventDefault()
  const inputValue = inputBar.value;
  const filteredElements = recipeRepository.filterByName(inputValue);
  viewAllRecipes(filteredElements);
}

//other functions go here

function seeRecipe(event) {
  const visibleRecipe = recipeRepository.newRecipes.find((recipe) => {
    return parseInt(event.target.id) === recipe.id;
  });
  renderRecipe(visibleRecipe);
}

function renderRecipe(recipe) {
  addHidden(allRecipesPage);
  removeHidden(currentRecipePage);
  addHidden(savedRecipePage);
  addHidden(homePage)
  currentRecipeContainer.innerHTML = ""
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
  const saveRecipeButton = newSection.querySelector(".save-recipe-button")
  saveRecipeButton.addEventListener("click", addToSavedRecipe);
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

function addToSavedRecipe(event) {
  const newSavedRecipe = recipeRepository.newRecipes.find((recipe) => {
    return parseInt(event.target.id) === recipe.id;
  });
  const existingData = newUserList.recipesToCook.find((recipe) => {
    return newSavedRecipe.id === recipe.id
  })
  if(!existingData){
    newUserList.recipesToCook.push(newSavedRecipe)
  }
  console.log(newUserList.recipesToCook);
  savedRecipes()
}

function savedRecipes() {
  addHidden(currentRecipePage)
  removeHidden(savedRecipePage)
  savedRecipeContainer.innerHTML = ""
  newUserList.recipesToCook.forEach((recipe) => {
    const newSection = document.createElement("section");
    newSection.className = "recipe-card-container";
    newSection.innerHTML = `
        <img class="image" id="${recipe.id}" src="${recipe.image}">
        <p class="recipe-name"> ${recipe.name} </p>`;
        

    savedRecipeContainer.appendChild(newSection);
    const recipeImage = newSection.querySelector(".image");
    recipeImage.addEventListener("click", seeRecipe);
  }); 
}

function searchMyRecipes(event) {
  event.preventDefault()
  const inputValue = inputBar.value;
  const filteredElements = newUserList.filterByName(inputValue);
  viewAllRecipes(filteredElements);
}

function returnHome() {
  addHidden(allRecipesPage)
  addHidden(currentRecipePage)
  addHidden(savedRecipePage)
  removeHidden(homePage)
}

function viewMyRecipes() {
  addHidden(allRecipesPage)
  addHidden(currentRecipePage)
  addHidden(homePage)
  removeHidden(savedRecipePage)
}

function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}
