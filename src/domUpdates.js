//NOTE: Your DOM manipulation will occur in this file
import recipeData from "./data/recipes";
import { recipesfromName, recipesFromTag, findRecipe, findIngredientNames, calculateRecipeCost, recipeInstructions, shuffleData } from "../src/recipeUtils";
import ingredientsData from "./data/ingredients";
import usersData from "./data/users"
import { recipesToCook, saveRecipe, deleteRecipe, addSavedRecipesToUser } from "../src/userUtils";

var currentUser;

// Query Selectors:
const allRecipesButton = document.querySelector('.all-recipes');
const frontRecipeDisplay = document.querySelector('.front-recipe-display');
const allRecipeDisplay = document.querySelector('.all-recipes-display');
const allFilterDisplay = document.querySelector('.all-filters');
const checkCategories = document.getElementsByName('checkbox');
const searchInput = document.getElementById('search-bar');
const recipeTitle = document.querySelector('h2');
const singleRecipeDisplay = document.querySelector('.single-recipe-display');
const homeButton = document.querySelector('.title')
const saveRecipeButton = document.querySelector('.save-recipe-button')
const savedRecipesButton = document.querySelector('.saved-recipes')
const savedRecipeDisplay = document.querySelector('.saved-recipe-display')

//Event Listeners
allRecipesButton.addEventListener('click', event => {
  showRecipes(event);
  addHiddenClass([saveRecipeButton, savedRecipeDisplay])

});

savedRecipesButton.addEventListener('click', event => {
  console.log(recipesToCook)
  addHiddenClass([allRecipeDisplay, singleRecipeDisplay, saveRecipeButton, frontRecipeDisplay]);
  removeHiddenClass([savedRecipeDisplay]);
  showSavedRecipes(currentUser, recipesToCook);
})


saveRecipeButton.addEventListener('click', event => {
  if (event.target.classList.contains('save-recipe-btn')) {
    const recipeName = recipeTitle.innerText;
    addSavedRecipesToUser(currentUser, recipesToCook);
    saveRecipe(recipeData, recipeName);
  }
});

allFilterDisplay.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkbox')) {
    renderFilteredRecipes(event)
  }
});

searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    showSearchResults();
  }
});

allRecipeDisplay.addEventListener('click', function (event) {
  if (event.target.classList.contains('recipe')) {
  addHiddenClass([allRecipeDisplay]);
  removeHiddenClass([singleRecipeDisplay, saveRecipeButton]);
  viewSelectedRecipe(event);
  }
});

frontRecipeDisplay.addEventListener('click', function (event) {
  if (event.target.classList.contains('recipe')) {
  addHiddenClass([allRecipeDisplay, frontRecipeDisplay]);
  removeHiddenClass([singleRecipeDisplay]);
  viewSelectedRecipe(event);
  }
});

savedRecipeDisplay.addEventListener('click', event => {
  if (event.target.classList.contains('recipe')) {
    addHiddenClass([savedRecipeDisplay]);
    removeHiddenClass([singleRecipeDisplay]);
    viewSelectedRecipe(event);
  }
});


homeButton.addEventListener('click', function () {
  showHomePage()
  randomizeHomePage()
})

window.addEventListener('load', () => {
  randomizeHomePage();
  generateRandomUser(usersData);
})

//Event Handlers/Functions

const generateRandomUser = users => {
  currentUser = users[Math.floor(Math.random() * users.length)];
  return currentUser
}

function showSearchResults() {
  let searchValue = searchInput.value
  removeHiddenClass([allRecipeDisplay, allFilterDisplay])
  addHiddenClass([frontRecipeDisplay]);
    allRecipeDisplay.innerHTML = ''
    recipesfromName(recipeData, searchValue).forEach(recipe => allRecipeDisplay.innerHTML += `<div class = "recipe-wrapper">
    <img id="${recipe.name}" src="${recipe.image}" class="recipe">
    <div class = "recipe-info">
      <p>${recipe.name}</p>
    </div>`)
};

function showHomePage() {
  addHiddenClass([allRecipeDisplay], [allFilterDisplay]);
  removeHiddenClass([frontRecipeDisplay]);
}

