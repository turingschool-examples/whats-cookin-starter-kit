// const recipes = require("../recipes");

const favoritesButton = document.querySelector("#favorites");
const homeRecipes = document.querySelector(".home-recipes");
const favoriteRecipes = document.querySelector("#favorite-recipes-main");
const addButton = document.querySelector("#add-button");
const recipeForm = document.querySelector("#recipe-form");
const homeButton = document.querySelector("#home-button");


favoritesButton.addEventListener("click", displayFavorites);
addButton.addEventListener("click", displayRecipeForm);
homeButton.addEventListener("click", displayHomePage);

function displayFavorites() {
  homeRecipes.classList.add("hidden");
  favoriteRecipes.classList.remove("hidden");
  recipeForm.classList.add("hidden");
}

function displayRecipeForm() {
  favoriteRecipes.classList.add("hidden");
  recipeForm.classList.remove("hidden");
}

function displayHomePage() {
  recipeForm.classList.add("hidden");
  favoriteRecipes.classList.add("hidden");
  homeRecipes.classList.remove("hidden");
}

function addRecipeCards() {
  let recipe = new Recipe(recipeData[0]);
  recipe.addCards();
}

addRecipeCards();
