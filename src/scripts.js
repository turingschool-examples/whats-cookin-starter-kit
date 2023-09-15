//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import  './apiCalls'
import {fetchData} from './apiCalls.js'


// Example of one way to import functions from the domUpdates file. You will delete these examples.
import {renderRecipes, displayRecipes, displayPopUp, styleElementBorder, greetUser} from './domUpdates.js';
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

  const getRecipesToCook = (user, recipeData) => {
    console.log('jelp', recipeData)  
    const updatedRecipesToCook = user.recipesToCook.map(recipeId => {
        console.log(recipeId)
      const matchingRecipe = recipeData.find(recipe => recipe['id'] === recipeId);
      console.log('match', matchingRecipe)
      return matchingRecipe
    })
    user.recipesToCook = updatedRecipesToCook;
    console.log('user', user)
    console.log('rtc', user.recipesToCook)
  }
  
  const getRandomUser = (array) => {
      let randomIndex = createRandomIndex(array);
      randomUser = array[randomIndex];
      greetUser(randomUser);
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
  fetchData('users', "http://localhost:3001/api/v1/users", getRandomUser)
    .then(() => fetchData('recipes', "http://localhost:3001/api/v1/recipes", getRecipeData))
    .then(() => fetchData('ingredients', "http://localhost:3001/api/v1/ingredients", getIngredientData))
    .then(() => {
      getRecipesToCook(randomUser, recipesData);
      getFeaturedRecipes(recipesData);
      renderRecipes(featuredRecipes);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});


navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('id');
    filterByTag(recipesData, linkId)
  });
});


searchField.addEventListener("input", function () {
  if (searchField.value.trim() !== "") {
    displayRecipes(recipesData, searchField);
  }
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