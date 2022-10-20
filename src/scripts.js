import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Recipe from './classes/Recipe';
import RecipeRepository from './classes/RecipeRepository'



let allRecipesButton = document.querySelector(".all-recipes-button");
let allRecipesPage = document.querySelector(".all-recipes-page");
let homePage = document.querySelector(".home-page")


allRecipesButton.addEventListener("click", viewAllRecipes)



function viewAllRecipes() {
    addHidden(homePage)
    removeHidden(allRecipesPage)

}


function addHidden(element) {
    element.classList.add("hidden")
};

function removeHidden(element) {
    element.classList.remove("hidden")
};



