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
console.log('old', recipeData)

const start = () => {
  Promise.all([getUsers(), getIngredients(), getRecipes()])
 .then((data) => {
  console.log(data[0])
  let userData = data[0]
  let ingredientsData = data[1].ingredients
  let recipeData = data[2].recipes

  let currentUser = data[0].users[0]
  console.log(currentUser, ingredientsData)
searchButton.addEventListener('click', searchBarClicked);
myRecipesBtn.addEventListener('click', () => {
  toMyRecipeView(currentUser)
  console.log(currentUser)
 });
dashboardBtn.addEventListener('click', () => {
  toDashboardView(currentUser)
});
mainViewCardContainer.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser, recipeData);
});
window.addEventListener('load', () => {
  // currentUser = getRandomUser(sampleUserData);
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
})
}

start();

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

