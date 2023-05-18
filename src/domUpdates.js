import { recipeTestData, ingredientTestData, userTestData } from './data/testData.js';
import { determineIngredientNames, calculateCost, returnInstructions } from './recipe.js';

// Global Variables
const user = document.querySelector('.user')
const userInput = document.querySelector('#search-bar');
const searchButton = document.querySelector('.submit-button');
const favoriteButton = document.querySelector('.favorite-button');  
const tags = document.querySelectorAll('.tag');
const mainPanel = document.querySelector('.main-panel');
let page = {mode: 'home'};

// Event Handlers
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const displayRandomUser = () => user.innerText = userTestData[getRandomIndex(userTestData)].name;

const toggleMode = e => page.mode = e.target.id;

const viewRecipe = recipe => {
  mainPanel.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `;
}
const viewAllRecipes = recipes => {
  mainPanel.innerHTML = '';
  page.mode === 'home' ? recipes = recipeTestData : recipes = recipesToCook;
  recipes.forEach(recipe => viewRecipe(recipe));
}

const viewRecipeInfo = e => {
  if (e.target.classList.contains('box')) {
    let selectedRecipe = recipeTestData.find(recipe => recipe.id === Number(e.target.id));
    mainPanel.innerHTML = `
    <div class="test">
      <h2 class='recipe-name'> ${selectedRecipe.name}</h2>
      <img class='recipe-img' id='${selectedRecipe.id}' src='${selectedRecipe.image}' alt='${selectedRecipe.name}'>
      <p class='ingredients'>${determineIngredientNames(recipeTestData, ingredientTestData, selectedRecipe.name).join(' -- ')}</p>
      <p class='instructions'>${returnInstructions(selectedRecipe)}</p>
      <p class='cost'>Total cost: $${calculateCost(selectedRecipe)}</p>
    </div>
    `;
  }
}

const filterRecipeByTag = (e, recipes) => {
  mainPanel.innerHTML = '';
  page.mode === 'home' ? recipes = recipeTestData : recipes = recipesToCook;
  recipes.forEach(recipe => {
    if (recipe.tags.includes(e.target.id)) {
      viewRecipe(recipe);
    }
  });
}

const searchRecipe = recipes => {
  mainPanel.innerHTML = '';
  page.mode === 'home' ? recipes = recipeTestData : recipes = recipesToCook;
  recipes.forEach(recipe => {
    if (recipe.name.toLowerCase().includes(userInput.value.toLowerCase())) {
      mainPanel.innerHTML = `
      <section class='recipe-container box' id='${recipe.id}'>
        <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
        <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
      </section>
      `;
    }
  });
  if (!input) {
    mainPanel.innerHTML = '';
    viewAllRecipes();
  }
}

export {
  user,
  userInput,
  searchButton,
  favoriteButton,
  tags,
  mainPanel,
  getRandomIndex,
  displayRandomUser,
  toggleMode,
  viewRecipe,
  viewAllRecipes,
  viewRecipeInfo,
  filterRecipeByTag,
  searchRecipe
}