import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';
import Users from '../src/classes/Users';
import { recipeData } from './data/recipes';
import Recipe from '../src/classes/Recipe'
import { ingredientsData } from './data/ingredients';
import { usersData } from './data/users';
// import { raw } from 'file-loader';


const getRandomUserId = () => {
    return Math.floor(Math.random() * 41) + 1;
};
const getRandomRecipe = () => {
    return Math.floor(Math.random() * 49) + 1;
}

// Global Variables
const users = []
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
const user = new Users(usersData[userId])
const recipe = new Recipe(recipeData)
// QuerySelectors
const favoriteButton = document.querySelector('#favorite-button');
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')
const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
const cardFavoriteButton = document.querySelector('.favorite-button')
const unFavoriteButton = document.querySelector('.un-favorite-button')
const userGreeting = document.querySelector("#userName");
const recipeLocation = document.querySelector('#recipeName')
const recipeImage = document.querySelector('.card-image')
const mainBox = document.querySelector('.main-box')
const goHomeButton = document.querySelector('#home-button')
const recipeCard = document.querySelector('.recipe-card')
const ingredientCard = document.querySelector('.ingredient-card')
let viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
const recipeCardWrapper = document.querySelector('.recipe-card-wrapper')
const ingredientCardWrapper = document.querySelector('.ingredient-card-wrapper')
const recipeTagInput = document.querySelector('#recipe-tag-input')
const recipeDisplay = document.querySelector('#recipeDisplay');
const recipeHeading = document.querySelector('#recipeHeading');
const radioValue = document.querySelectorAll('.radio-value');
const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-submit');


const addToCookbookButtonEventHandler = () => {
    const addToCookbook = document.querySelector('#add-to-cookbook');
    addToCookbook.addEventListener('click', (event) => {
        user.addRecipesToCook(window.currentRecipe);
    });
}
// const showFilteredIngredients = () => {
//     const letsMakeIt = document.querySelector('.lets-make-it-button')
//     letsMakeIt.addEventListener('click', (id) => {
//         showAllRecipeDetails(id)
//     })
// }
// function addClickHandler(element, callback) {
//     element.addEventListener('click', (event) => {
//         callback(event);
//     });
// };
// EventListeners
// favoriteButton.addEventListener('click',)
// cookbookButton.addEventListener('click',)
// viewRecipeButton.addEventListener('click',)
// addToCookbookButton.addEventListener('click',)
// cardFavoriteButton.addEventListener('click',)
// unFavoriteButton.addEventListener('click',)
window.addEventListener('load', () => {
    showAllRecipes()
    viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
    viewRecipeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            showAllRecipeDetails(event.target.getAttribute('data-recipeId'))
        })
    })
    console.log({ favoriteButton });
    console.log('HERE');
});

// Global Variables
let recipeRepo = new RecipeRepository(recipeData)
let newRecipe = new Recipe(recipeData[0], ingredientsData)


// function addClickHandler(element, callback) {
//     element.addEventListener('click', (event) => {
//         callback(event);
//     });
// };

// const someButton = document.querySelector('some selector');
// addClickHandler(someButton, someClickHandler); 

function showAllRecipes() {
    const recipes = recipeRepo.createAllRecipes(ingredientsData)
    recipeCard.innerHTML = '';
    console.log('SHOWING!')
    recipes.forEach((recipe) => {
        recipeCard.innerHTML += `<button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>`
    })
}

function showAllRecipeDetails(id) {
    newRecipe = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(id));
    newRecipe.makeIngredientData();
    window.currentRecipe = newRecipe;
    ingredientCard.innerHTML = `<div>
    <button id="add-to-cookbook" class=""> Add to cookbook! </button>
<ul>
<h2> RECIPE INFORMATION </h2>
<li> NAME: ${newRecipe.name}</li>
<li> TOTAL COST: ${newRecipe.getCostToDollar()}</li>
</ul>
</div>
<h3> INGREDIENTS </h3>
`
    newRecipe.requiredIngredients.forEach(ingredient => {
        ingredientCard.innerHTML += `  <div class="recipe-information">
  <p>${ingredient.name}</p>
  </div>
  `
    })
    ingredientCard.innerHTML += `<h3>
INSTRUCTIONS
</h3>`
    newRecipe.instructions.forEach(instruction => {
        ingredientCard.innerHTML += `<div>
  <p><span>${instruction.number}. </span>${instruction.instruction}</p>
  </div>`
    });
    hide(recipeCardWrapper)
    show(favoriteButton)
    // showFilteredIngredients();
}


function searchRecipe(event) {
    event.preventDefault();
    if (!searchBox.value) {
        showAllRecipes();
    }
    const tagSearched = recipeRepo.filterByTag(searchBox.value);
    const nameSearched = recipeRepo.filterByName(searchBox.value);
    const recipesToShow = [...tagSearched, ...nameSearched];
    if (recipesToShow.length > 0) {
        displayRecipeBySearchResults(recipesToShow);
    } else {
        showAllRecipes();
    }
}

function showCookbookrecipes(event) {
    displayRecipeBySearchResults(user.recipesToCook);
}

function displayRecipeBySearchResults(recipe) {
    const result = recipe.map(recipes => {
        console.log('TAG RECIPE: ', recipes)
        return `<section class='recipe-card' id="recipeCard">
      <img src="${recipes.image}" class="recipe-image" alt="">
      <h3>${recipes.name}</h3>
      <button class="lets-make-it-button" id="${recipes.id}">Let's Make It!</button>
      <div>
      <button id="add-to-cookbook" class=""> Add to cookbook! </button>
      </div>
      </section>`
    });
    recipeCard.innerHTML = result;
    // showFilteredIngredients();
    addToCookbookButtonEventHandler();
}
function savedRecipes() {
    const user1 = new Users(usersData[userId])
    const result = user1.recipesToCook.map(recipe => {
        console.log('TAG RECIPE: ', recipe)
        return `<section class='recipe-card' id="recipeCard">
      <img src="${user1.recipesToCook.image}" class="recipe-image" alt="">
      <h3>${user1.recipesToCook.name}</h3>
      <button class="lets-make-it-button" id="${user1.recipesToCook.id}">Let's Make It!</button>
      <div>
      <button id="add-to-cookbook" class=""> Add to cookbook! </button>
      </div>
      </section>`

    });
    recipeCard.innerHTML = result;
}

function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};
cookbookButton.addEventListener('click', showCookbookrecipes)
searchButton.addEventListener('click', searchRecipe)
goHomeButton.addEventListener('click', showAllRecipes);


/* For the fist methodd, we need to add buttons to the html,<button>remove from list </button> and make it
so when it gets clicked, it removes that recipe from the array

 <div class="recipe-card-wrapper">
//       <img class="recipe-image" data-recipeId=${user.recipesToCook.id} data-recipeDisplay="filtered" src=${user.recipesToCook.image} alt=${user.recipesToCook.name}>
//       <p class="recipe-name">${user.recipesToCook.name}</p>
//       <button class="favorite-button" id="favoriteButton">Favorite</button>
//     </div>*/