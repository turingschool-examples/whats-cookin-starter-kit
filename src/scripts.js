//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import  './apiCalls'
import {fetchData} from './apiCalls.js'


// Example of one way to import functions from the domUpdates file. You will delete these examples.
import {renderRecipes, displayRecipes, displayPopUp, styleElementBorder} from './domUpdates.js';
import {findRecipe} from './recipe-functions.js'

// query selectors

const searchField = document.querySelector('.search-field')
const allButton = document.querySelector('.all')
const navLinks = document.querySelectorAll('.nav-link');
const savedRecipes = document.querySelector('#savedRecipes');
const allRecipes = document.querySelector('#allRecipes')

  //variables
  let randomUser;
  let recipesData;
  let ingredientsData;
  let featuredRecipes = [];


  const createRandomIndex = (array) => { //REFACTOR: Move to untestedFunc or scripts
    return Math.floor(Math.random() * array.length);
  }

  const getFeaturedRecipes = (array) => {
    const uniqueIndexPositions = [];
    for (let i = 0; i < 6; i++) {
      let randomIndex = createRandomIndex(array);
      if (uniqueIndexPositions.includes(randomIndex)) {
        i--;
      } else {
        uniqueIndexPositions.push(randomIndex);
        featuredRecipes.push(array[randomIndex]);
      }
    }
  };
  
  const getRandomUser = (array) => {
      let randomIndex = createRandomIndex(array);
      randomUser = array[randomIndex]
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
  
    displayPopUp(recipesData, ingredientsData, recipeId, randomUser);
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const recipesContainer = document.querySelector('.recipe-container');
  recipesContainer.addEventListener('click', attachRecipeCardClickListener);
});

const filterByTag = (recipeData, clickedId) => {
  let filteredRecipes = findRecipe('tags', recipeData, clickedId);
  renderRecipes(filteredRecipes)
}

window.addEventListener('load', function() {
  fetchData('users', "http://localhost:3001/api/v1/users", getRandomUser);
  fetchData('recipes', "http://localhost:3001/api/v1/recipes", getRecipeData)
    .then(() => {
      getFeaturedRecipes(recipesData)})  
    .then(() => {
      renderRecipes(featuredRecipes);})
  fetchData('ingredients', "http://localhost:3001/api/v1/ingredients", getIngredientData)
});


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('id');
    filterByTag(recipesData, linkId)
  });
});


searchField.addEventListener('keypress', function() {
  displayRecipes(recipesData, searchField);
  
});

allButton.addEventListener('click', function() {
  renderRecipes(recipesData);
});

allRecipes.addEventListener('click', function() {
  
  renderRecipes(recipesData);
  styleElementBorder(allButton, '4px solid orange');
  allButton.addEventListener('click', function() {
    renderRecipes(recipesData);
  });
  navLinks.forEach(link => {
    styleElementBorder(link, '4px solid orange');
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const linkId = link.getAttribute('id');
      filterByTag(recipesData, linkId);
    });
  });
  searchField.addEventListener('keypress', function() {
    displayRecipes(recipesData, searchField);
    
  });
})


savedRecipes.addEventListener('click', function() {
  let userRecipesToCook = randomUser.recipesToCook;
  renderRecipes(userRecipesToCook);
  styleElementBorder(allButton, '4px solid #4B1D3F')
  allButton.addEventListener('click', function() {
    renderRecipes(userRecipesToCook);
  });
  navLinks.forEach(link => {
    styleElementBorder(link, '4px solid #4B1D3F')
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const linkId = link.getAttribute('id');
      filterByTag(userRecipesToCook, linkId);
    });
  });
  searchField.addEventListener('keypress', function() {
    displayRecipes(userRecipesToCook, searchField);  
  });
})