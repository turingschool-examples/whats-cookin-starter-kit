// DOM UPDATES
import './styles.css';
import './images/user.png';
import './images/home.png';
import './images/search.png';
import './images/restaurant.png';
import './images/bookmark.png';
import './images/bookmark-filled.png';

import { getRandomUser } from './users';
import { fetchAPI } from './apiCalls';
import {
  toMyRecipeView,
  toDashboardView,
  renderRecipeCards,
  toggleBookmark,
  renderSingleRecipeView,
  searchBarClicked,
  removeRecipeCard,
} from './domUpdates';

//GLOBAL VARIABLE
let currentUser;
let ingredientsData;
let userData;
let recipeData;

// QUERY SELECTORS
const mainContainer = document.querySelector('main');
const myRecipesBtn = document.querySelector('#myRecipes');
const mainView = document.querySelector('#mainView');
const myRecipesView = document.querySelector('#myRecipeView');
const dashboardBtn = document.querySelector('#dashboardNav');
const mainViewCardContainer = document.querySelector('#mainViewCardContainer');
const singleRecipeView = document.querySelector('#singleRecipeView');
const searchBar = document.querySelector('#searchInput');
const searchByToggle = document.querySelector('#searchSelect');
const searchButton = document.querySelector('#searchIconBackground');
const savedCardContainer = document.querySelector('#savedCardContainer');

const start = () => {
  Promise.all([fetchAPI('users'), fetchAPI('ingredients'), fetchAPI('recipes')]).then((data) => {
    userData = data[0];
    ingredientsData = data[1].ingredients;
    recipeData = data[2].recipes;
    currentUser = getRandomUser(userData);

    renderRecipeCards(mainViewCardContainer, recipeData, currentUser);
  });
};

// EVENT LISTENERS
window.addEventListener('load', start);
searchButton.addEventListener('click', searchBarClicked);
singleRecipeView.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData);
});
mainContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('recipe-img') || e.target.classList.contains('recipe-name')) {
    renderSingleRecipeView(e, recipeData, ingredientsData, currentUser);
  }
});
myRecipesBtn.addEventListener('click', () => {
  toMyRecipeView(currentUser);
});
dashboardBtn.addEventListener('click', () => {
  toDashboardView(currentUser);
});
mainViewCardContainer.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData);
});
myRecipesView.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData);
  removeRecipeCard(e);
});

export {
  mainView,
  myRecipesView,
  mainViewCardContainer,
  currentUser,
  singleRecipeView,
  searchBar,
  searchButton,
  searchByToggle,
  savedCardContainer
};
