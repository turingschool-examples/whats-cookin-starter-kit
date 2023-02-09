import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import recipeData from './data/recipes.js';
// import MicroModal from 'micromodal'
import RecipeRepository from './classes/RecipeRepository';
import usersData from './data/users.js';
import User from './classes/User.js'
import ingredientsData from './data/ingredients.js'

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

var currentRecipes = []

window.onload = function() {
    for(var i = 0; i < recipeData.length; i++) {
        currentRecipes.push(recipeData[i])
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

function displayRecipes() {
    for(var i = 0; i < currentRecipes.length; i++) {
        recipeSection.innerHTML += 
        `
        <img src="${currentRecipes[i].image}" class="recipe"></img>
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
    for(var i = 0; i < recipeData.length; i++) {
        recipeSection.innerHTML += 
        `
        <img src="${recipeData[i].image}" class="recipe"></img>
        `
    }
}

function showFilteredRecipes(tag) {
    currentRecipes = []
    var filteredRecipes = recipeRepository.filterByTag(tag)
        for(var i = 0; i < filteredRecipes.length; i++) {
            currentRecipes.push(filteredRecipes[i])
        }
    displayRecipes()
}

function searchRecipeByName() {
    currentRecipes = []
    let filterByName = recipeRepository.filterByName(searchBar.value)
    let filteredRecipes = recipeRepository.filterByTag(searchBar.value)
        if(filterByName !== undefined) {
            for (var i = 0; i < filterByName.length; i++) {
                currentRecipes.push(filterByName[i]);
            }
        } else if(filteredRecipes !== undefined) {
            for(var i = 0; i < filteredRecipes.length; i++) {
                currentRecipes.push(filteredRecipes[i])
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

