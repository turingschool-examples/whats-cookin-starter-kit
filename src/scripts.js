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
import Ingredient from './classes/Ingredient';

const config = {
    type:'carousel',
    startAt: 0,
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
const recipeDetailImage = document.querySelector('#recipeDetail')
const recipeDetailTitle = document.querySelector('h2')
const recipeInstructions = document.querySelector('.details')
const ingredientNames = document.querySelector('.ingredient-list-names')
const totalCost = document.querySelector('.total-cost')

let newRecipeIngredient;

viewAllButton.addEventListener('click', showViewAllPage)
homeButton.addEventListener('click', showHomePage)
favoritesButton.addEventListener('click', showFavoritesPage)
allRecipesContainer.addEventListener('click', function(event) {
    showRecipeDetailsPage(event)
  })
// viewAllRecipeIconImage.addEventListener('event', () => {
//     console.log('event')
// })

function showViewAllPage() {
    homePageView.classList.add('hidden')
    viewAllPage.classList.remove('hidden')
    recipeDetailsPage.classList.add('hidden')
    homeButton.classList.remove('hidden')
}

function showHomePage() {
    homePageView.classList.remove('hidden')
    viewAllPage.classList.add('hidden')
    recipeDetailsPage.classList.add('hidden')
    homeButton.classList.add('hidden')
}

showHomePage()

function showFavoritesPage() {
    homePageView.classList.add('hidden')
    viewAllPage.classList.add('hidden')
    recipeDetailsPage.classList.add('hidden')
}

function populateAllRecipes() {
    recipeData.forEach(recipe => {
    //glideRecipes.src += `${recipe.image}`
    viewAllPage.childNodes[3].innerHTML += `<section class="recipe-icon">
    <img class="view-all-recipe-image" src="${recipe.image}" alt="random-recipe-image">
    <p>
      ${recipe.name}
    </p>
  </section>`

    glideRecipes.innerHTML += `<li class="glide__slide"><img class="view-all-recipe-image" src="${recipe.image}"></li>`
})
 console.log(glideRecipes.innerHTML)
}

populateAllRecipes()

function showRecipeDetailsPage(event) {
    if (event.target.classList.contains('view-all-recipe-image')){
        const getTitle = recipeData.filter(recipe => 
            event.target.src === recipe.image
        )
        let recipe = new Recipe(getTitle[0], ingredientsData)
    //     let ingredients = ingredientsData.forEach(ingredient => {
    //         if(ingredient.id === recipe.ingredients.id) {
    //             newRecipeIngredient = new Ingredient(ingredient.id, ingredient.name, ingredient.estimatedCostInCents)
    //     }
    // })
        //let recipe = new Recipe(getTitle[0], newRecipeIngredient)
         //let recipe = new Recipe(getTitle[0], ingredients)
        homePageView.classList.add('hidden')
        viewAllPage.classList.add('hidden')
        recipeDetailsPage.classList.remove('hidden')
        recipeDetailImage.src = `${event.target.src}`
        recipeDetailTitle.innerText = `${getTitle[0].name}`
        let directions = recipe.listDirections()
        recipeInstructions.innerText = `${directions}`
        console.log('ingredients', recipe.determineIngredientNames())
        ingredientNames.innerText = `${recipe.determineIngredientNames()}`
        totalCost.innerText = `${recipe.determineCostOfAllIngredients()}`
    }
}

// function createTags() {

// }

// createTags()

// 
// const recipe = new Recipe(recipeData, ingredientsData)
//instatiate a new recipe using data sets as arguments?
//for each recipe that we are passing through from the data, create new recipe instance
