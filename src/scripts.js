// const recipes = require("../recipes");

const favoritesButton = document.querySelector("#favorites");
const homeRecipes = document.querySelector(".home-recipes");
const favoriteRecipes = document.querySelector("#favorite-recipes-main");
const addButton = document.querySelector("#add-button");
const recipeForm = document.querySelector("#recipe-form");
const homeButton = document.querySelector("#home-button");
const onTheMenu = document.querySelector('#on-menu');
const groceryList = document.querySelector("#grocery-list");
const user = new User(users[0]);

addRecipeCards();

homeRecipes.addEventListener("click", displayRecipe);
favoritesButton.addEventListener("click", runDisplayFavorites);
onTheMenu.addEventListener("click", runDisplayToCook);
addButton.addEventListener("click", displayRecipeForm);
homeButton.addEventListener("click", displayHomePage);
groceryList.addEventListener("click", runCheckPantry);

function runCheckPantry() {
  const pantry = new Pantry(users[0].pantry)
  // pantry.checkPantry();
}

function runDisplayFavorites() {
  homeRecipes.innerHTML = '';
  user.displayFavorites();
}

function runDisplayToCook() {
  homeRecipes.innerHTML = '';
  user.displayToCook();
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

function runAddToCook() {
  let selectedRecipe = recipeData.find(recipe => {
    if (recipe.id === parseInt(event.target.parentElement.id)) {
      return recipe;
    }
  })
  user.addToCook(selectedRecipe);
}
function runRemoveToCook() {
  let selectedRecipe = recipeData.find(recipe => {
    if (recipe.id === parseInt(event.target.parentElement.id)) {
      return recipe;
    }
  })
  user.removeFromToCook(selectedRecipe);
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
  } else if (event.target.classList.contains('cook-star')) {
    runAddToCook();
  } else if (event.target.classList.contains('un-cook-star')) {
    runRemoveToCook();
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
