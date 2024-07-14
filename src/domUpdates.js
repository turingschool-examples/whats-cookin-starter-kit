
import { userPromise, currentUser, randomUser, recipesPromise, ingredientsPromise } from './apiCalls.js';
import { findRecipeIngredients, recipeData, ingredientList, findRecipeTag, findRecipeName, findRecipePrice } from '../src/recipes.js';
import { result } from 'lodash';

// const allRecipesButton = document.querySelector('.all-recipes-button');
const allRecipesButton = document.querySelector('.allRecipes');
const recipeDisplaySection = document.querySelector('.recipe-list-display');
const searchUserRecipes = document.querySelector('#savedRecipeInput');
const aboutUs = document.querySelector('.aboutUs-btn');
const logIn = document.querySelector('.logged-in-as');
const searchRecipes = document.querySelector('#searchInput');
const searchUserRecipesBtn = document.querySelector('#user-recipe-search-button');
const savedRecipesView = document.querySelector('.saved-recipes');
const searchRecipesBtn = document.querySelector('#quick-search-button');
const homeViewBtn = document.querySelector('.home-btn');
const homeView = document.querySelector('#home-page');
const savedRecipes = document.querySelector('.user-recipes-button');
const savedRecipes2 = document.querySelector('.user-recipes-button2');
const userSearchDisplay = document.querySelector('.best-selection');
let recipesToCook = [];
let userList = [];


var currentRecipeSelection = recipeData;
Promise.all([userPromise]).then((values) => { randomUser(values) });

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};


Promise.all([userPromise]).then((values) => { handleData(values) });


const handleData = (response) => {
  userList = response[0];
  console.log(currentUser);
  logIn.innerHTML = currentUser.name;
};


const displayRecipes = () => {
  savedRecipesView.innerHTML = null;
  recipeDisplaySection.innerHTML = null;
  for (var i = 0; i < currentRecipeSelection.length; i++) {

    var instructionText = [];

    currentRecipeSelection[i].instructions.forEach((instructionData) => instructionText.push(`<br>` + instructionData.number + ' ' + instructionData.instruction));

    recipeDisplaySection.innerHTML += `
    <article class="single-food">
      <section class="click-box" id='ID${currentRecipeSelection[i].id}'>
            <img class='food-image' id = 'foodImage${currentRecipeSelection[i].id}' src='${currentRecipeSelection[i].image}'>
            <h2 class='food-name hidden' id = 'foodName${currentRecipeSelection[i].id}'>${currentRecipeSelection[i].name}</h2>
            <button class='save-recipe hidden' id = 'saveRecipe${currentRecipeSelection[i].id}'>Save This Recipe!</button>

            <h3 class='total-price hidden' id = 'foodPrice${currentRecipeSelection[i].id}'>Total price $: ${centsToDollarAmount(findRecipePrice(currentRecipeSelection[i]))} </h3>
        <div class="food-ingredient">
          <h3 class='ingredients hidden' id = 'ingredients${currentRecipeSelection[i].id}'> ${findRecipeIngredients(currentRecipeSelection[i].name)}</h3>
        </div>
        <div class="food-instructions">
          <h3 class='instructions hidden' id = 'instructions${currentRecipeSelection[i].id}'> ${instructionText}</h3>
        </div>
        <div class="food-tags">
          <h4 class='tags hidden'>${currentRecipeSelection[i].tags} </h4>
        </div>
      </section>
    </article>
    `;
  }
  allowToggle();
};

// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.

function showFullRecipe() {
  var valForID = this.idVal;
  var toggleTemp = document.querySelector(`#foodName${valForID}`);
  toggleTemp.classList.toggle("hidden");
  toggleTemp = document.querySelector(`#saveRecipe${valForID}`);
  toggleTemp.classList.toggle("hidden");

  toggleTemp = document.querySelector(`#foodPrice${valForID}`);
  toggleTemp.classList.toggle("hidden");

  toggleTemp = document.querySelector(`#ingredients${valForID}`);
  toggleTemp.classList.toggle("hidden");

  toggleTemp = document.querySelector(`#instructions${valForID}`);
  toggleTemp.classList.toggle("hidden");


};

function saveRecipe() {
  var valForID = this.idVal;
  var recipeToSave = recipeData.find((recipe) => recipe.id === valForID);

  if (currentUser.recipesToCook.includes(recipeToSave)) {
    currentUser.recipesToCook.splice(currentUser.recipesToCook.indexOf(recipeToSave), 1);

  }
  else {
    currentUser.recipesToCook.push(recipeToSave);
  }
};

allRecipesButton.addEventListener('click', allRecipesVis);
function allRecipesVis() {
  currentRecipeSelection = recipeData;
  displayRecipes();
}
var arrayOfRecipeImages = [];
var arrayOfRecipeButtons = [];


