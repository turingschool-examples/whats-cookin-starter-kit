import "./styles.css";
import apiCalls from "./apiCalls";
import "./images/turing-logo.png";
import RecipeRepository from "../src/classes/RecipeRepository";
import Recipe from "../src/classes/Recipe";
import User from "../src/classes/User";
import fetchPromises from "./apiCalls";
import MicroModal from "micromodal";

// Query Selectors

const recipeContainer = document.querySelector(".recipe-container");
const filterTags = document.querySelector(".filter-tags");
const searchRecipeInput = document.querySelector(".search-recipe");
const searchBtn = document.querySelector(".search-btn");
const modalTitle = document.querySelector(".modal-title");
const modalContent = document.querySelector(".modal-content");

// Global Variables
let allUsers;
let allRecipes;
let allIngredients;
let recipeRepo;
let randomUser;

// Event Listeners

window.addEventListener("load", () => {
  resolvePromises();
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

function resolvePromises() {
  fetchPromises()
    .then((data) => {
      allUsers = data[0].usersData.map((user) => new User(user));
      allIngredients = data[1].ingredientsData.map((ingredient) => ingredient);
      allRecipes = data[2].recipeData.map((recipe) => new Recipe(recipe));
    })
    .then(() => {
      recipeRepo = new RecipeRepository(allRecipes);
      displayRecipes();
      setUser(allUsers);
    });
}

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
  MicroModal.show("modal-1");
  let targetedRecipe = recipeRepo.recipes.find((recipe) => {
    return recipe.id === Number(target);
  });
  modalTitle.innerText = `${targetedRecipe.name}`;
  modalContent.innerHTML = `
  <img src="${targetedRecipe.image}"
  <p>${targetedRecipe.getIngredients(allIngredients)}</p>
  <p>$${targetedRecipe.getIngredientsCost(allIngredients)}</p>
  <p>${targetedRecipe.getInstructions()}</p>`;
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
  } else if (e.target.className === "recipe-img" || e.target.className === "recipe-name") {
    showFull(e);
  }
}
