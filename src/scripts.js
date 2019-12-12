const addButton = document.querySelector("#add-button");
const favoriteRecipes = document.querySelector("#favorite-recipes-main");
const favoritesButton = document.querySelector("#favorites");
const groceryList = document.querySelector("#grocery-list");
const homeButton = document.querySelector("#home-button");
const homeRecipes = document.querySelector(".home-recipes");
const onTheMenu = document.querySelector('#on-menu');
const recipeForm = document.querySelector("#recipe-form");
const searchBox = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const user = new User(users[0]);


instantiateRecipes();

addButton.addEventListener("click", displayRecipeForm);
favoritesButton.addEventListener("click", runDisplayFavorites);
groceryList.addEventListener("click", runCheckPantry);
homeButton.addEventListener("click", displayHomePage);
homeRecipes.addEventListener("click", displayRecipe);
onTheMenu.addEventListener("click", runDisplayToCook);
searchButton.addEventListener("click", runSearch);

function runSearch() {
  let searchInput = searchBox.value;
  user.searchRecipes(searchInput);
}

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

function displayHomePage() {
  homeRecipes.innerHTML = '';
  instantiateRecipes();
}

function instantiateRecipes() {
  recipeData.forEach(recipe1 => {
    let recipe = new Recipe(recipe1);
    recipe.addCards();
  })
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
