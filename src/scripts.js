
//Imports
import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Recipe from '../src/classes/Recipe';
import Ingredients from '../src/classes/Ingredients';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/recipes';

//QuerySelector
const currentRecipeName = document.querySelector(".current-recipe-name")
const currentRecipeImage = document.querySelector(".image-parent-main")
const leftRandomImageCard = document.querySelector(".left-random-card")
const middleRandomImageCard = document.querySelector(".middle-random-card")
const rightRandomImageCard = document.querySelector(".right-random-card")

const viewAllRecipesButton = document.querySelector(".view-all-recipes")
const homeButton = document.querySelector(".home-button")

const allRecipesView = document.querySelector(".all-recipes-view")
const homeView = document.querySelector(".home-view")
const selectedRecipeView = document.querySelector(".selected-recipe-view")
const searchedRecipeView = document.querySelector(".searched-recipe-view")


//Instances
let currentRecipe
let randomRecipes
let allRecipes
let selectedRecipe
// let hiddenElements = [allRecipesView,homeButton,selectedRecipeView,searchedRecipeView]


//Functions
const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length + 1);
};

function hideElement (hideThis) {
    // if (!hiddenElements.includes(hideThis)) {
    //     hiddenElements.push(hideThis)
    // }
    // hiddenElements.forEach(element => element.classList.add('hidden'))
    hideThis.classList.add("hidden")
}

function showElement (showThis) {
    // if (hiddenElements.includes(showThis)) {
    //     showThis.classList.remove('hidden')
    //     hiddenElements.splice(showThis,1)
    // }
    showThis.classList.remove("hidden")
}

function loadHandler(){
    onLoadRecipe()
    generateRandomRecipes()
    generateAllRecipes()
}

function clickHandler(){
    
}

function generateAllRecipes () {
    allRecipes = new RecipeRepository(recipeData)
    console.log("all recipes array", allRecipes)
}

function onLoadRecipe(){
    currentRecipe = new Recipe(recipeData[getRandomIndex(recipeData)])
    console.log(currentRecipe)
    showMainRecipe()
}

function generateRandomRecipes(){
    randomRecipes = []
    let randomRecipe1 = new Recipe(recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe1)
    let randomRecipe2 = new Recipe(recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe2)
    let randomRecipe3 = new Recipe(recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe3)

    showMainRandomRecipes()
    console.log(randomRecipes)
}

function showMainRecipe(){
    currentRecipeName.innerHTML = `${currentRecipe.name}`
    currentRecipeImage.innerHTML = `<img class="current-recipe-image" img
    src=${currentRecipe.image}>`
}

// function updateMainRecipeImage(){
//     currentRecipeImage.innerHTML = `<img class="current-recipe-image" img
//     src=${currentRecipe.image}>`
// }

function showMainRandomRecipes(){
    leftRandomImageCard.innerHTML = `<img class="left-random-image" img src=${randomRecipes[0].image}>
    <h1 class="left-random-name">${randomRecipes[0].name}</h1>`
    middleRandomImageCard.innerHTML = `<img class="middle-random-image" img src=${randomRecipes[1].image}>
    <h1 class="middle-random-name">${randomRecipes[1].name}</h1>`
    rightRandomImageCard.innerHTML = `<img class="right-random-image" img src=${randomRecipes[2].image}>
    <h1 class="right-random-name">${randomRecipes[2].name}</h1>`
}

function viewSelectedRecipe () {
    hideElement(homeView)
    hideElement(searchedRecipeView)
    hideElement(allRecipesView)
    showElement(selectedRecipeView)
    showElement(homeButton)
    showElement(viewAllRecipesButton)
    showSelectedRecipe()
}

function showSelectedRecipe() {
    selectedRecipeView.innerHTML = `
    <section class="selected-recipe-container">
    <img class="selected-recipe-image" img src=${selectedRecipe.image}>
    <h1 class="name">${selectedRecipe.name}</h1>
    <h2 class="cost">Cost: ${selectedRecipe.getIngredientsCost()} cent</h2>
    <h3 class="ingredients-list">${selectedRecipe.ingredientsNeeded()}</h3>
    <h4 class="instructions-list">${selectedRecipe.getInstructions()}</h4>
  </section>`
}

function viewAllRecipes () {
    allRecipes.recipesList.forEach(element => 
        allRecipesView.innerHTML+= `<h1 id=${element.id}>${element.name}</h1>`
    )
    hideElement(viewAllRecipesButton)
    hideElement(homeView)
    showElement(allRecipesView)
    showElement(homeButton)
}

function viewHome () {
    showElement(homeView)
    showElement(viewAllRecipesButton)
    hideElement(homeButton)
    hideElement(allRecipesView)
}

//EventListener
window.addEventListener("load", loadHandler())
homeButton.addEventListener("click", function(event) {
    event.preventDefault()
    viewHome()
})

viewAllRecipesButton.addEventListener("click", function (event){
    event.preventDefault()
    viewAllRecipes()
})

allRecipesView.addEventListener("click", function (event) {
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    console.log("selected Recipe", selectedRecipe)
    viewSelectedRecipe()
})