//  IMPORTS LIVE HERE
import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import RecipeRepository from './classes/RecipeRepository';
import recipeData from './data/recipes';

//  QUERYSELECTORS LIVE HERE
const userWelcome = document.getElementById('section-user-section');
const homeButton = document.getElementById('button--home');
const myRecipesButton = document.getElementById('button--my-recipes');
const saveRecipeButton = document.getElementById('button--save-recipe')
const allRecipesButton = document.getElementById('button--all-recipes')
const myRecipeList = document.getElementById('button--recipe-list');
const searchField = document.getElementById('input--search');
const filterField = document.getElementById('input--filter');
const cardsContainer = document.getElementById('section--cards-container');
const recipeContainer = document.getElementById('section--recipe-details');
const recipeListsContainer = document.getElementById('section--recipe-lists');
const savedRecipesContainer = document.getElementById('section--saved-cards');
const allRecipesContainer = document.getElementById('section--all-recipes');
const ingredientContainer = document.getElementById('ul--ingredient-list');
const instructionsContainer = document.getElementById('ul--instructions');
const allRecipes0to9 = document.getElementById('list--recipes-0-9');
const allRecipes10to19 = document.getElementById('list--recipes-10-19');
const allRecipes20to29 = document.getElementById('list--recipes-20-29');
const allRecipes30to39 = document.getElementById('list--recipes-30-39');
const allRecipes40to49 = document.getElementById('list--recipes-40-49');
const allRecipesLists = [allRecipes0to9, allRecipes10to19, allRecipes20to29, allRecipes30to39, allRecipes40to49]
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
const totalCost = document.getElementById('text--total-cost');


//  EVENT LISTENERS LIVE HERE


homeButton.addEventListener('click', () => {
    show(cardsContainer);
    hide(recipeContainer);
    hide(savedRecipesContainer);
    hide(allRecipesContainer);
    show(allRecipesButton);
});

myRecipesButton.addEventListener('click', () => {
    hide(cardsContainer);
    hide(recipeContainer);
    show(savedRecipesContainer);
    hide(allRecipesContainer);
    show(allRecipesButton);
});

cardsContainer.addEventListener('click', (event) => {
    if (!event.target.classList.contains('glide__arrow')) {
        hide(cardsContainer);
        show(recipeContainer);
        hide(savedRecipesContainer);
        hide(allRecipesContainer);
        displayRecipeDetails(event);
    }
});

allRecipesButton.addEventListener('click', () => {
    hide(cardsContainer);
    hide(recipeContainer);
    hide(savedRecipesContainer);
    show(allRecipesContainer);
    hide(allRecipesButton);
    displayAllRecipes();
});

recipeListsContainer.addEventListener('click', (event) => {
    hide(allRecipesContainer);
    show(allRecipesButton);
    displayRecipeDetails(event);
});

filterField.addEventListener('input', (event) => {
    displayFilteredRecipes(event);
})

searchField.addEventListener('input', (event) => {
    displaySearchedRecipes(event);
})


// saveRecipeButton.addEventListener('click', );
// myRecipesButton.addEventListener('click', );


// GLOBAL VARIABLES LIVE HERE
const allRecipes = new RecipeRepository(recipeData);
const allRecipesClassObjects = allRecipes.returnAllRecipesObjectsArray();


// HELPER FUNCTIONS LIVE HERE
const show = element => element.classList.remove('hidden');
const hide = element => element.classList.add('hidden');
const clearRecipesList = () => {
    allRecipesLists.forEach(list => {
        list.innerHTML = '';
    });
};

const displayAllRecipes = () => {
    clearRecipesList();
    allRecipes.recipeData.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        };
    });
    allRecipes.recipeData.forEach((recipe, index) => {
        if (index < 10) {
            allRecipes0to9.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            allRecipes10to19.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            allRecipes20to29.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 40) {
            allRecipes30to39.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else {
            allRecipes40to49.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displayFilteredRecipes = (event) => {
    if (!event.target.value) {
        allRecipesLists.forEach(list => {
            show(list)
        });
        displayAllRecipes();
        return;
    }
    const filteredRecipes = allRecipes.filteredByTag(event.target.value);
    allRecipesLists.forEach(list => {
        hide(list)
    });
    clearRecipesList();
    filteredRecipes.forEach((recipe, index) => {
        if (index < 10) {
            allRecipes0to9.classList.remove('hidden');
            allRecipes0to9.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            allRecipes10to19.classList.remove('hidden');
            allRecipes10to19.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            allRecipes20to29.classList.remove('hidden');
            allRecipes20to29.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 40) {
            allRecipes30to39.classList.remove('hidden');
            allRecipes30to39.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else {
            allRecipes40to49.classList.remove('hidden');
            allRecipes40to49.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displaySearchedRecipes = (event) => {
    if (!event.target.value) {
        allRecipesLists.forEach(list => {
            show(list)
        });
        displayAllRecipes();
        return;
    }
    const filteredRecipes = allRecipes.filteredByName(event.target.value);
    allRecipesLists.forEach(list => {
        hide(list)
    });
    clearRecipesList();
    filteredRecipes.forEach((recipe, index) => {
        if (index < 10) {
            allRecipes0to9.classList.remove('hidden');
            allRecipes0to9.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 20) {
            allRecipes10to19.classList.remove('hidden');
            allRecipes10to19.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 30) {
            allRecipes20to29.classList.remove('hidden');
            allRecipes20to29.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else if (index < 40) {
            allRecipes30to39.classList.remove('hidden');
            allRecipes30to39.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        } else {
            allRecipes40to49.classList.remove('hidden');
            allRecipes40to49.innerHTML += `<li data-id="${recipe.id}">${recipe.name}</li>`;
        };
    });
};

const displayRecipeDetails = (event) => {
    const currentRecipe = allRecipesClassObjects.find(recipe => {
        return recipe.id.toString() === event.target.getAttribute('data-id');
    });
    hide(cardsContainer);
    show(recipeContainer);
    hide(savedRecipesContainer);
    hide(allRecipesContainer);
    recipeTitle.innerText = currentRecipe.name;
    instructionsContainer.innerHTML = '';
    currentRecipe.returnRecipeInstructions().map(element => instructionsContainer.innerHTML += `<li>${element}</li>`);
    ingredientContainer.innerHTML = '';
    currentRecipe.returnRecipeIngredientsInfo()
        .map(ingredientInfo => ingredientContainer.innerHTML += `<li>${ingredientInfo}</li>`);
    ingredientContainer.innerHTML += `<div class="text--total-cost">Total cost: ${currentRecipe.returnCostOfIngredients()}</div>`;
};






//  PROMISES LIVE HERE







//  ON LOAD FUNCTIONS LIVE HERE

console.log('Hello world');
