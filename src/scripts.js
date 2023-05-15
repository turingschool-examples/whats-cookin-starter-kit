// DOM UPDATES
import './styles.css'
import './images/user.png';
import './images/home.png';
import './images/search.png';
import './images/restaurant.png';
import './images/bookmark.png';
import './images/bookmark-filled.png'

import { toMyRecipeView , toDashboardView, renderRecipeCards, toggleBookmark } from './domUpdates'
import {recipeData} from './data/recipes'


// QUERY SELECTORS
const myRecipesBtn = document.querySelector('#myRecipes');
const mainView = document.querySelector('#mainView');
const myRecipesView = document.querySelector('#myRecipeView');
const dashboardBtn = document.querySelector('#dashboardNav');
const mainViewCardContainer = document.querySelector('#mainViewCardContainer');

// EVENT LISTENERS
myRecipesBtn.addEventListener('click', toMyRecipeView)
dashboardBtn.addEventListener('click', toDashboardView)
mainViewCardContainer.addEventListener('click', (e) => {
  toggleBookmark(e)})

// FUNCTIONS
renderRecipeCards(mainViewCardContainer, recipeData)

export { mainView , myRecipesView, mainViewCardContainer }