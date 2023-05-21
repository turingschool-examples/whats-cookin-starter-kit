import { determineIngredientNames, calculateCost, returnInstructions, filterByTag, recipesToCook, filterByName } from './recipe.js';

// Global Variables
const user = document.querySelector('.user')
const userInput = document.querySelector('#search-bar');
const searchButton = document.querySelector('.submit-button');
const favoriteButton = document.querySelector('.favorite-button');  
const filterText = document.querySelector('h2');
const tagsPanel = document.querySelector('.tags-panel');
const tags = document.querySelectorAll('.tag');
const mainPanel = document.querySelector('.main-panel');
const homeButton = document.querySelector('.home-button');
let recipeInfo;
let page = {mode: 'home'};

// Event Handlers
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const loadUsers = userData => user.innerText = userData[getRandomIndex(userData)].name;

const loadTags = recipes => {
    tagsPanel.innerHTML = '<h2>Filter Recipes</h2>';
    let allTags = recipes.reduce((total, recipe) => [...total, ...recipe.tags], []);
    let tagReduced = []
    allTags.forEach(tag => {
      if (tagReduced.includes(tag)) {
      } else {
        tagReduced.push(tag)
      }
      return tagReduced
    });
    console.log(tagReduced)
    tagReduced.forEach(tag => tagsPanel.innerHTML += `<button class="tag" id="${tag}">${tag.toUpperCase()}</button>`);
  };

const toggleMode = mode => {  
  page.mode = mode;
  if (page.mode === 'home') {
    userInput.placeholder = 'Search Recipes';
    searchButton.innerText = 'Search Recipes';
    filterText.innerText = 'Filter Recipes';
  } else {
    userInput.placeholder = 'Search Favorites';
    searchButton.innerText = 'Search Favorites';
    filterText.innerText = 'Filter Favorites';
  };
};

const viewRecipe = recipe => {
  mainPanel.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name' id="${recipe.id}">${recipe.name}</h3>
    <img class='heart' id='unsaved-${recipe.id}' src='./images/bh.png' alt='unsave ${recipe.name}'>
    <img class='heart hidden' id='saved-${recipe.id}' src='./images/rh.png' alt='save ${recipe.name}'>
  </section>
  `;
};

const viewAllRecipes = recipes => {
  mainPanel.innerHTML = '';
  recipes.forEach(recipe => viewRecipe(recipe));
};

const organizeInstructions = instructs => {
  instructs = instructs.reduce((string, instruction) => `${string}` + `${instruction.number}) ${instruction.instruction}`, '');
  return instructs.split('.').map(x => x + '.').join('<br>').slice(0, instructs.length);
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
  // console.log(recipeInfo)
  // return recipeInfo
};

const exitPopUp = recipes => {
  recipeInfo = null;
  viewAllRecipes(recipes);
  loadHearts(recipesToCook);
};

const filterRecipeByTag = (e, r) => {
  page.mode === 'home' ? r : r = recipesToCook;
  let filteredRecipes = filterByTag(e.target.id, r);
  viewAllRecipes(filteredRecipes);
  loadHearts(filteredRecipes);
};

const searchRecipe = recipes => {
  mainPanel.innerHTML = '';
  page.mode === 'home' ? recipes : recipes = recipesToCook;
  let name = userInput.value.toLowerCase();
  let filteredRecipes = filterByName(name, recipes);
  viewAllRecipes(filteredRecipes);
  loadHearts(filteredRecipes);
};

const displaySearchError = () => {
  if(!userInput.value) {
    alert('Please provide a valid input.')
  };
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

const loadHearts = (recipes) => {
  let savedIDs = recipesToCook.map(saved => saved.id);
  recipes.forEach(recipe => {
    if (savedIDs.some(saved => saved === recipe.id)) {
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
  searchButton,
  favoriteButton,
  filterText,
  tagsPanel,
  tags,
  mainPanel,
  homeButton,
  getRandomIndex,
  toggleMode,
  viewRecipe,
  viewAllRecipes,
  viewRecipeInfo,
  exitPopUp,
  filterRecipeByTag,
  searchRecipe, 
  loadUsers,
  loadTags,
  toggleButtons,
  toggleHearts,
  loadHearts,
  viewHome,
  viewSaved,
  displaySearchError,
  recipeInfo
};

