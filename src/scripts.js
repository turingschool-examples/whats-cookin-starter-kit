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
const recipeNameInput = document.querySelector('#recipeNameInput');
const recipeTagInput = document.querySelector('#recipeTagInput');
const filterForm = document.querySelector('#filterForm');
const searchForm = document.querySelector('#searchForm');
const filterFavoriteForm = document.querySelector('#filterFavoriteForm');
const recipeFavoriteTagInput = document.querySelector('#recipeFavoriteTagInput');
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
    filterFavoriteForm.addEventListener('submit', filterFavoriteRecipesByTag);
    favSearchForm.addEventListener('submit', searchFavRecipeListByName);
    
    displayRecipeList();

});

function hideOn(element) {
    element.classList.add('hidden')
}

function hideOff(element) {
    element.classList.remove('hidden')
}


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

function showFavorites() {
    hideOn(searchForm);
    hideOn(filterForm);
    hideOn(favoriteButton);
    hideOff(filterFavoriteForm);
    hideOff(favSearchForm);
    hideOff(homeButton);
    homeButton.classList.remove('hidden');
    homeButton.classList.add('favorite');
    recipeHeading.innerText = 'Favorite Recipes';
    recipeDisplay.innerHTML = "";
    user.recipesToCook.forEach((recipe) => {
        recipeDisplay.innerHTML += (`
            <div class="recipe-image-wrapper">
                <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="favorite" src=${recipe.image} alt=${recipe.name}>
                <p class="recipe-name">${recipe.name}</p>
            </div>
        `)
    });
};

function displayRecipeList() {
    hideOff(searchForm);
    hideOff(filterForm);
    hideOff(favoriteButton);
    hideOn(homeButton);
    hideOn(filterFavoriteForm);
    hideOn(favSearchForm);
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

function goHome() {
    recipeHeading.innerText = 'All Recipes';
    hideOn(homeButton);
    recipeDisplay.innerHTML = "";
    displayRecipeList();
   
}

function showRecipeInstructions(event) {
    hideOn(searchForm);
    hideOn(filterForm);
    hideOn(filterFavoriteForm);
    hideOn(favSearchForm);
    hideOff(favoriteButton);
    hideOff(homeButton);
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
            <div class="instruction-design-div">
              <div class="instructions-display">
              <ol id="recipeInstructions"></ol>
             </div>
             <div class="ingredients-design-div">
              <h3 class="ingredients">Ingredients</h3>
              <ul class="ingredients-list" id="ingredientsList"></ul>
              <p class="total">Total Cost: ${totalCost}</p>  
             </div>
            </div>
        </div>
    `);

    selectedRecipe.instructions.forEach((instruction) => {
        document.querySelector("#recipeInstructions").innerHTML += (`
            <li class="instructions">${instruction.instruction}</li>
        `);
    });

    selectedRecipe.ingredientsNeeded.forEach((ingredient) => {
        document.querySelector("#ingredientsList").innerHTML += (`
            <li class="ingredient">${ingredient.name}</li>
        `);
    });
};

function filterRecipeTag(event) {
    event.preventDefault();

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
          <button class="favorite-button" id="favoriteBtn" data-favoriteRecipe=${recipe.id}>Favorite</button>
        </div>
      `)
   });
}

function searchRecipeName(event) {
    event.preventDefault();

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
          <button class="favorite-button" id="favoriteButton" data-favoriteRecipe=${recipe.id}>Favorite</button>
        </div>
      `)
   });
 }

 function filterFavoriteRecipesByTag(event) {
    event.preventDefault();

    const inputValue = recipeFavoriteTagInput.value;
    const requestedRecipes = user.filterRecipesToCookByTag(inputValue);

    recipeHeading.innerText = 'Filtered Favorite Recipes by Tag';
    recipeDisplay.innerHTML = "";

    if (requestedRecipes === `Sorry, no recipe with ${inputValue}.`) {
        return recipeHeading.innerText = requestedRecipes;
    }

    requestedRecipes.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
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
       </div>
     `)
  });
 }
