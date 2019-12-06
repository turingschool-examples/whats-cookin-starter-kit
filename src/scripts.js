var favorites = document.querySelector("#favorites");
var homeRecipes = document.querySelector(".home-recipes");

favorites.addEventListener("click", displayFavorites);

function displayFavorites() {
  console.log("Hello");
  event.preventDefault();
  homeRecipes.classList.add("hidden");
}
