//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import  './apiCalls'
import {fetchUsers} from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import ingredientsData from './data/ingredients.js'
import recipeData from './data/recipes.js'
import usersData from './data/users.js'


// Example of one way to import functions from the domUpdates file. You will delete these examples.
import {renderRecipes, displayRecipes, displayPopUp, addRecipesToCook, createRandomIndex} from './domUpdates.js';
import {findRecipeByTag} from '../test/untestedFunctions.js'

// query selectors

const searchField = document.querySelector('.search-field')
const allButton = document.querySelector('.all')
const navLinks = document.querySelectorAll('.nav-link');
const savedRecipes = document.querySelector('#savedRecipes');
const allRecipes = document.querySelector('#allRecipes')
// closure for user state and updates

  // user variable
  let randomUser;
  //let usersFetch;
  
  const getRandomUser = (array) => {
    console.log('first', randomUser);
      let randomIndex = createRandomIndex(array);
      randomUser = array[randomIndex]
      console.log("random user", randomUser)
    return randomUser;
  };


const attachRecipeCardClickListener = event => {
  const recipeCard = event.target.closest('.recipe-card');
  if (recipeCard) {
    event.preventDefault();
    const recipeId = recipeCard.getAttribute('id');
    console.log(recipeId);
  
    displayPopUp(recipeData, ingredientsData, recipeId, randomUser);
    console.log(randomUser)
    
  }
}




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

const filterByTag = (recipeData, clickedId) => {
  let filteredRecipes = findRecipeByTag(recipeData, clickedId);
  console.log(clickedId, filteredRecipes);
  renderRecipes(filteredRecipes)
}

window.addEventListener('load', function() {
  fetchUsers(getRandomUser);
  renderRecipes(recipeData);
  //addRecipesToCook(usersFetch);
  // getRandomUser(usersFetch);
  console.log('update', randomUser)
});


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('id');
    filterByTag(recipeData, linkId)
  });
});


searchField.addEventListener('keypress', function(event) {
  displayRecipes(event, recipeData, searchField);
  
});

allButton.addEventListener('click', function() {
  renderRecipes(recipeData);
});

allRecipes.addEventListener('click', function() {
  allButton.style.borderBottom = '4px solid orange';
  allButton.addEventListener('click', function() {
    renderRecipes(recipeData);
  });
  navLinks.forEach(link => {
    link.style.borderBottom = '4px solid orange';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const linkId = link.getAttribute('id');
      filterByTag(recipeData, linkId);
    });
  });
  searchField.addEventListener('keypress', function(event) {
    displayRecipes(event, recipeData, searchField);
    
  });
})


savedRecipes.addEventListener('click', function() {
  let userRecipesToCook = randomUser.recipesToCook;
  renderRecipes(userRecipesToCook);
  allButton.style.borderBottom = '4px solid navy';

  navLinks.forEach(link => {
    link.style.borderBottom = '4px solid navy';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const linkId = link.getAttribute('id');
      filterByTag(userRecipesToCook, linkId);
    });
  });
  searchField.addEventListener('keypress', function(event) {
    displayRecipes(event, userRecipesToCook, searchField);
    
  });
})