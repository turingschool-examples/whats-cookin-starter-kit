//NOTE: Data model and non-dom manipulating logic will live in this file.
// query selectors and event listeners in here 

import './styles.css'
import { makeTagActive, pageLoadRenders, closeRecipe, showRecipe, switchView, searchForRecipes, updateUserRecipes, findRecipe, updateSaveButtons } from './domUpdates';
import { calculateRecipeCost, getIngredientAmounts, getInstructions } from './recipes'; 
import { ingredientsData } from './data/ingredients';
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
import './images/search-button.png'
import { assignCurrentUser, pageData, updateCurrentUser, currentUser } from './apiCalls';
import { updateRecipesToCook } from './users';
import { recipeData } from './data/recipes';

// import apiCalls from './apiCalls'

const recipeGrid = document.querySelector('.recipe-grid');
const landingPage = document.querySelector('.landing-page')
const allUserRecipes = document.querySelector('.all-user-recipes');
const clickedRecipe = document.querySelector('#clickedRecipe');
const closeRecipeButton = document.querySelector('#closeRecipe');
const tagArea = document.querySelector('.tag-area');
const ingredientsList = document.querySelector('#ingredientsList');
const chooseView = document.querySelector('.choose-view')
const ourViewBtn = document.querySelector("#our-recipes");
const yourViewBtn = document.querySelector("#your-recipes");
const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');
const modalAddBtn = document.querySelector('.add-recipe');
const modalRemoveBtn = document.querySelector('.remove-recipe');

// DATA MODEL 

//FUNCTIONS 
const getRecipeCard = (recipe) => {
  const recipeCard =  {
    id: recipe.id,
    instructions: getInstructions(recipe),
    ingredients: getIngredientAmounts(recipe, ingredientsData),
    image: recipe.image,
    name: recipe.name,
    price: calculateRecipeCost(recipe, ingredientsData)
  }
return recipeCard;
}

// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import ingredientsData from './data/ingredients.js'

// //Example of one way to import functions from the domUpdates file. You will delete these examples.
// import {exampleFunction1, exampleFunction2} from './domUpdates.js'
window.addEventListener("load", () => {
  assignCurrentUser();
  pageLoadRenders();
});

window.addEventListener('click', (event) => {
  updateUserRecipes(event)
})

tagArea.addEventListener("click", function(event) {
  if (event.target.classList && event.target.closest(".tag-card")) {
    makeTagActive(event);
  };
});

recipeGrid.addEventListener("click", (event) => {
  if (event.target.classList?.contains('individual-recipe')) {
    showRecipe(event.target);
  }
});

closeRecipeButton.addEventListener("click", closeRecipe);
chooseView.addEventListener("click", function(event) {
  if (event.target.classList.contains("unselected-view")) {
    switchView(event.target.id);
  }
});

searchBar.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    searchForRecipes();
  }
})

searchBtn.addEventListener('click', searchForRecipes);

modalAddBtn.addEventListener('click', (e) => {
  const recipe = findRecipe(recipeData, pageData.currentRecipeCard.id)
  updateCurrentUser(updateRecipesToCook(currentUser, recipe, 'add'))
  updateSaveButtons(recipe.id, modalAddBtn, modalRemoveBtn)
  updateSaveButtons(recipe.id, pageData.currentRecipeCard.outerAddBtn, pageData.currentRecipeCard.outerRemoveBtn)  
});

modalRemoveBtn.addEventListener('click', (e) => {
  const recipe = findRecipe(recipeData, pageData.currentRecipeCard.id)
  updateCurrentUser(updateRecipesToCook(currentUser, recipe, 'remove'))
  updateSaveButtons(recipe.id, modalAddBtn, modalRemoveBtn)
  updateSaveButtons(recipe.id, pageData.currentRecipeCard.outerAddBtn, pageData.currentRecipeCard.outerRemoveBtn)  
});

// Exports
export {
  recipeGrid,
  tagArea,
  clickedRecipe,
  getRecipeCard,
  ingredientsList,
  landingPage,
  ourViewBtn,
  yourViewBtn,
  allUserRecipes,
  chooseView,
  searchBar,
  modalAddBtn, 
  modalRemoveBtn
}
