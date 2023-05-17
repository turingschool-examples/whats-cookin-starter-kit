// DOM UPDATES
import './styles.css'
import './images/user.png';
import './images/home.png';
import './images/search.png';
import './images/restaurant.png';
import './images/bookmark.png';
import './images/bookmark-filled.png'

import { toMyRecipeView , toDashboardView, renderRecipeCards, toggleBookmark, renderEnlargedRecipeCard } from './domUpdates'
import {recipeData} from './data/recipes'
import { getRandomUser } from './users';
import { sampleIngredientsData } from '../test/sampleIngredients';
import { sampleUserData } from '../test/sampleUsers';
import { recipesToCook, removeRecipes
 } from './recipes-to-cook';


//GLOBAL VARIABLE
let currentUser

// QUERY SELECTORS
const myRecipesBtn = document.querySelector('#myRecipes');
const mainView = document.querySelector('#mainView');
const myRecipesView = document.querySelector('#myRecipeView');
const dashboardBtn = document.querySelector('#dashboardNav');
const mainViewCardContainer = document.querySelector('#mainViewCardContainer');
const enlargedRecipeView = document.querySelector('#enlargedRecipeView');

// EVENT LISTENERS
myRecipesBtn.addEventListener('click', toMyRecipeView)
dashboardBtn.addEventListener('click', toDashboardView)
mainViewCardContainer.addEventListener('click', (e) => {
  toggleBookmark(e, currentUser)
})
window.addEventListener('load', () => {
  currentUser = getRandomUser(sampleUserData)
})

// FUNCTIONS
renderRecipeCards(mainViewCardContainer, recipeData)

export { 
  mainView,
  myRecipesView,
  mainViewCardContainer,
  enlargedRecipeView,
  currentUser
}