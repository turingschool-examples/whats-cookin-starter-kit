//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import  './apiCalls'
import {fetchUsers, fetchRecipes, fetchIngredients} from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// import ingredientsData from './data/ingredients.js'
// import recipeData from './data/recipes.js'
// import usersData from './data/users.js'


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
  let recipesData;
  let ingredientsData
  //let usersFetch;
  
  const getRandomUser = (array) => {
    console.log('first', randomUser);
      let randomIndex = createRandomIndex(array);
      randomUser = array[randomIndex]
      console.log("random user", randomUser)
    return randomUser;
  };

  const getRecipeData = (array) => {
    recipesData = array;
    return recipesData
  }

  const getIngredientData = (array) => {
    ingredientsData = array;
    return ingredientsData
  }

const attachRecipeCardClickListener = event => {
  const recipeCard = event.target.closest('.recipe-card');
  if (recipeCard) {
    event.preventDefault();
    const recipeId = recipeCard.getAttribute('id');
    console.log(recipeId);
  
    displayPopUp(recipesData, ingredientsData, recipeId, randomUser);
    console.log("LOOK AT ME", recipesData)
    
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
  fetchRecipes(getRecipeData)
    .then(() => {
    renderRecipes(recipesData);})
  fetchIngredients(getIngredientData)
  // renderRecipes(recipesData);
  //addRecipesToCook(usersFetch);
  // getRandomUser(usersFetch);
  console.log('update', randomUser)
});


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('id');
    filterByTag(recipesData, linkId)
  });
});


searchField.addEventListener('keypress', function(event) {
  displayRecipes(event, recipesData, searchField);
  
});

allButton.addEventListener('click', function() {
  renderRecipes(recipesData);
});

allRecipes.addEventListener('click', function() {
  
  renderRecipes(recipesData);
  allButton.style.borderBottom = '4px solid orange';
  allButton.addEventListener('click', function() {
    renderRecipes(recipesData);
  });
  navLinks.forEach(link => {
    link.style.borderBottom = '4px solid orange';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const linkId = link.getAttribute('id');
      filterByTag(recipesData, linkId);
    });
  });
  searchField.addEventListener('keypress', function(event) {
    displayRecipes(event, recipesData, searchField);
    
  });
})


savedRecipes.addEventListener('click', function() {
  let userRecipesToCook = randomUser.recipesToCook;
  renderRecipes(userRecipesToCook);
  allButton.style.borderBottom = '4px solid navy';
  allButton.addEventListener('click', function() {
    renderRecipes(userRecipesToCook);
  });
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