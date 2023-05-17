// DOM UPDATES
import './styles.css';
import './images/user.png';
import './images/home.png';
import './images/search.png';
import './images/restaurant.png';
import './images/bookmark.png';
import './images/bookmark-filled.png'
import { recipeData }  from './data/recipes';
import { ingredientsData } from './data/ingredients';
import {
  toMyRecipeView,
  toDashboardView,
  renderRecipeCards,
  toggleBookmark,
  renderSingleRecipeView,
  searchBarClicked,
} from './domUpdates';
import { findRecipe } from './filters';

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
  toggleBookmark(e);
});
singleRecipeView.addEventListener('click', (e) => {
  toggleBookmark(e)});
mainView.addEventListener('click', (e) => {
  if (e.target.classList.contains('recipe-img') || e.target.classList.contains('recipe-name')) {
    renderSingleRecipeView(e, recipeData, ingredientsData);
  }
});


// FUNCTIONS
renderRecipeCards(mainViewCardContainer, recipeData);

export {
  mainView,
  myRecipesView,
  mainViewCardContainer,
  singleRecipeView,
  searchBar,
  searchButton,
  searchByToggle,
};

