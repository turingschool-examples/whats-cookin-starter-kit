import { render } from 'sass';
import { shuffledRecipes, recipesToCook, getRandomIndex } from './scripts';
import { saveRecipe, removeRecipe } from '../src/users';
import { searchRecipes, calcRecipeCost, formatRecipeIngredients } from '../src/recipes';
import { getAllData } from './apiCalls';

const allRecipesBtn = document.querySelector('#allRecipesBtn');
const homeContainer = document.querySelector('.home-container');
const homeButton = document.querySelector('#homeButton');
const homeTitle = document.querySelector('.recipeOtd');
const recipeCost = document.querySelector('.recipe-cost');
const recipeImage = document.querySelector('.recipe-img');
const recipeIngredients = document.querySelector('.ingredients-list');
const recipeInstructions = document.querySelector('.instructions-list');
const recipesContainer = document.querySelector('.recipes-container');
const recipeTitle = document.querySelector('.recipe-title');
const removeSavedRecipe = document.querySelector('#rmvBtn');
const saveRecipeBtn = document.querySelector('#saveBtn');
const searchInputAll = document.querySelector('#searchAll');
const searchInputSaved = document.querySelector('#searchSaved');
const searchSavedContainer = document.querySelector('.search-saved-container');
const showSavedRecipes = document.querySelector('#showSavedRecipes');
const toRecipeContainer = document.querySelector('.to-recipe-container');
const selectedUser = document.querySelector('#userBtn');

let recipeData;
let ingredientsData;
let userData;
let currentRecipe;

window.addEventListener('load', () => {
  retrieveData();
});

function retrieveData() {
  getAllData().then(data => {
    recipeData = data[0].recipes;
    ingredientsData = data[1].ingredients;
    userData = data[2].users;
    displayRecipesHome(recipeData);
    renderRandomUser();
  })
}

export const renderRandomUser = () => {
  const user = userData[getRandomIndex(userData)];
  selectedUser.innerText = `Hello ${user.name}!`;
}

homeButton.addEventListener('click', () => {
  displayRecipesHome(recipeData);
  renderHomeView();
});

homeContainer.addEventListener('click', e => {
  goToRecipe(e);
});

showSavedRecipes.addEventListener('click', renderSavedRecipes);
removeSavedRecipe.addEventListener('click', () => {
  removeRecipe(recipesToCook, currentRecipe);
});
saveRecipeBtn.addEventListener('click', () => {
  saveRecipe(recipesToCook, currentRecipe);
});

showSavedRecipes.addEventListener('click', e => {
  renderSavedRecipes(e);
});

removeSavedRecipe.addEventListener('click', e => {
  removeRecipe(e);
});

recipesContainer.addEventListener('click', e => {
  goToRecipe(e, recipeData);
});
allRecipesBtn.addEventListener('click', e => {
  renderAllRecipes(e);
});
searchInputAll.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    searchedRecipes();
  }
});
searchInputSaved.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    searchSavedRecipes();
  }
});

export function displayRecipesHome(recipeData) {
  let recipesFull = shuffledRecipes(recipeData);
  let recipes = recipesFull.slice(0, 3);

  homeContainer.innerHTML = '';
  recipes.forEach(recipe => {
    homeContainer.innerHTML += `
        <div class="recipe-card" id=${recipe.id}>
          <img src=${recipe.image} alt="Recipe Image">
          <p class="recipe-name">${recipe.name}</p>
        </div>`;
  });
}

function renderAllRecipes(e) {
  const click = e.target.closest('a');
  const sorted = recipeData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  if (click.id === 'allRecipesBtn') {
    toRecipeContainer.classList.add('hidden');
    recipesContainer.classList.remove('hidden');
    allRecipesBtn.classList.remove('hidden');
    homeContainer.classList.add('hidden');
    saveRecipeBtn.classList.add('hidden');
    removeSavedRecipe.classList.add('hidden');
    searchSavedContainer.classList.add('hidden');
    homeTitle.classList.add('hidden');
    recipesContainer.innerHTML = '';
    sorted.forEach(recipe => {
      recipesContainer.innerHTML += `
        <div class="recipe-card" id=${recipe.id}>
          <img src=${recipe.image} alt="Recipe Image">
          <p class="recipe-name">${recipe.name}</p>
        </div>`;
    });
  }
}

