import ingredientsData from './src/data/ingredients.js';
import recipeData from './src/data/recipes.js';
import usersData from './src/data/users.js';
import { getRecipeInstructions, findRecipeIngredients, findRecipeTags } from "./src/recipes.js";

const recipeListContainer = document.querySelector('.all-recipes');
const featuredRecipesContainer = document.querySelector('.featured-recipes');
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button[type="submit]');
const allRecipeBoxes = document.querySelectorAll('.recipe-box1'); //possibly more for the individual boxes
const featuredRecipeBoxes = document.querySelectorAll('.featured-recipe-box'); //Possibly more for the individual boxes

window.addEventListener('DOMContentLoaded', createFeaturedRecipe);

function createFeaturedRecipe() {
  featuredRecipeBoxes.forEach((box, index) => {
    const recipe = recipeData[index];
    const image = recipe.image;
    const name = recipe.name;

    box.innerHTML = `<img src="${image}" alt="${name}">
    <p>${name}</p>`;
    // Add click event listener to the boxes
    box.addEventListener('click', () => displayRecipeDetails(recipe.id));
  });
}

function displayRecipeDetails(recipeId) {
  const recipe = recipeData.find(recipe => recipe.id === recipeId);
  const instructions = getRecipeInstructions(recipeId, recipeData);
  const ingredients = findRecipeIngredients(recipeData, recipe.name);
  const tags = findRecipeTags(recipeData, recipeNamesTags);
  //CONSOLE LOGS
  console.log("Recipe Instructions:", instructions);
  console.log("Recipe Ingredients:", ingredients);
  console.log("Recipe Tags:", tags);
};

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

};


function filterRecipesByTag(tag) {

};

function searchRecipesByName(name) {

};

function searchRecipesByIngredients(ingredients) {
  
};
// Example usage:
const ingredient = selectIngredientById(20081);
console.log("INGREDIENT???>>>>", ingredient);



searchButton.addEventListener('click', () => {


});
   
/******/ (() => { // webpackBootstrap
  var __webpack_exports__ = {};
  alert('hello')
  /******/
})()
  ;