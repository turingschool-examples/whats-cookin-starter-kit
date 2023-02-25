import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';
import { apiCalls, saveFavorites } from './apiCalls';
import './styles.css';

const searchBar = document.querySelector('#search-bar');
const cardSection = document.querySelector('#card-section');
const navBar = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let user, mainRepository;

Promise.all(apiCalls)
.then(function(values) {
    const usersData = values[0];
    const ingredientsData = values[1];
    const recipeData = values[2];
    user = new User(usersData[0]);
    const userRecipeRepo = new RecipeRepository(usersData[0].recipesToCook, ingredientsData)
    user.recipesToCook = userRecipeRepo
    mainRepository = new RecipeRepository(recipeData, ingredientsData);
    displayCards(mainRepository);
});


main.addEventListener('click', handleCardEvents);
main.addEventListener('keydown', event => {
    if (event.code === "Enter" || event.code === "Space") {
        handleCardEvents(event);
        setTimeout(() => {
            setFocus(event);
        }, 100);
    };
});

navBar.addEventListener('click', toggleView);

searchBar.addEventListener('keydown', event => {
    if (event.code === "Enter") {
        searchRecipes(searchBar.value);
        uncheckOtherFilters();
    } else {
        resetWarning();
    };
});

footer.addEventListener('click', event => {
    if (event.target.type === "checkbox") {
        event.target.checked ? filterRecipes(event.target.dataset.tag) : resetFilters();
    };
});

function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};

function checkPage() {
    return cardSection.dataset.page === "home";
};

function handleCardEvents(event) {
    if (event.target.dataset.side) {
        event.target.dataset.side === 'front' ? flipCard(event.target.dataset.index) : flipCard(event.target.dataset.index);
    } else if (event.target.classList.contains('saveBtn')) {
        toggleRecipeSaved(event.target);
    };
};

function toggleView(event) {
    if (event.target.id === 'home-button') {
        displayHomePage();
    } else if (event.target.id === 'my-food-button') {
        displaySavedFoodPage();
    };
};

function flipCard(elementIndex) {
    const frontCard = document.getElementById(`cf${elementIndex}`);
    const backCard = document.getElementById(`cb${elementIndex}`);
    const isFrontCardVisible = !frontCard.classList.contains("hidden");

    if (isFrontCardVisible) {
        show(backCard);
        hide(frontCard);
    } else {
        show(frontCard);
        hide(backCard);
    };
};

function displayHomePage() {
    cardSection.dataset.page = "home";
    displayCards(mainRepository);
    uncheckOtherFilters();
};

function displaySavedFoodPage() {
    cardSection.dataset.page = "saved";
    displayCards(user.recipesToCook);
    uncheckOtherFilters();
};

function displayCards(recipeList) {
    searchBar.value = '';

    let displayRecipes;
    recipeList.recipes ? displayRecipes = recipeList.recipes : displayRecipes = recipeList;

    cardSection.innerHTML = '';
    displayRecipes.forEach((recipe, index) => {
        let instructions = recipe.instructions.map((instruction) => {
            return `<p class="foodText">${instruction.instruction}</p>`;
        });
        let ingredients = recipe.ingredients.map((ingredient) => {
            return `<li>${ingredient.name}</li>`;
        });
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" tabindex="0" data-side="front" data-index="${recipe.id}">
          <button aria-label="Save Recipe Button" class="saveRecipeButton saveBtn cardButton" id="save-btn-${index}" data-index="${recipe.id}">
            <i class="fa-solid fa-heart cardButton saveBtn" data-index="${recipe.id}"></i>
          </button>
          <button aria-label="Write Notes Button" class="notesButton" id="notes-btn-${index}" data-index="${recipe.id}">
            <i class="fa-solid fa-comment"></i>
          </button>
          <img class="foodImage" src="${recipe.image}" alt="Picture of ${recipe.name}" data-side="front" data-index="${recipe.id}">
            <h2 class="foodTitle" data-side="front" data-index="${recipe.id}">${recipe.name}</h2>
            <div class="frontStats">
              <p class="cost">${'$' + recipe.calculateCost()}</p>
              <p class="ingredients"> ${recipe.ingredients.length} Ingredients</p>
            </div>
        </section>
        <section class="card cardBack hidden" id="cb${recipe.id}" tabindex="0" data-side="back" data-index="${recipe.id}">
          <h2 class="foodTitle">${recipe.name}</h2>
          <ul class="ingredientsList">
            ${ingredients.join("")}
          </ul>
          ${instructions.join("")}
        </section>
        `
    });
    fixSavedHearts();
    toggleNotesButtons();
};

function toggleSavedButton(element) {
    if (element.children[0]) {
        if (element.classList.contains('savedRecipe') || element.children[0].classList.contains('savedRecipe')) {
            element.classList.remove('savedRecipe');
            element.children[0].classList.remove('savedRecipe');
        } else {
            element.classList.add('savedRecipe');
        };
    } else if (!element.children[0]) {
        if (element.classList.contains('savedRecipe') || element.parentNode.classList.contains('savedRecipe')) {
            element.classList.remove('savedRecipe');
            element.parentNode.classList.remove('savedRecipe');
        } else {
            element.classList.add('savedRecipe');
        };
    };
};


function toggleRecipeSaved(element) {
    toggleSavedButton(element);

    const recipe = user.recipesToCook.recipes.find(recipe => recipe.id === parseInt(element.dataset.index));
  
    if (!recipe) {
      let unsavedRecipe = mainRepository.recipes.find(repoRecipe => repoRecipe.id === parseInt(element.dataset.index));
      user.saveRecipe(unsavedRecipe);
      saveFavorites(unsavedRecipe, user);
    } else {
      user.removeSaved(recipe.id);
    };
};

function toggleNotesButtons() {
    const allNotesButtons = document.querySelectorAll('.notesButton');

    checkPage() ? 
    allNotesButtons.forEach(noteButton => hide(noteButton)) :
    allNotesButtons.forEach(noteButton => show(noteButton));
};

function fixSavedHearts() {
    const allHearts = document.querySelectorAll('.saveRecipeButton');

    allHearts.forEach(heart => {
        if (user.recipesToCook.recipes.some(recipe => recipe.id === parseInt(heart.dataset.index))) {
            heart.classList.add('savedRecipe');
        };
    });
};

function searchRecipes(searchTerm) {
    if (checkPage()) {
        mainRepository.filterRecipesByName(searchTerm.toUpperCase()) ? displayCards(mainRepository.recipesByName) : warnNoResults();
    } else {
        user.filterSavedByName(searchTerm.toUpperCase()) ? displayCards(user.recipesToCook.recipesByName) : warnNoResults();
    };
};

function warnNoResults() {
    searchBar.style.color = 'red';
};

function resetWarning() {
    searchBar.style.color = 'black';
};

function filterRecipes(tag) {
    uncheckOtherFilters(tag);
    if (checkPage()) {
        mainRepository.filterRecipesByTag(tag);
        displayCards(mainRepository.recipesByTag);
    } else {
        user.filterSavedByTag(tag);
        displayCards(user.recipesToCook.recipesByTag);
    };
};

function resetFilters() {
    checkPage() ? displayCards(mainRepository) : displayCards(user.recipesToCook);
};

function uncheckOtherFilters(tag) {
    checkboxes.forEach(box => {
        if (box.dataset.tag !== tag) {
            box.checked = false;
        };
    });
};

function setFocus(event) {
    document.getElementById(event.target.id).focus();
};