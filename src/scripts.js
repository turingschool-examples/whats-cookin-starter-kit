//NOTE: Data model and non-dom manipulating logic will live in this file.
import './styles.css';
import { savePromises } from './apiCalls';
import './images/turing-logo.png';
import './images/clipart16385.png';
import { toggleRecipesToCook } from './recipe.js';
import { searchButton, favoriteButton, tags, mainPanel, loadUsers, toggleMode, viewAllRecipes, viewRecipeInfo, filterRecipeByTag, searchRecipe } from './domUpdates.js';

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
      viewAllRecipes(recipes);
    });
});

mainPanel.addEventListener('click', e => {
  viewRecipeInfo(recipes, ingredients, e),
  toggleRecipesToCook(e)
});

tags.forEach(tag => {
  tag.addEventListener('click', e => {
    filterRecipeByTag(e, recipes);
  });
});

searchButton.addEventListener('click', r => {
  console.log(r);
  searchRecipe(r);
});

favoriteButton.addEventListener('click', e => {
  toggleMode(e),
  viewAllRecipes()
});