import { recipesToCook, filterByTag, filterByName, determineIngredientNames, calculateCost, returnInstructions } from './recipe.js';

// Global Variables
const user = document.querySelector('.user');
const userInput = document.querySelector('#search-bar');
const homeButton = document.querySelector('.home-button');
const favoriteButton = document.querySelector('.favorite-button');  
const searchButton = document.querySelector('.submit-button');
const mainPanel = document.querySelector('.main-panel');
const tagsPanel = document.querySelector('.tags-panel');
const tags = document.querySelectorAll('.tag');
let recipeInfo;
let page = {mode: 'home'};

// Event Handlers
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const loadUsers = userData => user.innerText = userData[getRandomIndex(userData)].name;

const loadTags = recipes => {
  let allTags = recipes.reduce((total, recipe) => [...total, ...recipe.tags], [])
  allTags = allTags.filter((tag, i) => allTags.indexOf(tag) === i);
  allTags.forEach(tag => tagsPanel.innerHTML += `<button class="tag" id="${tag}">${tag.toUpperCase()}</button>`);
}

const toggleMode = mode => {  
  page.mode = mode;
  if (page.mode === 'home') {
    userInput.placeholder = 'Search Recipes';
    searchButton.innerText = 'Search Recipes';
  } else {
    userInput.placeholder = 'Search Favorites';
    searchButton.innerText = 'Search Favorites';
  };
};

const viewRecipe = recipe => {
  mainPanel.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name' id="${recipe.id}">${recipe.name}</h3>
    <img class='heart' id='unsaved-${recipe.id}' src='./images/black-heart.png' alt='unsave ${recipe.name}'>
    <img class='heart hidden' id='saved-${recipe.id}' src='./images/red-heart.png' alt='save ${recipe.name}'>
  </section>
  `;
};

const viewAllRecipes = recipes => {
  mainPanel.innerHTML = '';
  recipes.forEach(recipe => viewRecipe(recipe));
};

const viewRecipeInfo = (recipes, ingredients, e) => {
  if (e.target.classList.contains('box')) {
    let selectedRecipe = recipes.find(recipe => recipe.id === Number(e.target.id));
    mainPanel.innerHTML = `
    <div class="recipeInfo">
      <button class='info-button'> Close </button>
      <h2 class='recipe-names'> ${selectedRecipe.name}</h2>
      <img class='recipe-img' id='${selectedRecipe.id}' src='${selectedRecipe.image}' alt='${selectedRecipe.name}'>
      <p class='ingredients'>${determineIngredientNames(recipes, ingredients, selectedRecipe.name).join(' -- ')}</p>
      <p class='instructions'>${organizeInstructions(returnInstructions(selectedRecipe))}</p>
      <p class='cost'>Total cost: $${calculateCost(selectedRecipe, ingredients)}</p>
    </div>
    `;
  };
  recipeInfo = document.querySelector('.recipeInfo');
};

const organizeInstructions = instructs => {
  instructs = instructs.reduce((string, instruction) => `${string}` + `${instruction.number}) ${instruction.instruction}`, '');
  return instructs.split('.)').join('.').split(' (').join(' ').split(')').join('.').split('..').join('.').split('.,').join(',').split('.').join('. <br>');
};

const exitPopUp = recipes => {
  recipeInfo = null;
  viewAllRecipes(recipes);
  loadHearts(recipesToCook);
};

const filterRecipeByTag = (e, recipes) => {
  page.mode === 'home' ? recipes : recipes = recipesToCook;
  let filteredRecipes = filterByTag(e.target.id, recipes);
  if (filteredRecipes.length) {
    viewAllRecipes(filteredRecipes);
    loadHearts(filteredRecipes);
  } else {
    mainPanel.innerHTML = `<p id='try-again-message'>No recipes found, please try again !</p>`
  }
};

const searchRecipe = recipes => {
  mainPanel.innerHTML = '';
  page.mode === 'home' ? recipes : recipes = recipesToCook;
  let name = userInput.value.toLowerCase();
  let filteredRecipes = filterByName(name, recipes);
  if (filteredRecipes.length) {
    viewAllRecipes(filteredRecipes);
    loadHearts(filteredRecipes);
  } else {
    mainPanel.innerHTML = `<p id='try-again-message'>No recipes found, please try again !</p>`
  }
};


const displaySearchError = () => {
  if(!userInput.value) {
    userInput.placeholder = 'Please Fill Out This Field'
    mainPanel.innerHTML = `<p id='try-again-message'>No recipes found, please try again !</p>`
  } 
};

const toggleButtons = () => {
  homeButton.classList.toggle('hidden');
  favoriteButton.classList.toggle('hidden');
};

const toggleHearts = (e, recipes) => {
  recipes.forEach(recipe => {
    if (Number(e.target.parentNode.id) === recipe.id && !e.target.classList.contains('info-button')) {
      document.getElementById(`unsaved-${recipe.id}`).classList.toggle('hidden');
      document.getElementById(`saved-${recipe.id}`).classList.toggle('hidden');
    };
  });
};

const loadHearts = recipes => {
  let savedIDs = recipesToCook.map(recipe => recipe.id);
  recipes.forEach(recipe => {
    if (savedIDs.some(id => id === recipe.id)) {
      document.getElementById(`unsaved-${recipe.id}`).classList.add('hidden');
      document.getElementById(`saved-${recipe.id}`).classList.remove('hidden');
    } else {
      document.getElementById(`unsaved-${recipe.id}`).classList.remove('hidden');
      document.getElementById(`saved-${recipe.id}`).classList.add('hidden');
    };
  });
};

const viewHome = () => {
  toggleMode('home');
  toggleButtons();
};

const viewSaved = () => {
  toggleMode('favorite');
  toggleButtons();
};

export {
  user,
  userInput,
  homeButton,
  favoriteButton,
  searchButton,
  mainPanel,
  tagsPanel,
  tags,
  recipeInfo,
  getRandomIndex,
  loadUsers,
  loadTags,
  toggleMode,
  viewRecipe,
  viewAllRecipes,
  viewRecipeInfo,
  exitPopUp,
  filterRecipeByTag,
  searchRecipe, 
  displaySearchError,
  toggleButtons,
  toggleHearts,
  loadHearts,
  viewHome,
  viewSaved
};

