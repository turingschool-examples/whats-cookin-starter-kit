console.log(recipeData);
// const recipeData = require('../data/recipes');


let navBarToggle = document.querySelector('.navbar-toggle');
let mainNav = document.querySelector('.main-nav');
let suggestedRecipes = document.querySelector('.injected-suggested-recipes');
let allRecipes = [];

window.onload = loadSuggestedRecipesFunction();
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

function loadSuggestedRecipesFunction(event) {

for(let i = 0; i <  allRecipes.length; i++) {
suggestedRecipes.insertAdjacentHTML('beforeend',

`<div class="recipe-card">
  <img src="${allRecipes[i].image}" alt="fork and knife logo">
  <p>${allRecipes[i].name}</p>
</div>`
)}
recipeSelector = suggestedRecipes.querySelectorAll('.recipe-card');
recipeSelector.forEach(recipe => recipe.addEventListener('click', recipeHandler));
};

function instantiateRecipes() {
  let recipes = [];

  for (let i = 0; i < recipeData.length; i++) {
    recipes.push(new Recipe(recipeData[i]))
  }
  return recipes;
};
