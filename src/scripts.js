// const recipes = require("../recipes");

const favoritesButton = document.querySelector("#favorites");
const homeRecipes = document.querySelector(".home-recipes");
const favoriteRecipes = document.querySelector("#favorite-recipes-main");
const addButton = document.querySelector("#add-button");
const recipeForm = document.querySelector("#recipe-form");
const homeButton = document.querySelector("#home-button");
// const recipeTitle = document.querySelector(".recipe-title");


addRecipeCards();

homeRecipes.addEventListener("click", displayRecipe);
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
  for (var i=0; i < recipeData.length; i ++) {
  let recipe = new Recipe(recipeData[i]);
  recipe.addCards();
  }
}

function displayRecipe() {
  console.log(event);
  if(event.target.classList.contains("recipe-title")){
    console.log(event.target.parentElement.id);
  }else{
    console.log("False");
  }
  // console.log("Hello");
}
