// Import the recipe.js functions
import {
  filterRecipesByTag,
  filterRecipesByName,
  getIngredientNames,
  calculateRecipeCost,
  getRecipeDirections,
} from "../src/recipes";

// DOM manipulation functions
function updateFilteredResults(recipes, ingredientsData) {
  const searchInput = document.querySelector(".search-bar input");
  const tags = Array.from(document.querySelectorAll(".tags a")).map(
    (tag) => tag.innerText
  );

  const filteredRecipes = filterRecipesByName(recipes, searchInput.value);
  const filteredRecipesByTags = filterRecipesByTag(filteredRecipes, tags);

  updateResultsContainer(filteredRecipesByTags, ingredientsData);
}

function updateResultsContainer(recipes, ingredientsData) {
  const resultsContainer = document.querySelector(".results-container");

  resultsContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeCard = createRecipeCard(recipe, ingredientsData);
    resultsContainer.appendChild(recipeCard);
  });
}

function createRecipeCard(recipe, ingredientsData) {
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("recipe-card");

  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = "Recipe Image";
  recipeCard.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = recipe.name;
  recipeCard.appendChild(title);

  const blurb = document.createElement("p");
  // blurb.textContent = 'A blurb of the recipe.'; // You can replace this with actual recipe information
  recipeCard.appendChild(blurb);

  const viewRecipeLink = document.createElement("a");
  // viewRecipeLink.href = '#'; // Replace with the actual link to the recipe page
  viewRecipeLink.classList.add("view-recipe");
  viewRecipeLink.textContent = "View Recipe";
  recipeCard.appendChild(viewRecipeLink);

  return recipeCard;
}

document.querySelector(".search-bar input").addEventListener("input", () => {
  updateFilteredResults(recipeData, ingredientsData);
});

document.querySelectorAll(".tags a").forEach((tag) => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("selected");
    updateFilteredResults(recipeData, ingredientsData);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", search);
});

function search() {
  const searchInput = document.getElementById("searchInput").value;
  filterRecipesByName(searchInput);
  displayResults(searchInput);
}
