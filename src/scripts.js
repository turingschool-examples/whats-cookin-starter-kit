// DOM UPDATES
import './styles.css';
import './images/user.png';
import './images/home.png';
import './images/search.png';
import './images/restaurant.png';
import './images/bookmark.png';
import './images/bookmark-filled.png'

import { getRandomUser } from './users';
import { sampleIngredientsData, sampleRecipeData } from '../test/sampleIngredients';
import { sampleUserData } from '../test/sampleUsers';
import { recipesToCook, removeRecipes} from './recipes-to-cook';
import { recipeData }  from './data/recipes';
import { ingredientsData } from './data/ingredients';
import {
  toMyRecipeView,
  toDashboardView,
  renderRecipeCards,
  toggleBookmark,
  renderSingleRecipeView,
  searchBarClicked,
  removeRecipeCard,
} from './domUpdates';
import { findRecipe } from './filters';

//GLOBAL VARIABLE
let currentUser

// QUERY SELECTORS
const myRecipesBtn = document.querySelector('#myRecipes');
const mainView = document.querySelector('#mainView');
const myRecipesView = document.querySelector('#myRecipeView');
const dashboardBtn = document.querySelector('#dashboardNav');
const mainViewCardContainer = document.querySelector('#mainViewCardContainer');
const singleRecipeView = document.querySelector('#singleRecipeView');
const searchBar = document.querySelector('#searchInput');
const searchByToggle = document.querySelector('#searchSelect');
const searchButton = document.querySelector('#searchIconBackground');

// EVENT LISTENERS
searchButton.addEventListener('click', searchBarClicked);
myRecipesBtn.addEventListener('click', toMyRecipeView);
dashboardBtn.addEventListener('click', toDashboardView);
mainViewCardContainer.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData);
});
window.addEventListener('load', () => {
  currentUser = getRandomUser(sampleUserData);
  renderRecipeCards(mainViewCardContainer, recipeData, currentUser);
});
singleRecipeView.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData)});
mainView.addEventListener('click', (e) => {
  if (e.target.classList.contains('recipe-img') || e.target.classList.contains('recipe-name')) {
    renderSingleRecipeView(e, recipeData, ingredientsData);
  }
});
myRecipesView.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData);
  removeRecipeCard(e);
})

export {
  mainView,
  myRecipesView,
  mainViewCardContainer,
  currentUser,
  singleRecipeView,
  searchBar,
  searchButton,
  searchByToggle,
};

