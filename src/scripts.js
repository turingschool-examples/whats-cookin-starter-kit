import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png'
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';

let recipeData;
let ingredientsData;
let usersData;
let user;
let mainRepository;

const searchBar = document.querySelector('#search-bar');
const cardSection = document.querySelector('#card-section');
const navBar = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');


Promise.all(apiCalls)
.then(function(values) {
    usersData = values[0].usersData;
    ingredientsData = values[1].ingredientsData;
    recipeData = values[2].recipeData
    user = new User(usersData[Math.floor(Math.random() * usersData.length)]);
    mainRepository = new RecipeRepository(recipeData, ingredientsData);
    displayCards(mainRepository);
})


main.addEventListener('wheel', scrollCards) 

let preventHorizontalScroll = 0;

function scrollCards(event) {
    if(preventHorizontalScroll === 0){
        if (event.deltaY < 0) {
            main.scrollLeft -= 50;
        }else{
            main.scrollLeft += 50;
        };
    };
};

main.addEventListener('click', handleCardEvents);
navBar.addEventListener('click', toggleView);

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
        });
        let ingredients = recipe.ingredients.map((ingredient) => {
            return `<li>${ingredient.name}</li>`
        });
        cardSection.innerHTML += `
        <section class="card cardFront" id="cf${recipe.id}" data-side="front" data-index="${recipe.id}">
          <button aria-label="Save Recipe Button" class="saveRecipeButton" id="save-btn-${index}" data-index="${recipe.id}"></button>
          <img class="foodImage" src="${recipe.image}" alt="Picture of ${recipe.name}" data-side="front" data-index="${recipe.id}">
            <h2 class="foodTitle" data-side="front" data-index="${recipe.id}">${recipe.name}</h2>
            <div class="frontStats">
              <p class="cost">${'$' + recipe.calculateCost()}</p>
              <p class="ingredients"> ${recipe.ingredients.length} Ingredients</p>
            </div>
        </section>
        <section class="card cardBack hidden" id="cb${recipe.id}" data-side="back" data-index="${recipe.id}">
          <h2 class="foodTitle">${recipe.name}</h2>
          <ul class="ingredientsList">
            ${ingredients.join("")}
          </ul>
          ${instructions.join("")}
        </section>
        `
    });
    fixSavedHearts();
};

function toggleRecipeSaved(element) {
  element.classList.toggle('savedRecipe');
  const recipe = user.recipesToCook.recipes.find(recipe => recipe.id === parseInt(element.dataset.index));

  if (!recipe) {
    user.saveRecipe(mainRepository.recipes.find(repoRecipe => repoRecipe.id === parseInt(element.dataset.index)));
  } else {
    user.removeSaved(recipe.id);
  };
  returnIfHome() ? displayCards(mainRepository) : displayCards(user.recipesToCook);
};

function handleCardEvents(e) {
    if (e.target.dataset.side) {
        e.target.dataset.side === 'front' ? flipToBack(e.target.dataset.index) : flipToFront(e.target.dataset.index)
    } else if (e.target.id.includes('save-btn')) {
        toggleRecipeSaved(e.target);
    };
 };

function toggleView(event) {
    if (event.target.id === 'home-button') {
        displayHomePage()
    } else if (event.target.id === 'my-food-button') {
        displaySavedFoodPage()
    }
}

function flipToBack(elementIndex) {
    const frontCardToFlip = document.getElementById(`cf${elementIndex}`);
    const backCardToFlip = document.getElementById(`cb${elementIndex}`);
    preventHorizontalScroll += 1
    show(backCardToFlip);
    hide(frontCardToFlip);
}

function flipToFront(elementIndex) {
    const frontCardToFlip = document.getElementById(`cf${elementIndex}`);
    const backCardToFlip = document.getElementById(`cb${elementIndex}`);
    preventHorizontalScroll -= 1
    show(frontCardToFlip);
    hide(backCardToFlip);
}

function displayHomePage(tag) {
    cardSection.dataset.page = "home";
    displayCards(mainRepository);
    uncheckOtherFilters(tag);
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
        user.filterSavedByName(searchTerm.toUpperCase()) ? displayCards(user.recipesToCook.recipesByName) : warnNoResults();
    };
};

function filterRecipes(tag) {
    uncheckOtherFilters(tag);
    if (returnIfHome()) {
        mainRepository.filterRecipesByTag(tag);
        displayCards(mainRepository.recipesByTag);
    } else {
        user.filterSavedByTag(tag);
        displayCards(user.recipesToCook.recipesByTag);
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