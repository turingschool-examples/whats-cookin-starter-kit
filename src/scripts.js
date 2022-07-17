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

// Global Variables-----------------------------------------------------------
const users = []
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
const user = new Users(usersData[userId])
const recipe = new Recipe(recipeData[recipeID])
// const savedRecipe = new Users()

// QuerySelectors--------------------------------------------------------------
const favoriteButton = document.querySelector('#favorite-button');
const cookbookButton = document.querySelector('#cookbook-button')
const searchBar = document.querySelector('.search-container')
// const viewRecipeButton = document.querySelector('.view-recipe-button')
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
const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-submit');
const searchedCard = document.querySelector('.searched-card');
const viewRecipeButtonSearched = document.querySelectorAll('.view-recipe-button-searched')

const addToCookbookButtonEventHandler = () => {
    const addToCookbook = document.querySelector('#add-to-cookbook');
    addToCookbook.addEventListener('click', (event) => {
        user.addRecipesToCook(window.currentRecipe);
    });
}

// EventListeners--------------------------------------------------------------
// favoriteButton.addEventListener('click',)
// cookbookButton.addEventListener('click',)
// viewRecipeButton.addEventListener('click',)
// addToCookbookButton.addEventListener('click',)
// cardFavoriteButton.addEventListener('click',)
// unFavoriteButton.addEventListener('click',)
searchButton.addEventListener('click', searchRecipe)
goHomeButton.addEventListener('click', showAllRecipes)

// viewRecipeButtonSearched.addEventListener('click', () => {
//   viewRecipeButtonSearched = document.querySelectorAll('.view-recipe-button-searched')
//   viewRecipeButtonSearched.forEach((button) => {
//   button.addEventListener('click', (event) => {
//   showAllRecipeDetails(event)
//     })
//   })
// })

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

// viewRecipeButtonSearched.addEventListener('click', () => {
//   viewRecipeButtonSearched = document.querySelectorAll('.view-recipe-button-searched')
//   viewRecipeButtonSearched.forEach((button) => {
//       button.addEventListener('click', (event) => {
//           showAllRecipeDetails(event.target.getAttribute('data-recipeId'))
//       })
// })
// })

// Global Variables--------------------------------------------------------------
let recipeRepo = new RecipeRepository(recipeData)
let newRecipe = new Recipe(recipeData[recipeID], ingredientsData)
// radioSearchButton.addEventListener('click', filterRecipeByTag)

function showAllRecipes() {
  userGreeting.innerHTML = `Welcome ${user.name.split(" ")[0]}!`
    const recipes = recipeRepo.createAllRecipes(ingredientsData)
    recipeCard.innerHTML = '';
    recipes.forEach((recipe) => {
        recipeCard.innerHTML += `<button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>`
    })
    // console.log('IT WOEKS')
    hide(goHomeButton)
    hide(ingredientCardWrapper)
    show(recipeCardWrapper)
}

function showAllRecipeDetails(id) {
    newRecipe = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(id));
    newRecipe.makeIngredientData();
    window.currentRecipe = newRecipe;
    ingredientCard.innerHTML = `<div>
    <button id="add-to-cookbook" class=""> Add to cookbook! </button>
<h2> RECIPE INFORMATION </h2>
<p> NAME: ${newRecipe.name}<p>
<p> TOTAL COST: ${newRecipe.getCostToDollar()}</p>
</div>
<h3> INGREDIENTS </h3>
`
newRecipe.requiredIngredients.forEach(ingredient => {
  ingredientCard.innerHTML += `  <div class="recipe-information">
  <li>${ingredient.name}</li>
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
    show(ingredientCardWrapper)
    show(goHomeButton)
}


function searchRecipe(event) {
    event.preventDefault();
    if (!searchBox.value) {
        showAllRecipes();
    }
    const tagSearched = recipeRepo.filterByTag(searchBox.value);
    const nameSearched = recipeRepo.filterByName(searchBox.value);
    if (tagSearched.length > 0) {
        recipeRepo.filteredTags = tagSearched
        displayRecipeByTag()
    } else if (nameSearched.length > 0) {
        recipeRepo.filteredNames = nameSearched
        return displayRecipeByName()
    } else {
        return showAllRecipes();
    }
    show(goHomeButton)
    hide(ingredientCard)
}

function displayRecipeByTag() {
    const result = recipeRepo.filteredTags.map(recipe => {
        return `<section class='recipe-card' id="recipeCard">
      <img src="${recipe.image}" class="recipe-image" alt="">
      <h3>${recipe.name}</h3>
      <button class="view-recipe-button-searched" id="${recipe.id}"> VIEW RECIPE </button>
      <div>
      <button class="searched-card-button" id= ${recipe.id}> ADD TO COOKBOOK </button>
      </div>
      </section>`
    });
    return recipeCard.innerHTML = result;
}

function displayRecipeByName() {
    const result = recipeRepo.filteredTags.map(recipe => {
        return `<section class='recipe-card' id="recipeCard">
      <img src="${recipe.image}" class="recipe-image" alt="">
      <h3>${recipe.name}</h3>
      <button class="view-recipe-button-searched" id="${recipe.id}"> VIEW RECIPE </button>
      <div>
      <button class="searched-card-button" id= ${recipe.id}> ADD TO COOKBOOK </button>
      </div>
      </section>`
    });
    return recipeCard.innerHTML = result;
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

function show(element) {
    element.classList.remove('hidden');
};

function hide(element) {
    element.classList.add('hidden');
};


// allRecipesButton.addEventListener('click', showAllRecipes, recipeRepo.createAllRecipes())
// userBuildAttributes(user);
// goHomeButton.addEventListener('click', userBuildAttributes)
cookbookButton.addEventListener('click', mySavedRecipes)
