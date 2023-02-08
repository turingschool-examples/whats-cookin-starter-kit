// import './styles.css';
// import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import './classes/Recipe'
import './classes/RecipeRepository'

// global variables
const recipeSection = document.getElementById('allRecipes')





//event listeners
window.addEventListener('load', createRecipeCards)



//functions
function createRecipeCards() {
    let count = 0
    recipeNames.forEach(recipe => {
        count++
        let size = (2 - (recipe.length / 65)).toFixed(2)
        recipeSection.innerHTML += `
        <article class="recipe-card" id="recipe${count}">
            <img class="recipe-img" src="../src/images/cookies-placeholder.jpeg" alt="Cookies placeholder">
            <img class="star-icon hidden" id="star-icon" src="../src/images/star-icon.png" alt="This recipe is in my recipes!">
            <h3 style="font-size: ${size}rem">${recipe}</h3>
        </article>`
    })
}