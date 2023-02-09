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


const searchBar = document.querySelector('#search-bar');
const cardSection = document.querySelector('#card-section');
const navBar = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const allRecipes = recipeData.map(recipe => new Recipe(recipe));
const mainRepository = new RecipeRepository(allRecipes);
const user = new User(usersData[Math.floor(Math.random() * usersData.length)]);


window.addEventListener('load', () => {
    displayCards(mainRepository);
});

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


function displayCards(recipeList) {
    searchBar.value = '';

    let displayRecipes;
    recipeList.recipes ? displayRecipes = recipeList.recipes : displayRecipes = recipeList;

    cardSection.innerHTML = '';
    displayRecipes.forEach((recipe, index) => {
        let instructions = recipe.instructions.map((instruction) => {
            return `<p class="foodText">${instruction.instruction}</p>`
        })
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" tabindex="0" data-side="front" data-index="${recipe.id}">
          <button aria-label="Save Recipe Button" class="saveRecipeButton" id="save-btn-${index}" data-index="${recipe.id}"></button>
          <img class="foodImage" src="${recipe.image}" alt="Picture of ${recipe.name}" data-side="front" data-index="${recipe.id}">
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
    fixSavedHearts();
}

function toggleRecipeSaved(element) {
  element.classList.toggle('savedRecipe');
  const recipe = user.recipesToCook.recipes.find(recipe => recipe.id === parseInt(element.dataset.index));

  if (!recipe) {
    user.saveRecipe(mainRepository.recipes.find(repoRecipe => repoRecipe.id === parseInt(element.dataset.index)));
    console.log(user.recipesToCook.recipes);
  } else {
    user.removeSaved(recipe.id);
    console.log(user.recipesToCook.recipes);
  }
}

function checkClick(e) {
    if (e.target.dataset.side) {
        e.target.dataset.side === 'front' ? flipToBack(e.target.dataset.index) : flipToFront(e.target.dataset.index)
    } else if (e.target.id.includes('save-btn')) {
        toggleRecipeSaved(e.target);
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
    displayCards(mainRepository);
}

function displaySavedFoodPage() {
    cardSection.dataset.page = "saved";
    displayCards(user.recipesToCook);
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
        mainRepository.filterRecipesByName(searchTerm.toUpperCase()) ? displayCards(mainRepository.recipesByName) : warnNoResults();
    } else {
        user.filterSavedByName(searchTerm.toUpperCase()) ? displayCards(user.recipesToCook) : warnNoResults();
    };
};

function filterRecipes(tag) {
    uncheckOtherFilters(tag);
    if (returnIfHome()) {
        mainRepository.filterRecipesByTag(tag);
        displayCards(mainRepository.recipesByTag);
    } else {
        user.filterSavedByTag(tag);
        displayCards(user.recipesToCook);
    };
};

function warnNoResults() {
    searchBar.style.color = 'red';
};

function resetWarning() {
    searchBar.style.color = 'black';
};

function resetFilters() {
    returnIfHome() ? displayCards(mainRepository) : displayCards(user.recipesToCook);
};

function uncheckOtherFilters(tag) {
    checkboxes.forEach(box => {
        if (box.dataset.tag !== tag) {
            box.checked = false;
        };
    });
};

function fixSavedHearts() {
    const allHearts = document.querySelectorAll('.saveRecipeButton');

    allHearts.forEach(heart => {
        if (user.recipesToCook.recipes.some(recipe => recipe.id === parseInt(heart.dataset.index))) {
            heart.classList.add('savedRecipe');
        };
    });
};