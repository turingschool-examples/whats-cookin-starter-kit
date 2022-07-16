import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// Query Selectors for buttons:
let allRecipesTabButton = document.querySelector('.nav-tabs-all-recipes');
let favoritesTabButton = document.querySelector('.nav-tabs-favorites');
let searchButton = document.querySelector('.search-bar-main-button');
let recipeTagButton = document.querySelector('.tag-label-button'); // May need to differeniate between buttons
let addToFavoritesButton = document.querySelector('.recipe-button-favorite-button'); // May need a button for removing
let cookRecipeButton = document.querySelector('.cook-recipe-button');
// let document.querySelector();


// Query Selectors for full page views:
let mainPageView = document.querySelector('.main-page');
let allRecipesView = document.querySelector('.all-recipes-view');
let favoritesView = document.querySelector('.favorites-view');
let singleRecipeView = document.querySelector('.single-recipe-view');



// let allRecipesViewContainer = document.querySelector('.all-recipes-view-recipes-container');
let favoritesViewContainer = document.querySelector('.favorites-view-favorites-container');
let singleRecipeViewContainer = document.querySelector('.single-recipe-view-recipe-details');
let recipeIngredients = document.querySelector('.recipe-details-container');
let recipeInstructions = document.querySelector('.single-recipe-view-instructions');
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();


// Misc Query Selectors:
let allRecipesTab = document.querySelector('.nav-tabs-all-recipes');
let favoritesTab = document.querySelector('.nav-tabs-favorites');
let searcInput = document.querySelector('.search-bar-search-input');
let recipeTagsSecton = document.querySelector('.tag-section-recipes-container');
// let recipeSearchResults = document.querySelector('.searched-recipes-recipe-results-container');
let noResultsSearch = document.querySelector('.searched-recipes-no-results-container');
let recipeSearchResults = document.querySelector('.recipes-container-search-results');
let allRecipes = document.querySelector('.all-recipes-page-recipes-container');
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();


// Event Listeners:
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );
// .addEventListeners('click', );


// Helper Functions:
function showElements(elements) {
   elements.forEach(element => element.classList.remove('hidden'));
  }
  
  function hideElements(elements) {
    elements.forEach(element => element.classList.add('hidden'));
  }


  // DOM Manipulation Functions:
  function displayMainPage() {
    showElements([]);
    hideElements([]);
  }

  function displayAllRecipes() {
    showElements([]);
    hideElements([]);
  }

  function displayFavoritesView() {
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //antipasti
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //starter
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //snack
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //appetizer
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //antipasto
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //hor d'oeuvre
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //lunch
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //main course
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //main dish
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //dinner
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //sauce
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //side dish
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //morning meal
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //brunch
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //breakfast
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //salad
    showElements([]);
    hideElements([]);
  }
  
  function displayTagRecipes() { //condiment 
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //dip 
    showElements([]);
    hideElements([]);
  }

  function displayTagRecipes() { //spread
    showElements([]);
    hideElements([]);
  }



console.log('Hello world');
