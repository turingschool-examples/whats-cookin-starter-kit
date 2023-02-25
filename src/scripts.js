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
const homeButton = document.querySelector('#home-button');
const myFoodButton = document.querySelector('#my-food-button');


let user, mainRepository;

Promise.all(apiCalls)
.then(function(values) {
    const usersData = values[0].users;
    const ingredientsData = values[1].ingredients;
    const recipeData = values[2].recipes;
    user = new User(usersData[0]);
    const userRecipeRepo = new RecipeRepository(usersData[0].recipesToCook, ingredientsData)
    user.recipesToCook = userRecipeRepo
    mainRepository = new RecipeRepository(recipeData, ingredientsData);
    displayCards(mainRepository);
    buttonIndicateCurrentPage();
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
    } else if (event.target.classList.contains('noteButtonGrab')) {
        const notesSection = document.getElementById(`notes${event.target.dataset.index}`)
        show(notesSection)
    } else if (event.target.classList.contains('submit')) {
        addNote(event.target.dataset.index)
    } else if (event.target.classList.contains('closeNotes')) {
        const notesSection = document.getElementById(`notes${event.target.dataset.index}`)
        hide(notesSection);
    }
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
    buttonIndicateCurrentPage();
};

function displaySavedFoodPage() {
    cardSection.dataset.page = "saved";
    displayCards(user.recipesToCook);
    uncheckOtherFilters();
    buttonIndicateCurrentPage();
};

function displayCards(recipeList) {
    searchBar.value = '';

    let displayRecipes;
    recipeList.recipes ? displayRecipes = recipeList.recipes : displayRecipes = recipeList;

    cardSection.innerHTML = '';
    displayRecipes.forEach((recipe, index) => {
        let instructions = recipe.instructions.map((instruction) => {
            return `<p class="foodText" data-side="back" data-index="${recipe.id}">${instruction.instruction}</p>`;
        });
        let ingredients = recipe.ingredients.map((ingredient) => {
            return `<li data-side="back" data-index="${recipe.id}">${ingredient.name}</li>`;
        });
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" tabindex="0" data-side="front" data-index="${recipe.id}">
          <button aria-label="Save Recipe Button" class="saveRecipeButton saveBtn cardButton" id="save-btn-${index}" data-index="${recipe.id}">
            <i class="fa-solid fa-heart cardButton saveBtn" data-index="${recipe.id}"></i>
          </button>
          <button aria-label="Write Notes Button" class="notesButton noteButtonGrab" id="notes-btn-${index}" data-index="${recipe.id}">
            <i class="fa-solid fa-comment noteButtonGrab" data-index="${recipe.id}"></i>
          </button>
          <img class="foodImage" src="${recipe.image}" alt="Picture of ${recipe.name}" data-side="front" data-index="${recipe.id}">
            <h2 class="foodTitle" data-side="front" data-index="${recipe.id}">${recipe.name}</h2>
            <div class="frontStats">
              <p class="cost">${'$' + recipe.calculateCost()}</p>
              <p class="ingredients"> ${recipe.ingredients.length} Ingredients</p>
            </div>
        </section>
        <section class="card cardBack hidden" id="cb${recipe.id}" tabindex="0" data-side="back" data-index="${recipe.id}">
          <h2 class="foodTitle" data-side="back" data-index="${recipe.id}">${recipe.name}</h2>
          <ul class="ingredientsList">
            ${ingredients.join("")}
          </ul>
          ${instructions.join("")}
        </section>
        <section class="recipe-notes hidden" id="notes${recipe.id}">
          <div class="notes">
            <button class="closeNotes fa-regular fa-circle-xmark" data-index="${recipe.id}"></button>
            <p class="foodTitle">${recipe.name} Notes</p>
            <input type="text" class="notesInput" id="note-input${recipe.id}"></input>
            <label class="visuallyHidden" for="note-input${recipe.id}">Notes input</label>
            <button class="submit" data-index="${recipe.id}">Submit</button>
            <p class="notes-list" id="note-content${recipe.id}">notes</p>
          </div>
        </section>
        `
    });
    fixSavedHearts();
    toggleNotesButtons();
};

function addNote(id) {
    const noteInput = document.getElementById(`note-input${id}`).value
    let noteContent = document.getElementById(`note-content${id}`)
    noteContent.innerText = noteInput
}


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

function buttonIndicateCurrentPage() {
    if(checkPage()) {
        homeButton.style.backgroundColor = '#548c2f';
        homeButton.style.color = 'white';
        myFoodButton.style.backgroundColor = 'white';
        myFoodButton.style.color = '#5f4a48';
    } else {
        homeButton.style.backgroundColor = 'white';
        homeButton.style.color = '#5f4a48';
        myFoodButton.style.backgroundColor = '#548c2f';
        myFoodButton.style.color = 'white';
    }
}

function setFocus(event) {
    document.getElementById(event.target.id).focus();
};