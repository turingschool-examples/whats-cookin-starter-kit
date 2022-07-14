import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import Ingredient from './classes/Ingredient';
import User from './classes/User';
const recipeData = require('./data/recipes');
const ingredientData = require('./data/ingredients');
const userData = require('./data/users');

// ***** Query Selectors ***** //

const recipeIconContainer = document.querySelector('.recipe-icon-container');
const icon1Img = document.querySelector('.icon-1-img');
const icon2Img = document.querySelector('.icon-2-img');
const icon3Img = document.querySelector('.icon-3-img');
const icon4Img = document.querySelector('.icon-4-img');

// ***** Event Listeners ***** //

window.addEventListener('load', updateMainPageRecipeIcons);
window.addEventListener('load', loadNewUser);

// ***** Global Variables ***** //

const recipeTest = recipeData.recipeData.map(recipe => {
  return new Recipe(recipe);
})
let user;

// ***** Functions ***** //

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadNewUser() {
user = new User(userData.usersData[getRandomIndex(recipeTest)])
console.log(user)
}

function updateMainPageRecipeIcons() {
  icon1Img.src = recipeTest[getRandomIndex(recipeTest)].image;
  icon2Img.src = recipeTest[getRandomIndex(recipeTest)].image;
  icon3Img.src = recipeTest[getRandomIndex(recipeTest)].image;
  icon4Img.src = recipeTest[getRandomIndex(recipeTest)].image;
}