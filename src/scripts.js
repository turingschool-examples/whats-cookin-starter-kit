import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import recipeData from './data/recipes.js';
import MicroModal from 'micromodal'
import RecipeRepository from './classes/RecipeRepository';
import usersData from './data/users.js';
import User from './classes/User.js'
import ingredientsData from './data/ingredients.js'
import Recipe from './classes/Recipe'
import Ingredients from './data/ingredients'
MicroModal.init()

var user 

var allTags = [
    'antipasti',    'starter',
    'snack',        'appetizer',
    'antipasto',    "hor d'oeuvre",
    'lunch',        'main course',
    'main dish',    'dinner',
    'sauce',        'side dish',
    'morning meal', 'brunch',
    'breakfast',    'salad',
    'condiment',    'dip',
    'spread'
  ]


const recipeRepository = new RecipeRepository(recipeData)
const navigationSection = document.querySelector(".navigation-section")
const recipeSection  = document.querySelector(".recipe-section")
const pantrySection = document.querySelector(".pantry-section")
const navigationSeciton = document.querySelector(".navigation-section")
const recipes = document.querySelector(".recipe")

var morningMeal = ['breakfast', 'morning meal, ']
var snack = ['dip',  'snack',  'appetizer']
var other = [ 'condiment', 'spread']
var mainDish = ['main dish', 'dinner', 'lunch']
var complimentaryDish = ['antipasti', 'hor d\'oeuvre', 'starter', 'salad', 'side dish',  'appetizer']

const topButton = document.querySelector("#top-button")
const allRecipes = document.querySelector("#recipe-button")
const breakfastFilter = document.querySelector("#breakfast-filter")
const snacksAppFilter = document.querySelector("#snack-appetizers-filter")
const brunchFilter = document.querySelector("#brunch-filter")
const mainDishFilter = document.querySelector("#main-dish-filter")
const compDishFilter = document.querySelector("#complimentary-dish-filter")
const searchBar = document.querySelector(".search-bar")
const searchGo = document.querySelector("#search-bar-go")
const pantryButton = document.querySelector("#your-pantry")
const buttons = document.querySelectorAll('button');
const recipeSection = document.querySelector('#recipe-section')
const recipeModal = document.querySelector('#modal')


for(var i of buttons) {
    i.addEventListener('click', function() {
        hideAll()
      });
}
topButton.addEventListener('click', function() {document.documentElement.scrollTop = 0})
allRecipes.addEventListener('click', showAllRecipes)
breakfastFilter.addEventListener('click', function() {showFilteredRecipes(morningMeal)})
snacksAppFilter.addEventListener('click', function() {showFilteredRecipes(snack)})
brunchFilter.addEventListener('click', function() {showFilteredRecipes(other)})
mainDishFilter.addEventListener('click', function() {showFilteredRecipes(mainDish)})
compDishFilter.addEventListener('click', function() {showFilteredRecipes(complimentaryDish)})
searchGo.addEventListener('click', function() {searchRecipeByName()})
pantryButton.addEventListener('click', displayPantry)
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
    generateRandUser()
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
    currentRecipe = recipeRepository.recipes.filter(recipe => recipe.id === currentRecipeId) 
    currentRecipe = new Recipe(currentRecipe[0])
}

function renderCurrentRecipe() {
    recipeModal.innerHTML = ''
    let ingredients = currentRecipe.determineRecipeIngredients(Ingredients)
    // const ingredientsQuantity = currentRecipe.map(recipe => recipe.ingredients.map(ingredient => ingredient.quantity))

    const ingredientsHTML = ingredients.map(ingredient => {
        return '<li>' + ingredient.ingredient + '</li>'
    }).join('')
    console.log(currentRecipe.instructions)

    const instructionsHTML = currentRecipe.returnInstructions().map(instruction => {
        return '<li>' + instruction + '</li>' 
    }).join('')
    recipeModal.innerHTML = 
    `
    <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            ${currentRecipe.name}
          </h2>
        </header>
        <main class="modal__content" id="modal-1-content">
          <img src="${currentRecipe.image}">
          <h3>Ingredients</h3>
          <ul>
            ${ingredientsHTML}
          </ul>
          <h3>Recipe Instructions</h3>
          <ol type="1">
            ${instructionsHTML}
          </ol>
          <h4>Recipe Cost:$${currentRecipe.calculateRecipeCost(Ingredients)}</h4>
          <button type="button" class="modal__btn">❤️</button>
          <button class="modal__close" aria-label="Close modal" data-micromodal-close>CLOSE</button>
        </main>
        `
        MicroModal.show('modal-1')
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

function displayPantry() {
    for(var i = 0; i < user.pantry.length; i++) {
        var currentIngredient = ingredientsData.findIndex(x => x.id === user.pantry[i].ingredient)
        pantrySection.innerHTML = 
        `
        <h1 class="pantry">${ingredientsData[currentIngredient].name}</h1>
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

function generateRandUser() {
    var num = Math.floor(Math.random() * usersData.length)
    user = new User(usersData[num])
}

function hideAll() {
    recipeSection.innerHTML = ''
    pantrySection.innerHTML = ''
}