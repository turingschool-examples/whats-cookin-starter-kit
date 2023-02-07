import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import recipeData from './data/recipes.js';
import MicroModal from 'micromodal'
import RecipeRepository from './classes/RecipeRepository';

const recipeSection  = document.querySelector(".recipe-section")
const navigationSeciton = document.querySelector(".navigation-section")
const recipes = document.querySelector(".recipe")

const breakfast = document.querySelector("#breakfast-filter")

breakfast.addEventListener('click',  null)

var currentRecipes = []

window.onload = function() {
    for(var i = 0; i < recipeData.length; i++) {
        currentRecipes.push(recipeData[i])
    }
    addRecipes()
}
window.onscroll = function() {
    if (document.documentElement.scrollTop > 280) {
        navigationSeciton.style.position = "sticky"
        navigationSection.style.marginTop = "10px"
    } else {
        navigationSeciton.style.position = "relative"
    }
}

function addRecipes() {
    for(var i = 0; i < currentRecipes.length; i++) {
        recipeSection.innerHTML += 
        `
        <img src="${recipeData[i].image}" class="recipe"></img>
        `
    }

function filterRecipes() {
    filteredRecipes = RecipeRepository.filterByTag(tag)
    currentRecipes = []
    for(var i = 0; i < filteredRecipes.length; i++) {
        currentRecipes.push[i]
    }
}
}
