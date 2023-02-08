import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import RecipeRepository from './classes/RecipeRepository';
import Ingredient from './classes/Ingredient';
import Recipe from './classes/Recipe';
import User from './classes/User';

import recipeData from './data/recipes';

let convertedRecipes;

const homeButton = document.querySelector('#home-button');
const myFoodButton = document.querySelector('#my-food-button');
const searchBar = document.querySelector('#search-bar');
const cardSection = document.querySelector('#card-section')
const navBar = document.querySelector('nav');
const main = document.querySelector('main');

convertRecipe();

const mainRepository = new RecipeRepository(convertedRecipes);

window.addEventListener('load', displayCards)
cardSection.addEventListener('click', checkClick);
navBar.addEventListener('click', checkNavButtons);

function displayCards() {
    cardSection.innerHTML = '';
    mainRepository.recipes.forEach((recipe, index) => {
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" tabindex="0" data-side="front" data-index="${index}">
          <button aria-label="Save Recipe Button" class="saveRecipeButton" id="save-btn-2"></button>
          <img class="foodImage" src="${recipe.image}" data-side="front">
          <header class="frontText" data-side="front" data-index="${index}">
            <h2 class="foodTitle">${recipe.name}</h2>
            <div class="frontStats">
              <p class="cost" id="cost2">${'$' + recipe.calculateCost()}</p>
              <p class="ingredients" id="ingred2"> ${recipe.ingredients.length} Ingredients</p>
            </div>
          </header>
        </section>
        <section class="card cardBack hidden" id="cb${recipe.id}" tabindex="0" data-side="back" data-index="${index}">
          <h2 class="foodTitle">${recipe.name}</h2>
          <ul class="ingredientsList" id="ingred-list2">
            <li>1 egg</li>
            <li>2 egg</li>
            <li>3 egg</li>
            <li>4 egg</li>
          </ul>
          <p class="foodText">${recipe.instructions}</p>
        </section>
        `
    })
}

function convertRecipe() {
    convertedRecipes = recipeData.map((recipe) => {
        return new Recipe(recipe)
    })
    return convertedRecipes
}


function checkClick(e) {
    console.log(e.target)
    if (e.target.dataset.side) {
        e.target.dataset.side === 'front' ? flipToBack(e.target.dataset.index) : flipToFront(e.target.dataset.index)
    } 
 }

function checkNavButtons(e) {
    if (e.target.id === 'home-button') {
        displayHomePage()
    } else if (e.target.id === 'my-food-button') {
        displaySavedFoodPage()
    }
}

function flipToBack(elementIndex) {
    console.log('tomato')
    const frontCardToFlip = document.getElementById(`cf${elementIndex}`);
    const backCardToFlip = document.getElementById(`cb${elementIndex}`);
    console.log(backCardToFlip)
    show(backCardToFlip);
    hide(frontCardToFlip);
}

function flipToFront(elementIndex) {
    const frontCardToFlip = document.getElementById(`cf${elementIndex}`);
    const backCardToFlip = document.getElementById(`cb${elementIndex}`);
    show(frontCardToFlip);
    hide(backCardToFlip);
}

function displayHomePage() {
    console.log('workplease')
}

function displaySavedFoodPage() {
    console.log('getoffmylawn')
}

function show(element) {
    element.classList.remove('hidden')
}

function hide(element) {
    element.classList.add('hidden')
}