import './styles.css';
// import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/star-icon.png'

import Recipe from './classes/Recipe'
import RecipeRepository from './classes/RecipeRepository'
import ingredientsData from './data/ingredients'
import recipeData from './data/recipes'

// global variables
const recipeSection = document.getElementById('allRecipes')
const recipeRepo = new RecipeRepository(recipeData)


//event listeners
window.addEventListener('load', createRecipeCards)



//functions
function createRecipeCards() {
    recipeRepo.recipes.forEach(recipe => {
        let size = (2 - (recipe.length / 65)).toFixed(2)
        recipeSection.innerHTML += `
        <article class="recipe-card" id="${recipe.id}">
            <img class="recipe-img" src="${recipe.image}" alt="picture of ${recipe.name}">
            <img class="star-icon hidden" id="star-icon" src="./images/star-icon.png" alt="This recipe is in my recipes!">
            <h3 style="font-size: ${size}rem">${recipe.name}</h3>
        </article>`
    })
}