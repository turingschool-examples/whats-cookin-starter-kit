//Imports
import './styles.css';
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User'

//QuerySelector
const currentRecipeName = document.querySelector(".current-recipe-name")
const currentRecipeImage = document.querySelector(".image-parent-main")
const leftRandomImageCard = document.querySelector(".left-random-card")
const middleRandomImageCard = document.querySelector(".middle-random-card")
const rightRandomImageCard = document.querySelector(".right-random-card")
const tagSearchResults = document.querySelector(".tag-search-results")
const nameSearchResults = document.querySelector(".name-search-results")
const selectedRecipeInfo = document.querySelector(".selected-recipe-info")
const savedRecipes = document.querySelector(".saved-recipes")

const viewAllRecipesButton = document.querySelector(".view-all-recipes")
const homeButton = document.querySelector(".home-button")
const searchButton = document.querySelector(".submit-search-button")
const searchInput = document.querySelector("#searchBar")
const addFavoriteButton = document.querySelector(".add-to-favorites-button")

const allRecipesView = document.querySelector(".all-recipes-view")
const homeView = document.querySelector(".home-view")
const selectedRecipeView = document.querySelector(".selected-recipe-view")
const searchedRecipeView = document.querySelector(".searched-recipe-view")


//Global Variables
let currentRecipe
let randomRecipes
let allRecipes
let selectedRecipe
let ingredientsData
let recipeData
let usersData
let usersList = []
let currentUser

//Functions
const fetchApiCalls = () => {
    apiCalls.fetchData().then(data => {
      ingredientsData = data[0].ingredientsData;
      recipeData = data[1].recipeData;
      usersData = data[2].usersData;

      loadHandler();
    });
  };

const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length);
};

function hideElement (hideThis) {
    hideThis.classList.add("hidden")
}

function showElement (showThis) {
    showThis.classList.remove("hidden")
}

function loadHandler(){
    onLoadRecipe()
    generateRandomRecipes()
    generateAllRecipes()
    generateUsersList()
    generateCurrentUser()
}

function generateCurrentUser() {
    currentUser = new User (usersList[getRandomIndex(usersList)]) 
    console.log("currentUser",currentUser)
}


function generateUsersList () {
    usersData.forEach((user) => {
      let userClass = new User (user)
      usersList.push(userClass)
    })
    console.log("usersList full of user class instances",usersList)
}


function generateAllRecipes () {
    allRecipes = new RecipeRepository(ingredientsData,recipeData)
}

function onLoadRecipe(){
    currentRecipe = new Recipe(ingredientsData, recipeData[getRandomIndex(recipeData)])
    showMainRecipe()
}

function generateRandomRecipes(){
    randomRecipes = []
    let randomRecipe1 = new Recipe(ingredientsData, recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe1)
    let randomRecipe2 = new Recipe(ingredientsData, recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe2)
    let randomRecipe3 = new Recipe(ingredientsData, recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe3)

    showMainRandomRecipes()
}

function showMainRecipe(){
    currentRecipeName.innerHTML = `${currentRecipe.name}`
    currentRecipeImage.innerHTML = `<img class="current-recipe-image" id="${currentRecipe.id}" img
    src=${currentRecipe.image}>`
}

function showMainRandomRecipes(){
    leftRandomImageCard.innerHTML = `<img class="left-random-image" id="${randomRecipes[0].id}" img src=${randomRecipes[0].image}>
    <h1 class="left-random-name">${randomRecipes[0].name}</h1>`
    middleRandomImageCard.innerHTML = `<img class="middle-random-image" id="${randomRecipes[1].id}" img src=${randomRecipes[1].image}>
    <h1 class="middle-random-name">${randomRecipes[1].name}</h1>`
    rightRandomImageCard.innerHTML = `<img class="right-random-image" id="${randomRecipes[2].id}" img src=${randomRecipes[2].image}>
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
    selectedRecipeInfo.innerHTML = `
    <section class="selected-recipe-container">
    <img class="selected-recipe-image" img src=${selectedRecipe.image}>
    <h1 class="name">${selectedRecipe.name}</h1>
    <h2 class="cost">Cost: ${selectedRecipe.getIngredientsCost()} cent</h2>
    <h3 class="ingredients-list"> Ingredients </h3>
    <h4 class="instructions-list"> Instructions </h4>
    </section>`
    showInstructions()
    showIngredients()
}

function showIngredients() {
    const selectedRecipeIngredients = document.querySelector(".ingredients-list")

    selectedRecipe.modifiedData.forEach(element =>
        selectedRecipeIngredients.innerHTML += 
        `<h3 class="ingredient-item">${element.quantity.amount} ${element.quantity.unit} ${element.name} <br></h3>`
    )
}

function showInstructions() {
    const selectedRecipeInstructions = document.querySelector(".instructions-list")

    selectedRecipe.instructions.forEach(element =>
        selectedRecipeInstructions.innerHTML += 
        `<h3 class="instruction-item"> Step: ${element.number} <br>${element.instruction}</h3>`
    )
}

function viewSearchedRecipes() {
    nameSearchResults.innerHTML = ""
    tagSearchResults.innerHTML = ""
    let searchTerm = searchInput.value 
    let tagResults = []
    let nameResults = []
    tagResults = allRecipes.filterByTag(searchTerm)
    nameResults = allRecipes.filterByName(searchTerm)
    if (nameResults.length === 0 && tagResults.length === 0) {
        tagSearchResults.innerHTML = `<h1>There are no results for your search, please try a different search</h1>`
    }
    nameResults.forEach(element => 
        nameSearchResults.innerHTML+= `<h1 id=${element.id}>${element.name}</h1>`)
    tagResults.forEach(element => 
        tagSearchResults.innerHTML+= `<h1 id=${element.id}>${element.name}</h1>`)
    hideElement(selectedRecipeView)
    hideElement(homeView)
    showElement(searchedRecipeView)
    showElement(homeButton)
}

function addRecipeToFavorites() {
    currentUser.favorites.forEach( element =>
        savedRecipes.innerHTML += `<h1 id=${element.id}>${element.name}</h1>`

    )
}

function viewAllRecipes () {
    showElement(allRecipesView)
    allRecipes.recipesList.forEach(element => 
        allRecipesView.innerHTML+= `<h1 id=${element.id}>${element.name}</h1>`
    )
    hideElement(viewAllRecipesButton)
    hideElement(homeView)
    hideElement(selectedRecipeView)
    showElement(homeButton)
}

function viewHome () {
    showElement(homeView)
    showElement(viewAllRecipesButton)
    hideElement(homeButton)
    hideElement(allRecipesView)
    hideElement(selectedRecipeView)
}

//EventListener
window.addEventListener("load", fetchApiCalls())
homeButton.addEventListener("click", function(event) {
    event.preventDefault()
    viewHome()
})

viewAllRecipesButton.addEventListener("click", function (event){
    event.preventDefault()
    viewAllRecipes()
})

allRecipesView.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

searchedRecipeView.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

currentRecipeImage.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

leftRandomImageCard.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

middleRandomImageCard.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

rightRandomImageCard.addEventListener("click", function (event) {
    event.preventDefault()
    selectedRecipe = allRecipes.recipesList.find(recipe => recipe.id == event.target.id)
    viewSelectedRecipe()
})

searchButton.addEventListener("click", function(event){
    event.preventDefault()
    viewSearchedRecipes()
})

addFavoriteButton.addEventListener("click", function (event) {
    event.preventDefault()
    currentUser.addToFavorites(selectedRecipe)
    console.log("currentUser.favorites", currentUser.favorites)
    addRecipeToFavorites()
})
