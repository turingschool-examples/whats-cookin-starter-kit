//NOTE: Data model and non-dom manipulating logic will live in this file.
import './styles.css';
import { savePromises } from './apiCalls';
import './images/turing-logo.png';
import './images/chef-hat.png';
import './images/avatar.gif';
import './images/red-heart.png';
import './images/black-heart.png';
import { recipesToCook, toggleRecipesToCook } from './recipe.js';
import { homeButton, favoriteButton, searchButton, mainPanel, tagsPanel, recipeInfo, loadUsers, loadTags, viewAllRecipes, viewRecipeInfo, exitPopUp, filterRecipeByTag, searchRecipe, displaySearchError, toggleHearts, loadHearts, viewHome, viewSaved } from './domUpdates.js';

let users;
let recipes;
let ingredients;

// Event Listeners
window.addEventListener('load', () => {
  savePromises()
    .then(data => {
      users = data[0].users;
      recipes = data[1].recipes;
      ingredients = data[2].ingredients;
      loadUsers(users);
      loadTags(recipes);
      viewAllRecipes(recipes);
    });
});

mainPanel.addEventListener('click', e => {
  if (e.target.classList.contains('info-button')) {
    exitPopUp(recipes);
  } else if (e.target.classList.contains('heart')) {
    toggleRecipesToCook(e.target.parentNode.id, recipes);
    toggleHearts(e, recipes);
  } else {
    viewRecipeInfo(recipes, ingredients, e);
  };
});

tagsPanel.addEventListener('click', e => {
  if (!recipeInfo && e.target.classList.contains('tag')) {
    filterRecipeByTag(e, recipes);
  }
});

searchButton.addEventListener('click', () => {
  if (!recipeInfo) {
    searchRecipe(recipes);
    displaySearchError(recipes);
  }
});

favoriteButton.addEventListener('click', e => {
  if (!recipeInfo) {
    viewSaved();
    viewAllRecipes(recipesToCook);
    loadHearts(recipesToCook);
    document.querySelector('.filter-text').innerText = 'Filter Favorites';
  }
});

homeButton.addEventListener('click', e => {
  if (!recipeInfo) {
    viewHome();
    viewAllRecipes(recipes);
    loadHearts(recipesToCook);
    document.querySelector('.filter-text').innerText = 'Filter Recipes';
  }
});