const showSavedRecipes = (currentUser, recipesToCook) => {
  if (recipesToCook.length === 0) {
    savedRecipeDisplay.innerHTML = `
    <div class="no-saved-recipes-message">
      <p> Hi, ${currentUser.name}! You currently have no saved recipes.</p>
    </div>`;
  } else {
    savedRecipeDisplay.innerHTML = '';
    recipesToCook.forEach(recipe => savedRecipeDisplay.innerHTML += `
    <div class="recipe-wrapper">
      <img id="${recipe.name}" src="${recipe.image}" class="recipe" alt="${recipe.name}"
      <div class="recipe-info">
        <p>${recipe.name}</p>
       </div>
    </div>`);
    console.log('savedRecipeDisplay:', savedRecipeDisplay)
  }
};

function randomizeHomePage() {
  shuffleData(recipeData)
  frontRecipeDisplay.innerHTML = '';
  for (let i = 0; i < recipeData.length; i++) {
    frontRecipeDisplay.innerHTML = `
      <div class = "recipe-wrapper">
        <img id="${recipeData[0].name}" src="${recipeData[0].image}" class="recipe">
        <div class = "recipe-info">
          <p>${recipeData[0].name}</p>
        </div>
        </div>
      <div class = "recipe-wrapper">
        <img id="${recipeData[1].name}" src="${recipeData[1].image}"  class="recipe">
        <div class = "recipe-info">
          <p>${recipeData[1].name}</p>
        </div>
      </div>
      <div class = "recipe-wrapper">
        <img id="${recipeData[2].name}" src="${recipeData[2].image}"  class="recipe">
        <div class = "recipe-info">
          <p>${recipeData[2].name}</p>
        </div>`
  }
}

function renderFilteredRecipes() {
  const tags = Array.from(checkCategories).filter((category) => category.checked).map(c => c.id)
  if (tags.length === 0) {
    showRecipes()
    return
  }
    let filtered = recipesFromTag(recipeData, tags);
    console.log(recipeData)
  allRecipeDisplay.innerHTML = '';
  filtered.forEach(recipe => allRecipeDisplay.innerHTML += `<div class = "recipe-wrapper">
      <img id="${recipe.name}" src="${recipe.image}" class="recipe">
      <div class = "recipe-info">
        <p>${recipe.name}</p>
        <p>Total Cost: $..</p
      </div>`)
};

const viewSelectedRecipe = event => {
  const recipeName = event.target.id;
  console.log('event.target.id:', event.target.id)
  const selectedRecipe = findRecipe(recipeData, recipeName);
  const recipeCost = calculateRecipeCost(selectedRecipe, ingredientsData);
  const ingredients = findIngredientNames(recipeData, recipeName);
  const instructions = recipeInstructions(selectedRecipe);
  addHiddenClass([allFilterDisplay]);
  singleRecipeDisplay.innerHTML= '';
  singleRecipeDisplay.innerHTML += `
  <h2>${selectedRecipe.name}</h2>
  <img id="${selectedRecipe.id}" src="${selectedRecipe.image}" class="recipe" alt='${selectedRecipe.name}'>
  <p class="total-cost-box">This recipe costs a total of: $${recipeCost} to make!</p>
  <p class="ingredient-box">The ingredients you will need to make this recipe are: <br> ${ingredients}</p>
  <p class="instruction-box">Instructions: <br> ${instructions}</p>`;
  recipeTitle.innerText = `${selectedRecipe.name}`;
}

function showRecipes() {
  removeHiddenClass([allRecipeDisplay, allFilterDisplay]);
  addHiddenClass([frontRecipeDisplay, singleRecipeDisplay]);
  allRecipeDisplay.innerHTML = ''
  recipeData.forEach(recipe => allRecipeDisplay.innerHTML += `
  <div class = "recipe-wrapper">
    <img id="${recipe.name}" src="${recipe.image}" class="recipe">
  <div class = "recipe-info">
    <p>${recipe.name}</p>
  </div>`);
};

function removeHiddenClass(elements) {
  return elements.forEach(element => element.classList.remove('hidden'));
};

function addHiddenClass(elements) {
  return elements.forEach(element => element.classList.add('hidden'));
};

export {
  showRecipes,
  removeHiddenClass,
  addHiddenClass,
  showHomePage,
  randomizeHomePage
}