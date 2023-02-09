import "./styles.css";
import apiCalls from "./apiCalls";
import "./images/turing-logo.png";
import RecipeRepository from "../src/classes/RecipeRepository";
import testRecipeData from "../src/data/testRecipes";
import Recipe from "../src/classes/Recipe";
import User from "../src/classes/User";
import usersData from "./data/users";

// Query Selectors

const recipeContainer = document.querySelector(".recipe-container");
const filterTags = document.querySelector(".filter-tags");
const searchRecipeInput = document.querySelector(".search-recipe");
const searchBtn = document.querySelector(".search-btn");

// Global Variables

let recipes = testRecipeData.map((recipe) => {
  return new Recipe(recipe);
});
let recipeRepo = new RecipeRepository(recipes);

let randomUser;

// Event Listeners

window.addEventListener("load", () => {
  displayRecipes();
  setUser(usersData);
});

recipeContainer.addEventListener("click", (e) => {
  selectRecipe(e);
});

filterTags.addEventListener("click", (e) => {
  filterByTag(e);
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  filterByName();
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
              <button class="favorite-button">favorite</button>
            </div>
    `;
  });
}

function showFull(e) {
  let target = e.target.parentElement.id;
  recipeContainer.innerHTML = "";
  recipeRepo.recipes
    .filter((recipe) => {
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
}

function filterByTag(e) {
  let target = e.target.className;
  recipeContainer.innerHTML = "";
  recipeRepo.filterTag(target).forEach((recipe) => {
    recipeContainer.innerHTML += `
      <div id="${recipe.id}" class="recipe-card">
        <img class="recipe-img"
          src="${recipe.image}"/>
          <p class="recipe-name">${recipe.name}</p>
      </div>
    `;
  });
}

function filterByName() {
  let input = searchRecipeInput.value;
  recipeContainer.innerHTML = "";
  recipeRepo.filterName(input).forEach((recipe) => {
    recipeContainer.innerHTML += `
      <div id="${recipe.id}" class="recipe-card">
        <img class="recipe-img"
          src="${recipe.image}"/>
          <p class="recipe-name">${recipe.name}</p>
      </div>
    `;
  });
}

function setUser(arr) {
  let randomUserIndex = arr[Math.floor(Math.random() * arr.length)];
  randomUser = new User(randomUserIndex);
}

function saveRecipe(e) {
  let target = e.target.parentElement.id;
  let locateRecipe = recipeRepo.recipes.find((recipe) => {
    return recipe.id === Number(target);
  });

  randomUser.recipesToCook(locateRecipe);
}

function selectRecipe(e) {
  if (e.target.className === "favorite-button") {
    saveRecipe(e);
  } else {
    showFull(e);
  }
}
