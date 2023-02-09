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
main.addEventListener('click', checkClick);
navBar.addEventListener('click', checkNavButtons);

function displayCards() {
    cardSection.innerHTML = '';
    mainRepository.recipes.forEach((recipe, index) => {
        let instructions = recipe.instructions.map((instruction) => {
            return `<p class="foodText">${instruction.instruction}</p>`
        })
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" tabindex="0" data-side="front" data-index="${recipe.id}">
          <button aria-label="Save Recipe Button" class="saveRecipeButton" id="save-btn-2"></button>
          <img class="foodImage" src="${recipe.image}" data-side="front" data-index="${recipe.id}">
          <header class="frontText" data-side="front" data-index="${recipe.id}">
            <h2 class="foodTitle">${recipe.name}</h2>
            <div class="frontStats">
              <p class="cost" id="cost2">${'$' + recipe.calculateCost()}</p>
              <p class="ingredients" id="ingred2"> ${recipe.ingredients.length} Ingredients</p>
            </div>
          </header>
        </section>
        <section class="card cardBack hidden" id="cb${recipe.id}" tabindex="0" data-side="back" data-index="${recipe.id}">
          <h2 class="foodTitle">${recipe.name}</h2>
          <ul class="ingredientsList" id="ingred-list2">
            <li>1 egg</li>
            <li>2 egg</li>
            <li>3 egg</li>
            <li>4 egg</li>
          </ul>
          ${instructions.join(" ")}
        </section>
        `
    })
    
    const backCards = document.querySelectorAll(".cardBack");
    backCards.forEach((card, index) => {
        let recipe = mainRepository[index]
        card.innerHTML += `<ul class="instructionsList" id="instruct-list2">
        <li>${recipe.instructions[index].instruction}</li>
        <li>2 egg</li>
        <li>3 egg</li>
        <li>4 egg</li>
      </ul>
      <p class="foodText"></p>
    </section>`
    })
}

function convertRecipe() {
    convertedRecipes = recipeData.map((recipe) => {
        return new Recipe(recipe)
    })
    return convertedRecipes
}


function checkClick(e) {
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
    const frontCardToFlip = document.getElementById(`cf${elementIndex}`);
    const backCardToFlip = document.getElementById(`cb${elementIndex}`);
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