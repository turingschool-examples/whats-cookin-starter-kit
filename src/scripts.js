import '../dist/bundle.js';
import './styles.css';
import { loadUsers, loadIngredients, loadRecipes } from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Ingredient from './classes/Ingredient'
import RecipeRepository from './classes/RecipeRepository'
import Recipe from './classes/Recipe'
// import Users from './classes/'

let repository;
let user;

console.log('this is a test')

// Query Selectors for buttons:
let allRecipesTabButton = document.querySelector('.nav-tabs-all-recipes');
let favoritesTabButton = document.querySelector('.nav-tabs-favorites');
let searchButton = document.querySelector('.search-bar-main-button');
let recipeTagButton = document.querySelector('.tag-label-button'); // May need to differeniate between buttons
let addToFavoritesButton = document.querySelector('.recipe-button-favorite-button'); // May need a button for removing
let cookRecipeButton = document.querySelector('.cook-recipe-button');

// Query Selectors for full page views:
let mainPageView = document.querySelector('.main-page');
let allRecipesView = document.querySelector('.all-recipes-view');
let favoritesView = document.querySelector('.favorites-view');
let singleRecipeView = document.querySelector('.single-recipe-view');

//Query Selectors for specific parts on a pageview:
let allRecipesViewContainer = document.querySelector('.all-recipes-view-recipes-container');
let favoritesViewContainer = document.querySelector('.favorites-view-favorites-container');
let singleRecipeViewContainer = document.querySelector('.single-recipe-view-recipe-details');
let recipeIngredients = document.querySelector('.recipe-details-container');
let recipeInstructions = document.querySelector('.single-recipe-view-instructions');

// Misc Query Selectors:
let allRecipesTab = document.querySelector('.nav-tabs-all-recipes');
let favoritesTab = document.querySelector('.nav-tabs-favorites');
let searchInput = document.querySelector('.search-bar-search-input');
let recipeTagsSection = document.querySelector('.tag-section-recipes-container');
let recipeSearchResultsContainer = document.querySelector('.searched-recipes-recipe-results-container');
let noResultsSearch = document.querySelector('.searched-recipes-no-results-container');
let recipeSearchResults = document.querySelector('.recipes-container-search-results');
let allRecipes = document.querySelector('.all-recipes-page-recipes-container');

// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();
// let document.querySelector();


// Event Listeners:
allRecipesTabButton.addEventListener('click', sortRecipesByName);
// favoritesTabButton.addEventListeners('click', );
// searchButton.addEventListeners('click', );
// recipeTagButton.addEventListeners('click', );
// addToFavoritesButton.addEventListeners('click', );
// cookRecipeButton.addEventListeners('click', );

// window.addEventListener('load', sortRecipesByName);
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

function addStyling(elements, className) {
  elements.classList.add(className)
}

function removeStyling(elements, className) {
  elements.classList.remove(className)
}

// DOM Manipulation Functions:
// function displayMainPage() {
//   showElements([]);
//   hideElements([]);
// }

// function displayAllRecipes() {
//   console.log('test1')
  
//   // showElements([]);
//   // hideElements([]);
//   sortRecipesByName();
// }

function sortRecipesByName() {
  repository = loadRecipes();
  console.log('test2: ', repository) 
  console.log('load:', loadRecipes())
  const recipeArray = repository.recipeData
  console.log('repository recipeData: ', repository.recipeData)
  const recipes = recipeArray
    .map(recipe => recipe.name)
    .sort( (a, b) => {
      return a - b
  });

  // const recipes = repository
  //   .map(recipe => recipe)
  //   .sort( (a, b) => {
  //     return a - b
  // });


  return recipes;
}

function viewSingleRecipe() {

}

// function displaySingleRecipeView() {
//   showElements([]);
//   hideElements([]);
    //at user click, iterate through recipe repo to match user selection with
    //repo recipe id. at match, retrieve recipe, display singleRecipeView,
    //and show recipe name, ingredients, total cost, and instructions
// }

// function displayFavoritesView() {
//   showElements([]);
//   hideElements([]);
// }

// // Tags that were grouped together ------------------------------------------------- //
// function displayAntipastiRecipes() { //antipasti
//   showElements([]);
//   hideElements([]);
// }

// function displayStarterRecipes() { //starter
//   showElements([]);
//   hideElements([]);
// }

// function displaySnackRecipes() { //snack
//   showElements([]);
//   hideElements([]);
// }

// function displayAppetizerRecipes() { //appetizer
//   showElements([]);
//   hideElements([]);
// }

// function displayAntipastoRecipes() { //antipasto
//   showElements([]);
//   hideElements([]);
// }

// function displayHorDOeuvreRecipes() { //hor d'oeuvre
//   showElements([]);
//   hideElements([]);
// }
// // --------------------------------------------------------------------------------- //


// // Tags that were grouped together ------------------------------------------------- //
// function displayLunchRecipes() { //lunch
//   showElements([]);
//   hideElements([]);
// }

// function displayMainCourseRecipes() { //main course
//   showElements([]);
//   hideElements([]);
// }

// function displayMainDishRecipes() { //main dish
//   showElements([]);
//   hideElements([]);
// }

// function displayDinnerRecipes() { //dinner
//   showElements([]);
//   hideElements([]);
// }
// // --------------------------------------------------------------------------------- //


// // Tags that were grouped together ------------------------------------------------- //
// function displaySauceRecipes() { //sauce
//   showElements([]);
//   hideElements([]);
// }
// // --------------------------------------------------------------------------------- //


// // Tags that were grouped together ------------------------------------------------- //
// function displaySideDishRecipes() { //side dish
//   showElements([]);
//   hideElements([]);
// }
// // --------------------------------------------------------------------------------- //


// // Tags that were grouped together ------------------------------------------------- //
// function displayMorningMealRecipes() { //morning meal
//   showElements([]);
//   hideElements([]);
// }

// function displayBrunchRecipes() { //brunch
//   showElements([]);
//   hideElements([]);
// }

// function displayBreakfastRecipes() { //breakfast
//   showElements([]);
//   hideElements([]);
// }
// // --------------------------------------------------------------------------------- //


// // Tags that were grouped together ------------------------------------------------- //
// function displayTagRecipes() { //salad
//   showElements([]);
//   hideElements([]);
// }
// // --------------------------------------------------------------------------------- //


// // Tags that were grouped together ------------------------------------------------- //
// function displayTagRecipes() { //condiment 
//   showElements([]);
//   hideElements([]);
// }

// function displayTagRecipes() { //dip 
//   showElements([]);
//   hideElements([]);
// }

// function displayTagRecipes() { //spread
//   showElements([]);
//   hideElements([]);
// }
// // --------------------------------------------------------------------------------- //



// console.log('Hello world');
