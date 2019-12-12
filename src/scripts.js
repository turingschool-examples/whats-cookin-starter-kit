const favoritesButton = document.querySelector("#favorites");
const homeRecipes = document.querySelector(".home-recipes");
const favoriteRecipes = document.querySelector("#favorite-recipes-main");
const addButton = document.querySelector("#add-button");
const recipeForm = document.querySelector("#recipe-form");
const homeButton = document.querySelector("#home-button");
const onTheMenu = document.querySelector('#on-menu');
const groceryList = document.querySelector("#grocery-list");
const searchButton = document.querySelector("#search-btn");
const filterBtn = document.querySelector('#filter-btn');
const searchBox = document.querySelector("#search-input");
const user = new User(users[0]);

addRecipeCards();

homeRecipes.addEventListener("click", displayRecipe);
favoritesButton.addEventListener("click", runDisplayFavorites);
onTheMenu.addEventListener("click", runDisplayToCook);
addButton.addEventListener("click", displayRecipeForm);
homeButton.addEventListener("click", displayHomePage);
groceryList.addEventListener("click", runCheckPantry);
searchButton.addEventListener("click", runSearch);
filterBtn.addEventListener('click', getUniqueTags);

function getUniqueTags() {
  let uniqueTags = [];
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.unshift(tag);
      };
    });
  });
  let sortedTags = uniqueTags.sort();
  console.log(sortedTags);
}

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
  addRecipeCards();
}

function addRecipeCards() {
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
