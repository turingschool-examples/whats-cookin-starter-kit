import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData } from './data/recipes';
// import { raw } from 'file-loader';
import Recipe from '../src/classes/Recipe'
import { ingredientsData } from './data/ingredients';

const getRandomId = () => {return Math.floor(Math.random()) * 41 + 1}
const users = []

// QuerySelectors
const allRecipesButton = document.querySelector('#recipe-button')
const favoriteButton = document.querySelector('#favorite-button')
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')
const radioSearchButton = document.querySelector('.radio-search-container')
const viewRecipeButton = document.querySelector('.view-recipe-button')
const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
const cardFavoriteButton = document.querySelector('.favorite-button')
const unFavoriteButton = document.querySelector('.un-favorite-button')

// EventListeners
favoriteButton.addEventListener('click',)
cookbookButton.addEventListener('click',)
radioSearchButton.addEventListener('click',)
viewRecipeButton.addEventListener('click',)
addToCookbookButton.addEventListener('click',)
cardFavoriteButton.addEventListener('click',)
unFavoriteButton.addEventListener('click',)

// Global Variables
let recipeRepo = new RecipeRepository(recipeData)
const newRecipe = new Recipe(ingredientsData)



function showAllRecipes() {
    recipeRepo.createAllRecipes()
    hide(searchBar)
    console.log('IT WOERKS')
}

allRecipesButton.addEventListener('click', showAllRecipes, console.log(recipeRepo.createAllRecipes()))

function show(element) {
  element.classList.remove('hidden');
};
function hide(element) {
  element.classList.add('hidden');
}