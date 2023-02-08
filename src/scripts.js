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
const modalSection = document.getElementById('recipeModalBackground')

//event listeners
window.addEventListener('load', createRecipeCards)
recipeSection.addEventListener('click', createRecipeModal)


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

function createRecipeModal(event) {
let recipeID = event.target.c
   modalSection.innerHTML = `
    <div class="recipe-popup">
    <h2>${}</h2>
    <div class="image-ingredients">
      <img class="recipe-img" src="../src/images/cookies-placeholder.jpeg" alt="Cookies placeholder">
      <ul class="ingredient-list">
        <h3>Ingredients:</h3>
        <li>1.5 cups - wheat flour</li>
    </ul>
  </div>
    <ol class="direction-list">
      <h3>Directions:</h3>
      <li>In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.</li>
  </ol>
  <h2>TOTAL COST $10</h1>
  </div>`
}