var favorites = document.querySelector("#favorites");
var homeRecipes = document.querySelector(".home-recipes");
var favoriteRecipes = document.querySelector("#favorite-recipes-main");
var addButton = document.querySelector("#add-button");

favorites.addEventListener("click", displayFavorites);
addButton.addEventListener("click", displayRecipeForm);

function displayFavorites() {
  event.preventDefault();
  homeRecipes.classList.add("hidden");
  favoriteRecipes.classList.remove("hidden");
}

function displayRecipeForm() {
  favoriteRecipes.classList.add("hidden");

}
