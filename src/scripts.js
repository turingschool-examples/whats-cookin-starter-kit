
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
const currentRecipeImage = document.querySelector(".current-recipe-image")
const currentRecipeIngredients = document.querySelector(".current-recipe-ingredients")
const leftRandomImageCard = document.querySelector(".left-random-card")
const middleRandomImageCard = document.querySelector(".middle-random-card")
const rightRandomImageCard = document.querySelector(".right-random-card")




//Instances
let currentRecipe
let randomRecipes




//Functions
const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length + 1);
  };

function loadHandler(){
    onLoadRecipe()
    generateRandomRecipes()
}

function clickHandler(){
    
}

function onLoadRecipe(){
    currentRecipe = new Recipe(recipeData[0])
    console.log(currentRecipe)
    updateMainRecipeName()
    updateMainRecipeImage()
}

function generateRandomRecipes(){
    randomRecipes = []
    let randomRecipe1 = new Recipe(recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe1)
    let randomRecipe2 = new Recipe(recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe2)
    let randomRecipe3 = new Recipe(recipeData[getRandomIndex(recipeData)])
    randomRecipes.push(randomRecipe3)

    console.log(randomRecipes)
}

function updateMainRecipeName(){
    currentRecipeName.innerHTML = `${currentRecipe.name}`
}





console.log('Hello world');
//EventListener
window.addEventListener("load", loadHandler())