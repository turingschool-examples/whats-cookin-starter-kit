// const recipeData = require('../data/Recipes');


let navBarToggle = document.querySelector('.navbar-toggle');
let mainNav = document.querySelector('.main-nav');
let suggestedRecipes = document.querySelector('.injected-suggested-recipes');
let allRecipes = null;

window.onload = loadSuggestedRecipesFunction();
console.log();
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

function loadSuggestedRecipesFunction() {

allRecipes = suggestedRecipes.querySelectorAll('.recipe-card');
allRecipes.forEach(recipe => recipe.addEventListener('click', recipeHandler));
};

function instantiateRecipes() {
  let recipes = [];


};
