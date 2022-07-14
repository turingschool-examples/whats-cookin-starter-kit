import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';

const getRandomId = () => {return Math.floor(Math.random()) * 41 + 1}
const users = []

// QuerySelectors
const allRecipesButton = document.querySelector('#recipe-button')
const favoriteButton = document.querySelector('#favorite-button')
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')

// EventListeners
allRecipesButton.addEventListener('click', showAllRecipes)

// Global Variables
let recipeRepo = new RecipeRepository()

function showAllRecipes() {
    recipeRepo.createAllRecipes()
    hide(searchBar)
}


function show(element) {
  element.classList.remove('hidden');
};
function hide(element) {
  element.classList.add('hidden');
}