var favorites = document.querySelector("#favorites");
var homeRecipes = document.querySelector(".home-recipes");
var favoriteRecipes = document.querySelector("#favorite-recipes-main");

favorites.addEventListener("click", displayFavorites);

function displayFavorites() {
  event.preventDefault();
  homeRecipes.classList.add("hidden");
  favoriteRecipes.classList.remove("hidden");
}
