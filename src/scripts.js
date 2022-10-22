//IMPORTS--------------------------------------------------------

import "./styles.css";
import loadData from "./apiCalls";
import RecipeRepository from "./classes/RecipeRepository";
import Recipe from "./classes/Recipe";
import Ingredient from "./classes/Ingredient-class";
import User from "./classes/User";
import "./images/turing-logo.png";
import "./images/AndrewProfile.png";
import "./images/BrettProfile.png";
import "./images/CourtneyProfile.png";
import "./images/DaniProfile.png";

//VARIABLES-----------------------------------------------------
//Global VARIABLES ---------
let userData;
let ingredientsData;
let recipeData;
let currentUser;

//Navbar VARIABLES ---------
//Home Page VARIABLES --------
//All Recipes Page VARIABLES --------
//Saved Recipes Page VARIABLES --------
//Specific Recipe Page VARIABLES --------


//QUERY SELECTORS-----------------------------------------------
//Navbar QUERY SELECTORS ---------
const allReipesPageButton = document.querySelector('.all-recipes-button') //connect with NAVBAR
const savedReipesPageButton = document.querySelector('.saved-recipes-button') //connect with NAVBAR
//Home Page QUERY SELECTORS--------
//All Recipes Page QUERY SELECTORS--------
const allRecipesPageTitle = document.querySelector('.page-title')
const allRecipeThumbnailsSection = document.querySelector('.all-recipe-thumbnails')
const allRecipeFilterTagOptions = document.querySelector('.list-of-tag-options')
//Saved Recipes Page QUERY SELECTORS--------
//Specific Recipe Page QUERY SELECTORS--------


//FETCH/CALL FUNCTIONS-------------------------------------------

Promise.all([
  loadData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"),
  loadData(
    "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
  ),
  loadData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes"),
]).then((data) => {
  userData = data[0];
  ingredientsData = data[1];
  recipeData = data[2];

  createInstances(recipeData, ingredientsData, userData);

  let allRecipes = new RecipeRepository(recipeData);
});

function createInstances(dataSet1, dataSet2, dataSet3) {
  makeRecipesList(dataSet1);
  makeIngredientsList(dataSet2);
  currentUser = new User();
  currentUser.generateRandomUser(dataSet3.usersData);
  
}

function makeRecipesList(dataSet) {
  recipeData = dataSet.recipeData.map((element) => {
    return new Recipe(element);
  });
}

function makeIngredientsList(dataSet) {
  ingredientsData = dataSet.ingredientsData.map((element) => {
    return new Ingredient(element);
  });
}

//EVENT LISTENERS-------------------------------------------------
//Navbar EVENT LISTENERS ---------
//Home Page EVENT LISTENERS --------
//All Recipes Page EVENT LISTENERS --------
allReipesPageButton.addEventListener('click', displayAllRecipesPage); //connect with NAVBAR
allRecipeThumbnailsSection.addEventListener('click', showSelectedRecipe);
allRecipeFilterTagOptions.addEventListener('click',)
//Saved Recipes Page EVENT LISTENERS --------
savedReipesPageButton.addEventListener('click', displaySavedRecipesPage) //connect with NAVBAR
//Specific Recipe Page EVENT LISTENERS --------


//FUNCTIONS------------------------------------------------------
//Global FUNCTIONS -------------
//Navbar FUNCTIONS ---------
function displayAllRecipesPage() {
  createPageTitle('ALL RECIPES');
  displayAllRecipeThumbnails();
};
//Home Page FUNCTIONS --------
//All Recipes Page FUNCTIONS --------
function createPageTitle(title) {
  allRecipesPageTitle.innerText = title; 
};

function displayAllRecipeThumbnails() {
let allRecipeThumbnailsSection = '';

};
//Saved Recipes Page FUNCTIONS --------
function displaySavedRecipesPage() {
  createPageTitle('SAVED RECIPES');
};
//Specific Recipe Page FUNCTIONS --------
function showSelectedRecipe() {

};