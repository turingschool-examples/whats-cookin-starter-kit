// DOM UPDATES
import './styles.css'
import './images/user.png';
import './images/home.png';
import './images/search.png';
import './images/restaurant.png';
import './images/bookmark.png';
import { toMyRecipeView , toDashboardView } from './domUpdates'


// QUERY SELECTORS
const myRecipesBtn = document.querySelector('#myRecipes');
const mainView = document.querySelector('#mainView');
const myRecipesView = document.querySelector('#myRecipeView');
const dashboardBtn = document.querySelector('#dashboardNav');

// EVENT LISTENERS
myRecipesBtn.addEventListener('click', toMyRecipeView)
dashboardBtn.addEventListener('click', toDashboardView)

export { mainView , myRecipesView }