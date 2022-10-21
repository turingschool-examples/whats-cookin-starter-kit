//  IMPORTS LIVE HERE
import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';



//  QUERYSELECTORS LIVE HERE
const userWelcome = document.getElementById('section-user-section');
const homeButton = document.getElementById('button--home');
const myRecipesButton = document.getElementById('button--my-recipes');
const saveRecipeButton = document.getElementById('button--save-recipe')
const myRecipeList = document.getElementById('button--recipe-list');
const searchField = document.getElementById('input--search');
const filterField = document.getElementById('input--filter');
const cardsContainer = document.getElementById('section--cards-container');
const recipeContainer = document.getElementById('section--recipe-details');
const savedRecipesContainer = document.getElementById('section--saved-cards');
const allRecipesContainer = document.getElementById('section--all-recipes');
const ingredientContainer = document.getElementById('ul--ingredient-list');
const instructionsContainer = document.getElementById('ul--instructions');
const allRecipes0to9 = document.getElementById('list--recipes-0-9');
const allRecipes10to29 = document.getElementById('list--recipes-10-19');
const allRecipes20to99 = document.getElementById('list--recipes-20-29');
const allRecipes30to39 = document.getElementById('list--recipes-30-39');
const allRecipes40to49 = document.getElementById('list--recipes-40-49');

const recipeCard1 = document.getElementById('card--recipe1');
const recipeCard2 = document.getElementById('card--recipe2');
const recipeCard3 = document.getElementById('card--recipe3');
const recipeCard4 = document.getElementById('card--recipe4');
const recipeCard5 = document.getElementById('card--recipe5');
const recipeCard6 = document.getElementById('card--recipe6');
const recipeCard7 = document.getElementById('card--recipe7');
const recipeCard8 = document.getElementById('card--recipe8');
const recipeCard9 = document.getElementById('card--recipe9');
const recipeCard10 = document.getElementById('card--recipe10');
const recipeTitle = document.getElementById('title--recipe');



//  EVENT LISTENERS LIVE HERE
homeButton.addEventListener('click', () => {
    show(cardsContainer);
    hide(recipeContainer);
    hide(savedRecipesContainer);
});

myRecipesButton.addEventListener('click', () => {
    hide(cardsContainer);
    hide(recipeContainer);
    show(savedRecipesContainer);
});

cardsContainer.addEventListener('click', (event) => {
    if (!event.target.classList.contains('glide__arrow')) {
        hide(cardsContainer);
        show(recipeContainer);
        hide(savedRecipesContainer);
    }
});

// saveRecipeButton.addEventListener('click', );
// myRecipesButton.addEventListener('click', );


// GLOBAL VARIABLES LIVE HERE






// HELPER FUNCTIONS LIVE HERE
const show = element => element.classList.remove('hidden');
const hide = element => element.classList.add('hidden');






//  PROMISES LIVE HERE







//  ON LOAD FUNCTIONS LIVE HERE

console.log('Hello world');
 