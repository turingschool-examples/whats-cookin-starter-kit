import './styles.css';
import {apiCalls} from './apiCalls';
import User from './classes/User'
import RecipeRepository from './classes/RecipeRepository';
const {fetchData} = apiCalls;

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
const searchForm = document.querySelector('#searchForm');
const favSearchForm = document.querySelector('#favSearchForm');
const recipeFavNameInput = document.querySelector('#favRecipeNameInput')

let user;
let ingredientsInfo;
let userInfo;
let recipeRepository;
fetchData().then(responses => {
    ingredientsInfo = responses[1]
    userInfo = responses[2]
    recipeRepository = new RecipeRepository(responses[0].recipeData)

    recipeRepository.listRecipes();
    user = createUser();

    recipeDisplay.addEventListener('click', recipeDisplayHandler);
    homeButton.addEventListener('click', goHome);
    filterForm.addEventListener('submit', filterRecipeTag);
    searchForm.addEventListener('submit', searchRecipeName);
    favoriteButton.addEventListener('click', showFavorites);
    favSearchForm.addEventListener('submit', searchFavRecipeListByName);

    displayRecipeList();

});


function createUser() {
    const randomNumber = Math.floor(Math.random() * userInfo.usersData.length);
    const user = userInfo.usersData[randomNumber];
    return new User(user);
}

function recipeDisplayHandler(event) {
    if (event.target.getAttribute("data-recipeId")) {
        showRecipeInstructions(event);
    } else if (event.target.getAttribute("data-favoriteRecipe")) {
        addToFavorite(event);
    }
}

function addToFavorite(event) {
    const recipeId = parseInt(event.target.getAttribute('data-favoriteRecipe'))
    const selectedRecipe = recipeRepository.recipeList.find(recipe => recipe.id === recipeId);
    user.addRecipesToCook(selectedRecipe);
}

function showFavorites(event) {
    homeButton.classList.remove('hidden');
    homeButton.classList.add('favorite');
    recipeHeading.innerText = 'Favorite Recipes';
    recipeDisplay.innerHTML = "";
    user.recipesToCook.forEach((recipe) => {
        recipeDisplay.innerHTML += (`
            <div class="recipe-image-wrapper">
            <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="favorite" src=${recipe.image} alt=${recipe.name}>
            <p class="recipe-name">${recipe.name}</p>
            <button class="remove-button" data-favoriteRecipe=${recipe.id} id="removeButton">Remove</button>
            </div>
        `)
    });
};

function displayRecipeList() {
 recipeDisplay.innerHTML = "";
 recipeRepository.recipeList.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" data-favoriteRecipe=${recipe.id} id="favoriteButton">Favorite</button>
        </div>
      `)
   });
};

function goHome(event) {
    console.log(event.target);
    recipeHeading.innerText = 'All Recipes';

    if(homeButton.classList.contains('favorite')) {
        homeButton.classList.remove('favorite');
        homeButton.classList.add('hidden');
        recipeDisplay.innerHTML = "";
        displayRecipeList();
    } else {
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
}

function helperSwitch(element) {
    if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
    } else {
        element.classList.remove("hidden");
    }
};

function showRecipeInstructions(event) {
    if (!event.target.getAttribute("data-recipeDisplay")) {
        helperSwitch(searchLabel);
        helperSwitch(recipeNameInput);
        helperSwitch(searchButton);
        helperSwitch(filterLabel);
        helperSwitch(recipeTagInput);
        helperSwitch(filterButton);
        helperSwitch(favoriteButton);
        helperSwitch(homeButton);
    }

    const recipeId = parseInt(event.target.getAttribute("data-recipeId"));
    const selectedRecipe = recipeRepository.recipeList.find(recipe => recipe.id === recipeId);
    selectedRecipe.buildIngredientsNeeded(ingredientsInfo.ingredientsData);
    const totalCost = selectedRecipe.getTotalCost();

    recipeDisplay.innerHTML = "";
    recipeHeading.innerText = `${selectedRecipe.name}`;
    recipeDisplay.innerHTML = (`
        <div class="selected-recipe-display">
            <img class="selected-recipe-image" src=${selectedRecipe.image} alt=${selectedRecipe.name}>
            <button class="favorite-button" id="favoriteButton" data-favoriteRecipe=${selectedRecipe.id}>Favorite</button>
            <ol id="recipeInstructions"></ol>
            <h3 class="ingredients">Ingredients</h3>
            <ul class="ingredients-list" id="ingredientsList"></ul>
            <p class="total">Total Cost: ${totalCost}</p>
        </div>
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

    recipeHeading.innerText = 'Filtered Recipes by Tag';
    recipeDisplay.innerHTML = "";

    if (requestedRecipes === `Sorry, no recipe with ${inputValue}.`) {
        return recipeHeading.innerText = requestedRecipes;
    }

    requestedRecipes.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteBtn">Favorite</button>
        </div>
      `)
   });
}

function searchRecipeName(event) {
    event.preventDefault();
    helperSwitch(searchLabel);
    helperSwitch(recipeNameInput);
    helperSwitch(searchButton);
    helperSwitch(filterLabel);
    helperSwitch(recipeTagInput);
    helperSwitch(filterButton);
    helperSwitch(favoriteButton);
    helperSwitch(homeButton);

    const inputValue = recipeNameInput.value;
    const requestedRecipes = recipeRepository.findRecipeByName(inputValue);

    recipeHeading.innerText = 'Filtered Recipes by Name';
    recipeDisplay.innerHTML = "";

    if (requestedRecipes === `Sorry, no recipe named ${inputValue}.`) {
        return recipeHeading.innerText = requestedRecipes;
    }

    requestedRecipes.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteButton">Favorite</button>
        </div>
      `)
   });
 }

 function searchFavRecipeListByName(event) {
   event.preventDefault();

   const inputValue = recipeFavNameInput.value;
   const requestedRecipes = user.filterRecipesToCookByName(inputValue);

   recipeHeading.innerText = 'Filtered Favorite Recipes by Name';
   recipeDisplay.innerHTML = "";

   if (requestedRecipes === `Sorry, no recipe named ${inputValue}.`) {
       return recipeHeading.innerText = requestedRecipes;
   }

   requestedRecipes.forEach((recipe) => {
   recipeDisplay.innerHTML += (`
       <div class="recipe-image-wrapper">
         <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
         <p class="recipe-name">${recipe.name}</p>
         <button class="remove-button" data-favoriteRecipe=${recipe.id} id="removeButton">Remove</button>
       </div>
     `)
  });
 }
