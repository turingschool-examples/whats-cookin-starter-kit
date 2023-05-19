// DOM UPDATES
import './styles.css';
import './images/user.png';
import './images/home.png';
import './images/search.png';
import './images/restaurant.png';
import './images/bookmark.png';
import './images/bookmark-filled.png'

import {getIngredients, getRecipes, getUsers} from './apiCalls'
import { getRandomUser } from './users';
// import { sampleIngredientsData, sampleRecipeData } from '../test/sampleIngredients';
// import { sampleUserData } from '../test/sampleUsers';
import { recipesToCook, removeRecipes} from './recipes-to-cook';
// import { recipeData }  from './data/recipes';
// import { ingredientsData } from './data/ingredients';
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
let ingredientsData
let userData
let recipeData

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

const start = () => {
  Promise.all([getUsers(), getIngredients(), getRecipes()])
 .then((data) => {

  userData = data[0];
  ingredientsData = data[1].ingredients;
  recipeData = data[2].recipes;
  currentUser = getRandomUser(userData);

  renderRecipeCards(mainViewCardContainer, recipeData, currentUser);
 })
 .catch((err) => {
  console.log(err);
 });
};

// EVENT LISTENERS
window.addEventListener('load', start);
searchButton.addEventListener('click', searchBarClicked);
singleRecipeView.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData);
}); 
mainView.addEventListener('click', (e) => {
  if (e.target.classList.contains('recipe-img') || e.target.classList.contains('recipe-name')) {
    renderSingleRecipeView(e, recipeData, ingredientsData);
  };
});
myRecipesBtn.addEventListener('click', () => {
  toMyRecipeView(currentUser);
  console.log(currentUser)
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
};

