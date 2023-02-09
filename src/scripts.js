import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import recipeData from './data/recipes.js';
import MicroModal from 'micromodal'
import RecipeRepository from './classes/RecipeRepository';
MicroModal.init()
const recipeRepository = new RecipeRepository(recipeData)
const navigationSection = document.querySelector(".navigation-section")


const topButton = document.querySelector("#top-button")
const allRecipes = document.querySelector("#recipe-button")
const breakfastFilter = document.querySelector("#breakfast-filter")
const snacksAppFilter = document.querySelector("#snack-appetizers-filter")
const brunchFilter = document.querySelector("#brunch-filter")
const mainDishFilter = document.querySelector("#main-dish-filter")
const compDishFilter = document.querySelector("#complimentary-dish-filter")
const searchBar = document.querySelector(".search-bar")
const searchGo = document.querySelector("#search-bar-go")
const recipeSection = document.querySelector('#recipe-section')
const recipeModal = document.querySelector('#modal')

topButton.addEventListener('click', function() {document.documentElement.scrollTop = 0})
allRecipes.addEventListener('click', showAllRecipes)
breakfastFilter.addEventListener('click', function() {showFilteredRecipes('breakfast')})
snacksAppFilter.addEventListener('click', function() {showFilteredRecipes('snack')})
brunchFilter.addEventListener('click', function() {showFilteredRecipes('brunch')})
mainDishFilter.addEventListener('click', function() {showFilteredRecipes('main dish')})
compDishFilter.addEventListener('click', function() {showFilteredRecipes('appetizer')})
searchGo.addEventListener('click', function() {searchRecipeByName()})
recipeSection.addEventListener('click', (event) => {
    assignCurrentRecipe(event)
    renderCurrentRecipe()
})

let currentDisplayedRecipes = []
let currentRecipeId
let currentRecipe

window.onload = function() {
    for(var i = 0; i < recipeData.length; i++) {
        currentDisplayedRecipes.push(recipeData[i])
    }
    popularRecipes()
}

window.onscroll = function() {
    if (document.documentElement.scrollTop > 350) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
    }
    // if (document.documentElement.scrollTop > 280) {
    //     navigationSeciton.style.position = "fixed"
    //     navigationSection.style.marginTop = "10px"
    // } else {
    //     navigationSeciton.style.position = "relative"
    // }
}
function assignCurrentRecipe(event) {
    if (event.target.dataset.allRecipes) {
        currentRecipeId = event.target.dataset.allRecipes
    }
    else {
        currentRecipeId = event.target.parentElement.dataset.allRecipes
    }
    if (!currentRecipeId) {
        return
    }

    currentRecipeId = parseInt(currentRecipeId)
    currentRecipe = recipeRepository.recipes.find(recipe => recipe.id === currentRecipeId)
}

function renderCurrentRecipe() {
    console.log(currentRecipe)
    recipeModal.innerHTML = ''
    recipeModal.innerHTML = `
    
    //populate the modal with current recipe
    //show the modal
}

function displayRecipes() {
    recipeSection.innerHTML = ''
    for(var i = 0; i < currentDisplayedRecipes.length; i++) {
        recipeSection.innerHTML += 
        `
        <img src="${currentDisplayedRecipes[i].image}" class="recipe"></img>
        `
    }
}

function popularRecipes() {
    for(var i = 0; i < 10; i++) {
        recipeSection.innerHTML += 
        `
        <img src="${recipeData[i].image}" class="recipe"></img>
        `
    }
}

function showAllRecipes() {
    recipeSection.innerHTML = ''
    recipeData.forEach(recipe => {
        recipeSection.innerHTML += 
        `
        <section class='recipe' data-all-recipes='${recipe.id}'>
        <h3 id='${recipe.id}' class='small-recipe-text'>${recipe.name}</h3>
        <img src="${recipe.image}" class="recipe-img">
        </section>
        `
    })
}

function showFilteredRecipes(tag) {
    currentDisplayedRecipes = []
    var filteredRecipes = recipeRepository.filterByTag(tag)
        for(var i = 0; i < filteredRecipes.length; i++) {
            currentDisplayedRecipes.push(filteredRecipes[i])
        }
    displayRecipes()
}

function searchRecipeByName() {
    currentDisplayedRecipes = []
    let filterByName = recipeRepository.filterByName(searchBar.value)
    let filteredRecipes = recipeRepository.filterByTag(searchBar.value)
        if(filterByName !== undefined) {
            for (var i = 0; i < filterByName.length; i++) {
                currentDisplayedRecipes.push(filterByName[i]);
            }
        } else if(filteredRecipes !== undefined) {
            for(var i = 0; i < filteredRecipes.length; i++) {
                currentDisplayedRecipes.push(filteredRecipes[i])
            }
        } else {
            recipeSection.innerHTML = `<p>NO RESULTS</p>`
        }

    displayRecipes();
}