// As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
function allowToggle() {
  for (var i = 0; i < currentRecipeSelection.length; i++) {
    arrayOfRecipeImages[i] = document.querySelector(`#foodImage${currentRecipeSelection[i].id}`);
    arrayOfRecipeImages[i].idVal = currentRecipeSelection[i].id;
    arrayOfRecipeImages[i].addEventListener('dblclick', showFullRecipe);
    arrayOfRecipeButtons[i] = document.querySelector(`#saveRecipe${currentRecipeSelection[i].id}`);
    arrayOfRecipeButtons[i].idVal = currentRecipeSelection[i].id;
    arrayOfRecipeButtons[i].addEventListener('click', saveRecipe);
  }
};

// As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
const userInput = () => {
  const input = document.getElementById('searchInput').value
  currentRecipeSelection = findRecipeName(recipeData, input)
  displayRecipes();
};

searchRecipesBtn.addEventListener('click', userInput)

// filtering by tag

function findByTag(tagInput) {
  currentRecipeSelection = recipeData.filter(recipe => recipe.tags.includes(tagInput))
  displayRecipes();
};
function recipesToCookFindByTag(tagInput) {
  currentRecipeSelection = recipeData.filter(recipe => (currentUser.recipesToCook.includes(recipe)) && (recipe.tags.includes(tagInput)))
  displayRecipes();
};

const tagInitialize = () => {
  // add an event listener to each tag button to search
  document.querySelectorAll(".tag")
    .forEach(element => {
      element.addEventListener('click', (e) => findByTag(e.target.dataset.tag))
    })

  // add an event listener to each tag button to search
  document.querySelectorAll(".recipe-tag")
    .forEach(element => {
      element.addEventListener('click', (e) => recipesToCookFindByTag(e.target.dataset.tag))
    })
};

tagInitialize();


//SAVE RECIPES
const savedRecipesPage = () => {
  currentRecipeSelection = currentUser.recipesToCook;
  savedRecipesView.innerHTML = null;
  recipeDisplaySection.innerHTML = null;

  for (var i = 0; i < currentRecipeSelection.length; i++) {

    var instructionText = [];

    currentRecipeSelection[i].instructions.forEach((instructionData) => instructionText.push(`<br>` + instructionData.number + ' ' + instructionData.instruction));

    savedRecipesView.innerHTML += `
    <article class="single-food">
      <section class="click-box" id='ID${currentRecipeSelection[i].id}'>
            <img class='food-image' id = 'foodImage${currentRecipeSelection[i].id}' src='${currentRecipeSelection[i].image}'>
            <h2 class='food-name hidden' id = 'foodName${currentRecipeSelection[i].id}'>${currentRecipeSelection[i].name}</h2>
            <button class='save-recipe hidden' id = 'saveRecipe${currentRecipeSelection[i].id}'>Unsave This Recipe!</button>
            <h3 class='total-price hidden' id = 'foodPrice${currentRecipeSelection[i].id}'>Total price $: ${centsToDollarAmount(findRecipePrice(currentRecipeSelection[i])).toFixed(2)} </h3>
        <div class="food-ingredient">
          <h3 class='ingredients hidden' id = 'ingredients${currentRecipeSelection[i].id}'> ${findRecipeIngredients(currentRecipeSelection[i].name)}</h3>
        </div>
        <div class="food-instructions">
          <h3 class='instructions hidden' id = 'instructions${currentRecipeSelection[i].id}'> ${instructionText}</h3>
        </div>
        <div class="food-tags">
          <h4 class='tags hidden'>${currentRecipeSelection[i].tags} </h4>
        </div>
      </section>
    </article>
    `;
  }
  allowToggle();
};


const recipesToCookFindByName = () => {
  const input = document.getElementById('savedRecipeInput').value
  currentRecipeSelection = findRecipeName(recipeData, input)
  displayRecipes();
};

savedRecipes.addEventListener('click', savedRecipesPage)
savedRecipes2.addEventListener('click', savedRecipesPage)

searchUserRecipesBtn.addEventListener('click', recipesToCookFindByName)

const addToSavedRecipe = (recipe) => {
  if (!recipesToCook.includes(recipe)) {
    recipesToCook.push(recipe)
  }
};


const homePageView = () => {
  savedRecipesView.innerHTML = null;
  recipeDisplaySection.innerHTML = null;
};
homeViewBtn.addEventListener('click', homePageView)

//To display a dollar
const centsToDollarAmount = (cents) => {
  return cents / 100
};

export {
  displayRecipes,
  userInput,
  savedRecipesPage,
  addToSavedRecipe,
  homePageView
};