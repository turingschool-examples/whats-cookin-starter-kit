import ingredientsData from './src/data/ingredients.js';
import recipeData from './src/data/recipes.js';
import usersData from './src/data/users.js';

const recipeListContainer = document.querySelector('.all-recipes');
const featuredRecipesContainer = document.querySelector('.featured-recipes');
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button[type="submit]');
const allRecipeBoxes = document.querySelectorAll('.recipe-box1'); //possibly more for the individual boxes
const featuredRecipeBoxes = document.querySelectorAll('.featured-recipe-box'); //Possibly more for the individual boxes

function selectIngredientById(id) {
  return ingredientsData.find(ingredient => ingredient.id === id);
};

function selectRecipeById(id) {
  return recipeData.find(recipe => recipe.id === id)
};

function selectUserById(id) {
  return usersData.find(user => user.id === id )
};

function displayAllRecipes(recipes) {

}

function displayRecipeDetails(recipeId) {

}

function filterRecipesByTag(tag) {

}

function searchRecipesByName(name) {

}

function searchRecipesByIngredients(ingredients) {
  
}
// Example usage:
const ingredient = selectIngredientById(20081);
console.log(ingredient);


window.addEventListener('DOMContentLoaded', () => {

});

searchButton.addEventListener('click', () => {


});
   
/******/ (() => { // webpackBootstrap
  var __webpack_exports__ = {};
  alert('hello')
  /******/
})()
  ;