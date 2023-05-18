//NOTE: Data model and non-dom manipulating logic will live in this file.
import './styles.css'
// import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {recipesToCook} from './recipe.js'
//Example of one way to import functions from the domUpdates file. You will delete these examples.

import {viewAllRecipes, viewRecipeInfo, mainRecipe, tagButtons, viewFavoriteRecipes, favoriteButton, selectFavoriteRecipes, filterRecipeByTag,searchButton,searchRecipe,userInput, toggleMode, displayRandomUser} from './domUpdates.js'

// Event Listeners
window.addEventListener('load', () => {
viewAllRecipes(),
displayRandomUser()
});

mainRecipe.addEventListener('click', (e) => {
  viewRecipeInfo(e),
  selectFavoriteRecipes(e)
});

tagButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    filterRecipeByTag(e, null)
    }) 
  })

searchButton.addEventListener('click', searchRecipe)
favoriteButton.addEventListener('click', (e) => {
toggleMode(e);
viewAllRecipes()
});
