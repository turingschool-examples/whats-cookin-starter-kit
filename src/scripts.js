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
const allRecipesSection = document.querySelector('.all-recipes');
const icon1Img = document.querySelector('.icon-1-img');
const icon2Img = document.querySelector('.icon-2-img');
const icon3Img = document.querySelector('.icon-3-img');
const icon4Img = document.querySelector('.icon-4-img');

// ***** Event Listeners ***** //

window.addEventListener('load', updateMainPageRecipeIcons);
window.addEventListener('load', loadNewUser);
window.addEventListener('load', displayAllRecipeNames);
allRecipesSection.addEventListener('click', viewRecipe);

// ***** Global Variables ***** //

const allRecipes = recipeData.recipeData.map(recipe => {
  return new Recipe(recipe);
})
const recipeRepository =  new RecipeRepository(allRecipes)
let user;

// ***** Functions ***** //

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function loadNewUser() {
user = new User(userData.usersData[getRandomIndex(userData.usersData)])
}

function updateMainPageRecipeIcons() {
  icon1Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon2Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon3Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon4Img.src = allRecipes[getRandomIndex(allRecipes)].image;
}

function displayAllRecipeNames() {
  const allRecipeNames = allRecipes.map(recipe => recipe.name)
  allRecipeNames.forEach(name => {
    console.log(allRecipeNames)
    allRecipesSection.innerHTML += `<p>${name}</p>`
  });
}

function viewRecipe() {
  //hide HomePage
  //view Recipe page
  //Populate Recipe page with name, instructions, ingredients
  
}
