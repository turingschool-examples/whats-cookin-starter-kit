import "./styles.css";
import apiCalls from "./apiCalls";
import "./images/turing-logo.png";
import RecipeRepository from "../src/classes/RecipeRepository";
import testRecipeData from "../src/data/testRecipes";
import Recipe from "../src/classes/Recipe";

// Query Selectors
const recipeContainer = document.querySelector(".recipe-container");

const searchRecipeInput = document.querySelector(".search-recipe");
const breakfastTag = document.querySelector(".breakfast-tag");
const lunchTag = document.querySelector(".lunch-tag");
const dinnerTag = document.querySelector(".dinner-tag");
const dessertTag = document.querySelector(".dessert-tag");

// Global Variables
let recipes = testRecipeData.map((recipe) => {
  return new Recipe(recipe);
});
let recipeRepo = new RecipeRepository(recipes);

// Event Listeners
window.addEventListener("load", () => {
  displayRecipes();
});

recipeContainer.addEventListener("click", (e) => {
  showFull(e);
});

// Functions
function displayRecipes() {
  recipeContainer.innerHTML = "";

  recipeRepo.recipes.forEach((recipe) => {
    recipeContainer.innerHTML += `
    <div id="${recipe.id}" class="recipe-card">
              <img class="recipe-img"
                src="${recipe.image}"
              />
              <p class="recipe-name">${recipe.name}</p>
            </div>
    `;
  });
}

function showFull(e) {
  let target = e.target.parentElement.id;
  recipeContainer.innerHTML = "";
  recipeRepo.recipes
    .filter((recipe) => {
      console.log(recipe.id);
      return recipe.id === Number(target);
    })
    .forEach((recipe) => {
      recipeContainer.innerHTML += `
      <p>${recipe.name}</p>
      <p>${recipe.getIngredients()}</p>
      <p>${recipe.getInstructions()}</p>
      <p>$${recipe.getIngredientsCost()}</p>
    `;
    });
  console.log(target);
}

// function searchRecipe() {}
// function filterRecipe() {}
