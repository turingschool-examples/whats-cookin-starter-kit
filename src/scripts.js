//NOTE: Data model and non-dom manipulating logic will live in this file.
// query selectors and event listeners in here 

import './styles.css'
import { renderGrid, makeTagActive, pageLoadRenders } from './domUpdates'
import './images/antipasti.png';
import './images/antipasto.png'
import './images/appetizer.png'
import './images/breakfast.png'
import './images/brunch.png'
import './images/condiment.png'
import './images/dinner.png'
import './images/dip.png'
import "./images/hor d'oeuvre.png"
import './images/lunch.png'
import './images/main course.png'
import './images/main dish.png'
import './images/morning meal.png'
import './images/salad.png'
import './images/sauce.png'
import './images/side dish.png'
import './images/snack.png'
import './images/spread.png'
import './images/starter.png'

// import apiCalls from './apiCalls'

const recipeGrid = document.querySelector('.recipe-grid');
const tagArea = document.querySelector('.tag-area');


// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import ingredientsData from './data/ingredients.js'

// //Example of one way to import functions from the domUpdates file. You will delete these examples.
// import {exampleFunction1, exampleFunction2} from './domUpdates.js'
window.addEventListener("load", pageLoadRenders)
tagArea.addEventListener("click", function(event) {
  if (event.target.classList && event.target.closest(".tag-card")) {
    makeTagActive(event);
  };
});
// Exports
export {
  recipeGrid,
  tagArea
}
