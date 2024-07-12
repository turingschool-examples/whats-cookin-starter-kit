//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/food.png'

import recipeData from './data/recipes'
import ingredientsData from './data/ingredients'
import { findRecipeIngredients } from './recipes';
import { displayRecipes, userInput, displayResults } from './domUpdates'