function searchSavedRecipes() {
  const searchTerm = searchInputSaved.value.trim();
  const filtered = searchRecipes(recipesToCook, searchTerm);
  if (!searchTerm) return;
  if (typeof filtered === 'string') {
    console.log('error');
    recipesContainer.innerHTML = '';
    recipesContainer.innerHTML = `<p>We can not find a match for this!</p>`;
    return;
  }
  toRecipeContainer.classList.add('hidden');
  homeContainer.classList.add('hidden');
  recipesContainer.classList.remove('hidden');
  recipesContainer.innerHTML = ``;
  filtered.forEach(recipe => {
    recipesContainer.innerHTML += `
      <div class="recipe-card" id=${recipe.id}>
        <img src=${recipe.image} alt="Recipe Image">
        <p class="recipe-name">${recipe.name}</p>
      </div>`;
  });
}

function searchedRecipes() {
  const searchTerm = searchInputAll.value.trim();
  const filtered = searchRecipes(recipeData, searchTerm);
  if (typeof filtered === 'string') {
    console.log('error');
    recipesContainer.innerHTML = '';
    recipesContainer.innerHTML = `<p>We can not find a match for this!</p>`;
    return;
  }
  toRecipeContainer.classList.add('hidden');
  homeContainer.classList.add('hidden');
  recipesContainer.classList.remove('hidden');
  recipesContainer.innerHTML = ``;
  filtered.forEach(recipe => {
    recipesContainer.innerHTML += `
      <div class="recipe-card" id=${recipe.id}>
        <img src=${recipe.image} alt="Recipe Image">
        <p class="recipe-name">${recipe.name}</p>
      </div>`;
  });
}

export function goToRecipe(e) {
  const selectedRecipe = e.target.closest('div');
  recipeData.forEach(recipe => {
    if (Number(selectedRecipe.id) === recipe.id) {
      currentRecipe = recipe;
      homeContainer.classList.add('hidden');
      saveRecipeBtn.classList.remove('hidden');
      toRecipeContainer.classList.remove('hidden');
      removeSavedRecipe.classList.remove('hidden');
      recipesContainer.classList.toggle('hidden');
      searchSavedContainer.classList.add('hidden');
      homeTitle.classList.add('hidden');
      renderRecipeTitle(recipe);
      renderRecipeCost(recipe);
      renderRecipeImg(recipe);
      renderRecipeInstructions(recipe);
      renderRecipeIngredients(recipe);
    }
  });
  return currentRecipe;
}

function renderRecipeTitle(recipe) {
  recipeTitle.innerText = '';
  recipeTitle.innerText = recipe.name;
}

function renderRecipeCost(recipe) {
  const estimatedCost = calcRecipeCost(recipe, ingredientsData);
  recipeCost.innerText = '';
  recipeCost.innerText += `estimated cost | $${estimatedCost}`;
}

function renderRecipeImg(recipe) {
  recipeImage.innerHTML = `<img src=${recipe.image} >`;
}

function renderRecipeInstructions(recipe) {
  recipeInstructions.innerHTML = '';
  recipe.instructions.forEach(instruction => {
    recipeInstructions.innerHTML += `<li class="recipe-details">${instruction.number}. ${instruction.instruction}</li>`;
  });
}

function renderRecipeIngredients(recipe) {
  recipeIngredients.innerHTML = '';
  const ingredientsToRender = formatRecipeIngredients(recipe, ingredientsData);
  ingredientsToRender.forEach(({ name, amount, unit }) => {
    recipeIngredients.innerHTML += `<li class="recipe-details">${name} | ${amount} ${unit}</li>`;
  });
}

function renderHomeView() {
  recipesContainer.classList.add('hidden');
  toRecipeContainer.classList.add('hidden');
  homeContainer.classList.remove('hidden');
  saveRecipeBtn.classList.add('hidden');
  removeSavedRecipe.classList.add('hidden');
  searchSavedContainer.classList.add('hidden');
  homeTitle.classList.remove('hidden');
}

function renderSavedRecipes(e) {
  const click = e.target.closest('a');
  if (click.id === 'showSavedRecipes') {
    toRecipeContainer.classList.add('hidden');
    recipesContainer.classList.remove('hidden');
    removeSavedRecipe.classList.add('hidden');
    saveRecipeBtn.classList.add('hidden');
    homeContainer.classList.add('hidden');
    searchSavedContainer.classList.remove('hidden');
    homeTitle.classList.add('hidden');

    recipesContainer.innerHTML = '';
    recipesToCook.forEach(recipe => {
      recipesContainer.innerHTML += `
      <div class="recipe-card" id=${recipe.id}>
      <img src=${recipe.image} alt="Recipe Image">
      <p class="recipe-name">${recipe.name}</p>
      </div>`;
    });
  }
}
