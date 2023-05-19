//NOTE: Data model and non-dom manipulating logic will live in this file.
import './styles.css';
import {fetchAPI} from './apiCalls';
import './images/turing-logo.png';
import './images/clipart16385.png';
import { toggleRecipesToCook } from './recipe.js';
import { searchButton, favoriteButton, tags, mainPanel, loadUsers, toggleMode, viewAllRecipes, viewRecipeInfo, filterRecipeByTag, searchRecipe} from './domUpdates.js';

let userTestData;

// Event Listeners
window.addEventListener('load', () => {
  fetchAPI('users')
    .then(response => loadUsers(response.users)),
  fetchAPI('recipes')
    .then(response => viewAllRecipes(response.recipes))
});

// console.log('test data', userTestData)
mainPanel.addEventListener('click', e => {
  viewRecipeInfo(e),
  toggleRecipesToCook(e)
});

tags.forEach(tag => {
  tag.addEventListener('click', e => filterRecipeByTag(e));
});

searchButton.addEventListener('click', searchRecipe);

favoriteButton.addEventListener('click', e => {
  toggleMode(e),
  viewAllRecipes()
});