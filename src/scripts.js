//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import ingredientsData from './data/ingredients.js'
import sampleRecipeData from './data/sample-recipes.js'
import { viewAll, viewAllRecipes, viewSalads, viewHordoeuvres, viewMains, viewSides, viewFilteredRecipes, viewRecipe, allRecipes 
 } from './domUpdates.js'

//Example of one way to import functions from the domUpdates file. You will delete these examples.
// import {exampleFunction1, exampleFunction2} from './domUpdates.js'

// exampleFunction1('heather')
// exampleFunction2('heather')

// console.log(ingredientsData)
const setUpRecipes = (event) => {
  viewFilteredRecipes(event)
  const recipes = allRecipes()
  recipes.forEach((recipe) => {
    recipe.addEventListener('click', viewRecipe)
  })
}

viewAll.addEventListener('click', viewAllRecipes)
viewSalads.addEventListener('click', function(event) {
  viewFilteredRecipes(event)})
viewHordoeuvres.addEventListener('click', function(event) {
  viewFilteredRecipes(event)})
viewMains.addEventListener('click', function(event) {
  viewFilteredRecipes(event)})
viewSides.addEventListener('click', function(event) {
  viewFilteredRecipes(event)})
