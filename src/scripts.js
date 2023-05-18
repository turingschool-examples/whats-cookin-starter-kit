//NOTE: Data model and non-dom manipulating logic will live in this file.
import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png';
import './images/clipart16385.png';
import { toggleRecipesToCook } from './recipe.js';
import { searchButton, favoriteButton, tags, mainPanel, displayRandomUser, toggleMode, viewAllRecipes, viewRecipeInfo, filterRecipeByTag, searchRecipe } from './domUpdates.js';

// Event Listeners
window.addEventListener('load', () => {
  viewAllRecipes(),
  displayRandomUser()
});

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