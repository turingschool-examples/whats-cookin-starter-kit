//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import ingredientsData from './data/ingredients.js'
import recipeData from './data/recipes.js'


// Example of one way to import functions from the domUpdates file. You will delete these examples.
import {renderRecipes, displayRecipes} from './domUpdates.js';
import {findRecipeByTag} from '../test/untestedFunctions.js'
// query selectors

const searchField = document.querySelector('.search-field')
const allButton = document.querySelector('.all')
const navLinks = document.querySelectorAll('.nav-link');

const filterByTag = (clickedId) => {
  let filteredRecipes = findRecipeByTag(recipeData, clickedId);
  console.log(clickedId, filteredRecipes);
  renderRecipes(filteredRecipes)
}
        // const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('id');
    filterByTag(linkId)
  });
});


window.addEventListener('load', function() {
  renderRecipes(recipeData)
});

// searchField.addEventListener('keypress', function(event) {
//   displayRecipes(event, searchField)
// });

searchField.addEventListener('keypress', function(event) {
  // Pass 'searchField' as an argument to 'displayRecipes'
  displayRecipes(event, recipeData, searchField);
});

allButton.addEventListener('click', function() {
  renderRecipes(recipeData)
});