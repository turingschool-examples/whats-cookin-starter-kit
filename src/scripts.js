import './styles.css'
import './images/cookingbannerv3.png'
import apiCalls from './apiCalls'

import { getIngredients, getRecipes, getUsers } from './apiCalls';

// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import recipeData from './data/recipes';
// import ingredientsData from './data/ingredients'
// Below are examples of how you can import functions from either the recipes or domUpdates files.
import { displayRecipesHome, goToRecipe } from './domUpdates';

export let recipesToCook = [];

export function getRandomIndex(data) {
  return Math.floor(Math.random() * data.length);
}

//// Fisher-Yates shuffle Algorithm ////
export function shuffledRecipes(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
}