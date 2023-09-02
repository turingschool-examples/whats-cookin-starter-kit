//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import ingredientsData from './data/ingredients.js'
import recipeData from './data/recipes.js'
import usersData from './data/users.js'


// Example of one way to import functions from the domUpdates file. You will delete these examples.
import {renderRecipes, displayRecipes, displayPopUp, addRecipesToCook} from './domUpdates.js';
import {findRecipeByTag} from '../test/untestedFunctions.js'

// query selectors

const searchField = document.querySelector('.search-field')
const allButton = document.querySelector('.all')
const navLinks = document.querySelectorAll('.nav-link');

const attachRecipeCardClickListener = event => {
  const recipeCard = event.target.closest('.recipe-card');
  if (recipeCard) {
    event.preventDefault();
    const recipeId = recipeCard.getAttribute('id');
    console.log(recipeId);
   
    displayPopUp(recipeData, ingredientsData, recipeId)
    
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const recipesContainer = document.querySelector('.recipe-container');
  recipesContainer.addEventListener('click', attachRecipeCardClickListener);
  recipesContainer.addEventListener('mouseover', event => {
    const hoveredRecipeCard = event.target.closest('.recipe-card');
    if (hoveredRecipeCard) {
      hoveredRecipeCard.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.6)';
    }
  });
  recipesContainer.addEventListener('mouseout', event => {
    const hoveredRecipeCard = event.target.closest('.recipe-card');
    if (hoveredRecipeCard) {
      hoveredRecipeCard.style.boxShadow = ''; 
    }
  });
  recipesContainer.addEventListener('mousedown', event => {
    const hoveredRecipeCard = event.target.closest('.recipe-card');
    if (hoveredRecipeCard) {
      hoveredRecipeCard.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.9)'; 
    }
  });
});

const filterByTag = (clickedId) => {
  let filteredRecipes = findRecipeByTag(recipeData, clickedId);
  console.log(clickedId, filteredRecipes);
  renderRecipes(filteredRecipes)
}

window.addEventListener('load', function() {
  renderRecipes(recipeData);
  addRecipesToCook(usersData);
});


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('id');
    filterByTag(linkId)
  });
});


searchField.addEventListener('keypress', function(event) {
  displayRecipes(event, recipeData, searchField);
  
});

allButton.addEventListener('click', function() {
  renderRecipes(recipeData);
});