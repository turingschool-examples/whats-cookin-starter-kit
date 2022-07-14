import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import { ingredientsData } from './data/ingredients'
import { recipeData } from './data/recipes'

import Glide from '@glidejs/glide'

import "/node_modules/@glidejs/glide/dist/css/glide.core.min.css"
import "/node_modules/@glidejs/glide/dist/css/glide.theme.min.css"

import RecipeRepository from './classes/RecipeRepository.js'

import Recipe from './classes/recipe'

const config = {
    type:'carousel',
    perView: 3
}

new Glide('.glide', config).mount()

let recipeRepository = new RecipeRepository(recipeData)

const viewAllButton = document.querySelector('#viewAllButton')
const homePageView = document.querySelector('.home-page-view')
const viewAllPage = document.querySelector('.view-all-page')
const homeButton = document.querySelector('#homeButton')
const favoritesButton = document.querySelector('#favoritesButton')
const glideRecipes = document.querySelector('.glide__slides')
const recipeDetailsPage = document.querySelector('.recipe-details-page')
const allRecipesContainer = document.querySelector('.all-recipes')

viewAllButton.addEventListener('click', showViewAllPage)
homeButton.addEventListener('click', showHomePage)
favoritesButton.addEventListener('click', showFavoritesPage)
allRecipesContainer.addEventListener('click', function(event) {
    console.log(event.target)
    showRecipeDetailsPage(event)
  })
// viewAllRecipeIconImage.addEventListener('event', () => {
//     console.log('event')
// })

function showViewAllPage() {
    homePageView.classList.add('hidden')
    viewAllPage.classList.remove('hidden')
    recipeDetailsPage.classList.add('hidden')
}

function showHomePage() {
    homePageView.classList.remove('hidden')
    viewAllPage.classList.add('hidden')
    recipeDetailsPage.classList.add('hidden')
}

function showFavoritesPage() {
    homePageView.classList.add('hidden')
    viewAllPage.classList.add('hidden')
    recipeDetailsPage.classList.add('hidden')
}

function populateAllRecipes() {
    recipeData.forEach(recipe => {
    viewAllPage.childNodes[3].innerHTML += `<section class="recipe-icon">
    <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image">
    <p>
      ${recipe.name}
    </p>
  </section>`
    // glideRecipes.innerHTML += `<li class="glide__slide"><img class="recipe-icon-image" src="${recipe.image}"></li>`
})
// console.log(glideRecipes.innerHTML)
}

populateAllRecipes()

function showRecipeDetailsPage(event) {
    if (event.target.classList.contains('view-all-recipe-image')){
        homePageView.classList.add('hidden')
        viewAllPage.classList.add('hidden')
        recipeDetailsPage.classList.remove('hidden')
    }
    
}

// 
// const recipe = new Recipe(recipeData, ingredientsData)
//instatiate a new recipe using data sets as arguments?
//for each recipe that we are passing through from the data, create new recipe instance
