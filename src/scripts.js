//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// import foodImage from './images/food.png'
// import foodImageTwo from './images/food-two.png'

// document.querySelector('.headerImg').src = foodImage
// document.querySelector('.headerImgTwo').src = foodImageTwo

// document.body.appendChild(img)

// import foodImgOne from './data/recipes'
// document.querySelector('.img-one').src = foodImgOne

// document.body.appendChild(img)
import recipeData from './data/recipes'
import ingredientsData from './data/ingredients'
// Below are examples of how you can import functions from either the recipes or domUpdates files.
import { findRecipeIngredients } from './recipes';
import { displayRecipes, userInput, displayResults } from './domUpdates'

console.log(ingredientsData)
findRecipeIngredients("Dirty Steve's Original Wing Sauce")
// displayRecipes();