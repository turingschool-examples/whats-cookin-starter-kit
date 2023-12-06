// Import the recipe.js functions
import {
  filterRecipesByTag,
  filterRecipesByName,
  getIngredientNames,
  calculateRecipeCost,
  getRecipeDirections,
} from "../src/recipes";

import recipeData from "./data/recipes";
import ingredientsData from "./data/ingredients";

// DOM manipulation functions
function showAllRecipes(recipes) {
  const resultsContainer = document.querySelector(".results-container");
  const recipePage = document.getElementById("recipe-page");

  recipes.forEach((recipe, index) => {
    const recipeCard = createRecipeCard(recipe);
    resultsContainer.appendChild(recipeCard);
  });
}

function showRecipePage(recipe) {
  const recipePage = document.getElementById("recipe-page");
  recipePage.innerHTML = `
    <h1>${recipe.title}</h1>
    <img src="${recipe.image}" alt="${recipe.title}">
    <!-- Add other details about the recipe -->
  `;
}

// function updateFilteredResults(recipes) {
//   const searchInput = document.querySelector(".search-bar input");
//   const tags = Array.from(document.querySelectorAll(".tags a"))
//     .filter((tag) => tag.classList.contains("selected"))
//     .map((tag) => tag.innerText);

//   const filteredRecipes = filterRecipesByName(recipes, searchInput.value);
// }

// function updateResultsContainer(recipes) {
//   const resultsContainer = document.querySelector(".results-container");
//   resultsContainer.innerHTML = "";

//   recipes.forEach((recipe) => {
//     const recipeCard = createRecipeCard(recipe);
//     resultsContainer.appendChild(recipeCard);
//   });
// }

function createRecipeCard(recipe) {
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

  recipeCard.addEventListener("click", () => {
    showRecipePage(recipe);
  });

  return recipeCard;
}

// Event listeners
document.querySelector(".search-bar input").addEventListener("input", () => {
  updateFilteredResults(recipeData);
});

document.querySelectorAll(".tags a").forEach((tag) => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("selected");
    updateFilteredResults(recipeData);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  setupSubmitButtonListener();
});

function setupSubmitButtonListener() {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", search);
}

function search() {
  const searchInput = document.getElementById("searchInput").value;
  filterRecipesByName(searchInput);
  displayResults(searchInput);
}

// Helper Functions
function toggleHiddenClass(className) {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.classList.toggle("hidden");
  }
}

function goBackToMain() {
  toggleHiddenClass("main-container");
  toggleHiddenClass("result-page");
}

export { showAllRecipes };
