//NOTE: Data model and non-dom manipulating logic will live in this file.
import './styles.css';
import { savePromises } from './apiCalls';
import './images/turing-logo.png';
import './images/clipart16385.png';
import './images/Avatar1.gif';
import './images/rh.png';
import './images/bh.png';
import { recipesToCook, toggleRecipesToCook } from './recipe.js';
import { searchButton, favoriteButton, homeButton, tagsPanel, mainPanel, loadUsers, loadTags, viewAllRecipes, viewRecipeInfo, exitPopUp, filterRecipeByTag, searchRecipe, toggleHearts, loadHearts, viewHome, viewSaved, displaySearchError, recipeInfo} from './domUpdates.js';

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
  if (recipeInfo){
  } else {
  filterRecipeByTag(e, recipes);
  }
});

searchButton.addEventListener('click', () => {
  if (recipeInfo){
  } else {
  searchRecipe(recipes);
  displaySearchError();
  }
});

favoriteButton.addEventListener('click', e => {
  if (recipeInfo){
  } else {
  viewSaved();
  viewAllRecipes(recipesToCook);
  loadHearts(recipesToCook);
  }
});

homeButton.addEventListener('click', e => {
  if (recipeInfo){
  } else {
  viewHome();
  viewAllRecipes(recipes);
  loadHearts(recipesToCook);
  }
});