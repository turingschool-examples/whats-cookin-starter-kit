import { determineIngredientNames, calculateCost, returnInstructions, filterByTag } from './recipe.js';

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

const loadUsers = userData => user.innerText = userData[getRandomIndex(userData)].name;

const toggleMode = e => page.mode = e.target.id;

const viewRecipe = recipe => {
  mainPanel.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `;
}

const viewAllRecipes = recipes => {
  mainPanel.innerHTML = '';
  page.mode === 'home' ? recipes : recipes = recipesToCook;
  recipes.forEach(recipe => viewRecipe(recipe));
}

const organizeInstructions = instructs => instructs.split('.').map(x => x + '.').join('<br>').slice(0, instructs.length);

const viewRecipeInfo = (recipes, ingredients, e) => {
  if (e.target.classList.contains('box')) {
    let selectedRecipe = recipes.find(recipe => recipe.id === Number(e.target.id));
    mainPanel.innerHTML = `
    <div class="test">
      <h2 class='recipe-names'> ${selectedRecipe.name}</h2>
      <img class='recipe-img' id='${selectedRecipe.id}' src='${selectedRecipe.image}' alt='${selectedRecipe.name}'>
      <p class='ingredients'>${determineIngredientNames(recipes, ingredients, selectedRecipe.name).join(' -- ')}</p>
      <p class='instructions'>${organizeInstructions(returnInstructions(selectedRecipe))}</p>
      <p class='cost'>Total cost: $${calculateCost(selectedRecipe, ingredients)}</p>
    </div>
    `;
  }
}

// const filterRecipeByTag = (e, recipes) => {
//   mainPanel.innerHTML = '';
//   page.mode === 'home' ? recipes = recipes : recipes = recipesToCook;
//   recipes.forEach(recipe => {
//     if (recipe.tags.includes(e.target.id)) {
//       viewRecipe(recipe);
//     }
//   });
// }

const filterRecipeByTag = (e, recipes) => {
  let filteredRecipes = filterByTag(e, recipes);
  return viewAllRecipes(filteredRecipes);
}

const searchRecipe = recipes => {
  mainPanel.innerHTML = '';
  page.mode === 'home' ? recipes = recipes : recipes = recipesToCook;
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
  toggleMode,
  viewRecipe,
  viewAllRecipes,
  viewRecipeInfo,
  filterRecipeByTag,
  searchRecipe, 
  loadUsers
}