//NOTE: Data model and non-dom manipulating logic will live in this file.
// query selectors and event listeners in here 

import './styles.css'
import { renderGrid, showRecipe, closeRecipe } from './domUpdates'

// import apiCalls from './apiCalls'

const recipeGrid = document.querySelector('.recipe-grid');
const allRecipes = document.querySelector('.all-recipes');
const clickedRecipe = document.querySelector('#clickedRecipe');
const closeRecipeButton = document.querySelector('#closeRecipe');

// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import ingredientsData from './data/ingredients.js'

// //Example of one way to import functions from the domUpdates file. You will delete these examples.
// import {exampleFunction1, exampleFunction2} from './domUpdates.js'
window.addEventListener("load", renderGrid);

allRecipes.addEventListener("click", (event) => {
  if (event.target.classList.contains('individual-recipe')) {
    showRecipe(event.target);
  }
});

closeRecipeButton.addEventListener("click", closeRecipe);

// Exports
export {
  recipeGrid,
  clickedRecipe
}
