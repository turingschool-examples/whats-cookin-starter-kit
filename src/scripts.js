import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import {recipeData} from './data/recipes';
import {ingredientsData} from './data/ingredients';

const recipeDisplay = document.querySelector('#recipeDisplay');
const recipeHeading = document.querySelector('#recipeHeading');
const homeButton = document.querySelector('#homeButton');
const favoriteButton = document.querySelector('#favoriteButton');
const filterButton = document.querySelector('#filterButton');
const searchButton = document.querySelector('#searchButton');
const searchLabel = document.querySelector('#searchLabel');
const recipeNameInput = document.querySelector('#recipeNameInput');
const filterLabel = document.querySelector('#filterLabel');
const recipeTagInput = document.querySelector('#recipeTagInput');
const filterForm = document.querySelector('#filterForm');

const ingredientsInfo = {ingredientsData};
const recipeInfo = {recipeData};
const recipeRepository = new RecipeRepository(recipeInfo.recipeData);

window.addEventListener('load', displayRecipeList);
recipeDisplay.addEventListener('click', showRecipeInstructions);
homeButton.addEventListener('click', goHome);
filterForm.addEventListener('submit', filterRecipeTag);

function displayRecipeList() {
 recipeRepository.listRecipes();
 recipeRepository.recipeList.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteButton">Favorite</button>
        </div>
      `)
   });
};

function goHome() {
    recipeHeading.innerText = 'All Recipes';
    helperSwitch(searchLabel);
    helperSwitch(recipeNameInput);
    helperSwitch(searchButton);
    helperSwitch(filterLabel);
    helperSwitch(recipeTagInput);
    helperSwitch(filterButton);
    helperSwitch(favoriteButton);
    helperSwitch(homeButton);
    recipeDisplay.innerHTML = "";
    displayRecipeList();
}

function helperSwitch(element) {
    if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
    } else {
        element.classList.remove("hidden");
    }
};

function showRecipeInstructions(event) {
    if (event.target.getAttribute("data-recipeId")) { 
        helperSwitch(searchLabel); 
        helperSwitch(recipeNameInput);
        helperSwitch(searchButton);
        helperSwitch(filterLabel);
        helperSwitch(recipeTagInput);
        helperSwitch(filterButton);
        helperSwitch(favoriteButton);
        helperSwitch(homeButton);
        const recipeId = parseInt(event.target.getAttribute("data-recipeId"));
        const selectedRecipe = recipeRepository.recipeList.find(recipe => recipe.id === recipeId);
        selectedRecipe.buildIngredientsNeeded(ingredientsInfo.ingredientsData);
        const totalCost = selectedRecipe.getTotalCost();
        
        recipeDisplay.innerHTML = "";
        recipeHeading.innerText = `${selectedRecipe.name}`;
        recipeDisplay.innerHTML = (`
            <img class="selected-recipe-image" src=${selectedRecipe.image} alt=${selectedRecipe.name}>
            <button class="favorite-button" id="favoriteButton">Favorite</button>
            <ol id="recipeInstructions"></ol>
            <h3 class="ingredients">Ingredients</h3>
            <ul class="ingredients-list" id="ingredientsList"></ul>
            <p class="total">Total Cost: ${totalCost}</p>
        `);
        
        selectedRecipe.instructions.forEach((instruction) => {
            document.querySelector("#recipeInstructions").innerHTML += (`
                <li class="instructions">${instruction.instruction}</li>
            `);
        });

        selectedRecipe.ingredientsNeeded.forEach((ingredient) => {
            document.querySelector("#ingredientsList").innerHTML += (`
                <li>${ingredient.name}</li>
            `);
        });
    };
};

function filterRecipeTag(event) {
    event.preventDefault();
    helperSwitch(searchLabel); 
    helperSwitch(recipeNameInput);
    helperSwitch(searchButton);
    helperSwitch(filterLabel);
    helperSwitch(recipeTagInput);
    helperSwitch(filterButton);
    helperSwitch(favoriteButton);
    helperSwitch(homeButton);
    
    const inputValue = recipeTagInput.value;
    const requestedRecipes = recipeRepository.findRecipeByTag(inputValue);

    recipeHeading.innerText = 'Filtered Recipes';
    recipeDisplay.innerHTML = "";

    if (requestedRecipes === `Sorry, no recipe with ${inputValue}.`) {
        return recipeHeading.innerText = requestedRecipes;
    }

    requestedRecipes.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteButton">Favorite</button>
        </div>
      `)
   });
}
