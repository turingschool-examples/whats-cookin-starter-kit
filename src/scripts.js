import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import RecipeRepository from './classes/RecipeRepository';
import Ingredient from './classes/Ingredient';
import Recipe from './classes/Recipe';
import User from './classes/User';

import recipeData from './data/recipes';
import usersData from './data/users';

const homeButton = document.querySelector('#home-button');
const myFoodButton = document.querySelector('#my-food-button');
const searchBar = document.querySelector('#search-bar');
const cardSection = document.querySelector('#card-section')
const navBar = document.querySelector('nav');
const main = document.querySelector('main');

const allRecipes = recipeData.map(recipe => new Recipe(recipe));
const mainRepository = new RecipeRepository(allRecipes);
const user = new User(usersData[Math.floor(Math.random() * usersData.length)], mainRepository);

window.addEventListener('load', displayCards)
main.addEventListener('click', checkClick);
navBar.addEventListener('click', checkNavButtons);
searchBar.addEventListener('keydown', e => {
    if (e.code === "Enter") {
        searchRecipes(searchBar.value);
    } else {
        resetWarning();
    };
})


function displayCards() {
    cardSection.innerHTML = '';
    mainRepository.recipes.forEach((recipe) => {
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" tabindex="0" data-side="front" data-index="2">
          <button aria-label="Save Recipe Button" class="saveRecipeButton" id="save-btn-2"></button>
          <img class="foodImage" src="https://images.unsplash.com/photo-1622212611568-32d624f5f0ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Food Image" data-side="front" data-index="2">
          <header class="frontText" data-side="front" data-index="2">
            <h2 class="foodTitle">${recipe.name}</h2>
            <div class="frontStats">
              <p class="cost" id="cost2">$11.64</p>
              <p class="ingredients" id="ingred2">5 Ingredients</p>
            </div>
          </header>
        </section>
        <section class="card cardBack hidden" id="cb2" tabindex="0" data-side="back" data-index="2">
          <h2 class="foodTitle">Food Title</h2>
          <ul class="ingredientsList" id="ingred-list2">
            <li>1 egg</li>
            <li>2 egg</li>
            <li>3 egg</li>
            <li>4 egg</li>
          </ul>
          <p class="foodText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam voluptatum sunt illum mollitia hic deleniti, quos eos, quia omnis eius. Ducimus unde quo repellat, provident maxime ea impedit voluptates!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, tellus ac efficitur suscipit, magna purus aliquet tellus, et convallis libero urna quis velit. Nullam vel velit vel lacus tempor euismod. Sed semper auctor mi, vel scelerisque risus tincidunt eu.</p>
        </section>
        `
    })
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
    cardSection.dataset.page = "home";
}

function displaySavedFoodPage() {
    cardSection.dataset.page = "saved";
}

function show(element) {
    element.classList.remove('hidden')
}

function hide(element) {
    element.classList.add('hidden')
}

function searchRecipes(searchTerm) {
    if (cardSection.dataset.page === "home") {
        user.filterAllByName(searchTerm.toUpperCase()) ? updateCards() : warnNoResults();
    } else if (cardSection.dataset.page === "saved") {
        user.filterSavedByName(searchTerm.toUpperCase());
        console.log(user.recipesByName);
    };
};

function filterRecipes(tag) {
    
};

function warnNoResults() {
    searchBar.style.color = 'red';
};

function resetWarning() {
    searchBar.style.color = 'black';
};

function updateCards() {
    searchBar.value = '';
    // whatever we wanna do to update the cards here
};