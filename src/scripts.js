import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import "./images/heart.svg"
import RecipeRepository from '../src/classes/RecipeRepository';
import Users from '../src/classes/Users';
import { recipeData } from './data/recipes';
// import { raw } from 'file-loader';
import Recipe from '../src/classes/Recipe'
import { ingredientsData } from './data/ingredients';
import { usersData } from './data/users';


const getRandomUserId = () => {
    return Math.floor(Math.random() * 41) + 1;
};
const getRandomRecipe = () => {
    return Math.floor(Math.random() * 49) + 1;
}
//global variables!
const users = []
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
const user = new Users(usersData[userId])
const recipe = new Recipe(recipeData[recipeID])
// const savedRecipe = new Users()
// QuerySelectors
const allRecipesButton = document.querySelector('#recipe-button')
const favoriteButton = document.querySelector('#favorite-button');
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')
const radioSearchButton = document.querySelector('.radio-search-button')
// const viewRecipeButton = document.querySelector('.view-recipe-button')
const addToCookbookButton = document.querySelector('.add-to-cookbook-button')
const cardFavoriteButton = document.querySelector('.favorite-button')
const unFavoriteButton = document.querySelector('.un-favorite-button')
const userGreeting = document.querySelector("#userName");
const recipeLocation = document.querySelector('#recipeName')
const recipeImage = document.querySelector('.card-image')
const rightBox = document.querySelector('.right-box')
const goHomeButton = document.querySelector('.take-home')
const recipeCard = document.querySelector('.recipe-card')
const ingredientCard = document.querySelector('.ingredient-card')
let viewRecipeButtons = document.querySelectorAll('.view-recipe-button')
const recipeCardWrapper = document.querySelector('.recipe-card-wrapper')
const ingredientCardWrapper = document.querySelector('.ingredient-card-wrapper')
const recipeTagInput = document.querySelector('#recipe-tag-input')
const recipeDisplay = document.querySelector('#recipeDisplay');
const recipeHeading = document.querySelector('#recipeHeading');
const radioValue = document.querySelectorAll('.radio-value');

const addToCookbookButtonEventHandler = () => {
    const addToCookbook = document.querySelector('#add-to-cookbook');
    addToCookbook.addEventListener('click', (event) => {
        user.addRecipesToCook(window.currentRecipe);
    });
}

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
let newRecipe = new Recipe(recipeData[recipeID], ingredientsData)

function showAllRecipes() {
    const recipes = recipeRepo.createAllRecipes(ingredientsData)
    recipeCard.innerHTML = '';
    recipes.forEach((recipe) => {
        recipeCard.innerHTML += `<button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>`
    })
    /*
    do on page load show random new set of all recipes
    */
    hide(favoriteButton);
    hide(allRecipesButton);
    show(goHomeButton)
    console.log('IT WOEKS')
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
    addToCookbookButtonEventHandler();
    hide(recipeCardWrapper)
    show(favoriteButton)
}



function filterRecipeByTag(event) {
    event.preventDefault();
    // console.log('tag:', recipeTagInput.value)
    const tagInput = recipeTagInput.value;
    const requestedRecipes = recipeRepo.filterByTag('lunch');
    console.log(requestedRecipes)
    recipeCard.innerHTML = ''
    requestedRecipes.forEach((recipe) => {
        recipeCard.innerHTML += (`
        <div class="recipe-card-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} data-recipeDisplay="filtered" src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteButton">Favorite</button>
        </div>
      `)
    });
}
function mySavedRecipes() {
    recipeCard.innerHTML += (`
    <div class="recipe-card-wrapper">
      <img class="recipe-image" data-recipeId=${user.recipesToCook.id} data-recipeDisplay="filtered" src=${user.recipesToCook.image} alt=${user.recipesToCook.name}>
      <p class="recipe-name">${user.recipesToCook.name}</p>
      <button class="favorite-button" id="favoriteButton">Favorite</button>
    </div>
  `)
    show(cookbookButton)
}

// get data from radio buttons
// filtering by tag
// display based on filter

const userBuildAttributes = (user) => {
    userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`
    // do we need to invoke getRandomUserId here to get a random user name in the greeting every time?
    // recipeImage.src = `${recipe.image}`;
    // recipeLocation.innerHTML = `${recipe.name}`
};


function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};


// allRecipesButton.addEventListener('click', showAllRecipes, recipeRepo.createAllRecipes())
userBuildAttributes(user);
// goHomeButton.addEventListener('click', userBuildAttributes)
cookbookButton.addEventListener('click', mySavedRecipes)