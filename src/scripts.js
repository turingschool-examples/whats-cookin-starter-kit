// const recipes = require("../recipes");

const favoritesButton = document.querySelector("#favorites");
const homeRecipes = document.querySelector(".home-recipes");
const favoriteRecipes = document.querySelector("#favorite-recipes-main");
const addButton = document.querySelector("#add-button");
const recipeForm = document.querySelector("#recipe-form");
const homeButton = document.querySelector("#home-button");
const user = new User(users[4]);

addRecipeCards();

homeRecipes.addEventListener("click", displayRecipe);
favoritesButton.addEventListener("click", runDisplayFavorites);
addButton.addEventListener("click", displayRecipeForm);
homeButton.addEventListener("click", displayHomePage);

function runDisplayFavorites() {
  homeRecipes.innerHTML = '';
  user.displayFavorites();
}

function displayRecipeForm() {
  favoriteRecipes.classList.add("hidden");
  recipeForm.classList.remove("hidden");
}

// function displayHomePage() {
//   recipeForm.classList.add("hidden");
//   favoriteRecipes.classList.add("hidden");
//   homeRecipes.classList.remove("hidden");
// }

function displayHomePage() {
  homeRecipes.innerHTML = '';
  addRecipeCards();
}

// function displayRecipePage() {
//   recipeForm.classList.add("hidden");
//   favoriteRecipes.classList.add("hidden");
//   homeRecipes.classList.add("hidden");
// }

function addRecipeCards() {
  for (var i = 0; i < recipeData.length; i++) {
    let recipe = new Recipe(recipeData[i]);
    recipe.addCards();
  }
}

function runAddToFavs() {
  let selectedRecipe = recipeData.find(recipe => {
    if (recipe.id === parseInt(event.target.parentElement.id)) {
      return recipe;
    }
  })
  user.addToFavorites(selectedRecipe);
}

function runRemoveFromFavs() {
  let selectedRecipe = recipeData.find(recipe => {
    if (recipe.id === parseInt(event.target.parentElement.id)) {
      return recipe;
    }
  })
  user.removeFromFavorites(selectedRecipe);
}

function displayRecipe() {
  if (event.target.classList.contains("recipe-title")) {
    let clickedID = event.target.parentElement.id;
    runExpandedMethod(clickedID);
    // beginning of Favoriting Logic
  } else if (event.target.classList.contains('fav-star')) {
    runAddToFavs();
  } else if (event.target.classList.contains('un-fav-star')) {
    runRemoveFromFavs();
  }
}

function runExpandedMethod(id) {
  for (var i = 0; i < recipeData.length; i++) {
    if (recipeData[i].id === parseInt(id)) {
      let recipe = new Recipe(recipeData[i])
      recipe.showExpandedRecipe();
    }
  }
}
