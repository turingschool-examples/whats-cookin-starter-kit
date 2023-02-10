import './styles.css';
import apiCalls from './apiCalls';
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
const cardSection = document.querySelector('#card-section');
const navBar = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const allRecipes = recipeData.map(recipe => new Recipe(recipe));
const mainRepository = new RecipeRepository(allRecipes);
const user = new User(usersData[Math.floor(Math.random() * usersData.length)], mainRepository);


window.addEventListener('load', displayCards);
main.addEventListener('click', checkClick);
navBar.addEventListener('click', checkNavButtons);

searchBar.addEventListener('keydown', e => {
    if (e.code === "Enter") {
        searchRecipes(searchBar.value);
    } else {
        resetWarning();
    };
});
footer.addEventListener('click', e => {
    if (e.target.type === "checkbox") {
        e.target.checked ? filterRecipes(e.target.dataset.tag) : resetFilters();
    };
});


function displayCards() {
    cardSection.innerHTML = '';
    mainRepository.recipes.forEach((recipe, index) => {
        let instructions = recipe.instructions.map((instruction) => {
            return `<p class="foodText">${instruction.instruction}</p>`
        })
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" tabindex="0" data-side="front" data-index="${recipe.id}">
          <button aria-label="Save Recipe Button" class="saveRecipeButton" id="save-btn-2"></button>
          <img class="foodImage" src="${recipe.image}" alt="Picture of ${recipe.name}" data-side="front" data-index="${recipe.id}">
            <h2 class="foodTitle" data-side="front" data-index="${recipe.id}">${recipe.name}</h2>
            <div class="frontStats">
              <p class="cost" id="cost2">${'$' + recipe.calculateCost()}</p>
              <p class="ingredients" id="ingred2"> ${recipe.ingredients.length} Ingredients</p>
            </div>
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

function returnIfHome() {
    return cardSection.dataset.page === "home";
};

function searchRecipes(searchTerm) {
    if (returnIfHome()) {
        user.filterAllByName(searchTerm.toUpperCase()) ? updateCards() : warnNoResults();
    } else {
        user.filterSavedByName(searchTerm.toUpperCase()) ? updateCards() : warnNoResults();
    };
};

function filterRecipes(tag) {
    uncheckOtherFilters(tag);
    if (returnIfHome()) {
        user.filterAllByTag(tag);
        updateCards();
    } else {
        user.filterSavedByTag(tag);
        console.log(user.recipesToCook.recipesByName); //updateCards() once thats figured out
    };
};

function warnNoResults() {
    searchBar.style.color = 'red';
};

function resetWarning() {
    searchBar.style.color = 'black';
};

function updateCards() {
    searchBar.value = '';
    // however we want to update the cards
    // console.log(user.allRecipesByTag);
    // console.log(user.allRecipesByName);
};

function resetFilters() {
    // display all recipes again - used when turning off currently selected filter instead of choosing a different one
};

function uncheckOtherFilters(tag) {
    checkboxes.forEach(box => {
        if (box.dataset.tag !== tag) {
            box.checked = false;
        };
    });
};