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
let recipeRepo = new RecipeRepository(recipeData)
let newRecipe = new Recipe(recipeData[0], ingredientsData)
const users = []
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
const user = new Users(usersData[2])
const recipe = new Recipe(recipeData[recipeID])

// QuerySelectors

const favoriteButton = document.querySelector('#favorite-button')
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
const goHomeButton = document.querySelector('.home-button')
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
});
// radioSearchButton.addEventListener('click', filterRecipeByTag)
searchButton.addEventListener('click', searchRecipe)




function showAllRecipes() {
    const recipes = recipeRepo.createAllRecipes(ingredientsData)
    recipeCard.innerHTML =''
    recipes.forEach((recipe) => {
      recipeCard.innerHTML += `<button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>`
    })
    console.log('IT WOEKS')
}

function showAllRecipeDetails(id) {
newRecipe = recipeRepo.allRecipes.find(recipe => recipe.id === parseInt(id))
newRecipe.makeIngredientData()
ingredientCard.innerHTML = `<div>
<ul>
<h2> RECIPE INFORMATION </h2>
<li> NAME: ${newRecipe.name}</li>
<li> TOTAL COST: ${newRecipe.getCostToDollar()}</li>
</ul>
</div>
<h3> INGREDIENTS </h3>`
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
})
hide(recipeCardWrapper)
}


function searchRecipe(event) {
  event.preventDefault();
  if ( !searchBox.value ) {
    showAllRecipes( );
  }
  const tagSearched = recipeRepo.filterByTag( searchBox.value );
  const nameSearched = recipeRepo.filterByName( searchBox.value);
  if ( tagSearched.length > 0 ) {
    console.log( 'tagSearched: ', tagSearched )
    recipeRepo.filteredTags = tagSearched 
    displayRecipeByTag()
  } else if ( nameSearched.length > 0 ) {
    console.log( 'nameSearched: ', nameSearched )
    recipeRepo.filteredNames = nameSearched 
    return displayRecipeByName()
  } else {
   return showAllRecipes();
  }
 }

 function displayRecipeByTag( ) {
  const result = recipeRepo.filteredTags.map( recipe => {
      console.log( 'TAG RECIPE: ', recipe)
      return `<section class='recipe-card' id="recipeCard">
      <img src="${ recipe.image }" class="recipe-image" alt="">
      <h3>${ recipe.name }</h3>
      <button class="lets-make-it-button" id="${ recipe.id }">Let's Make It!</button>
      <div>
      <button class="save-button" id= ${ recipe.id }>Save to cooking profile!</button>
      </div>
      </section>`
  } );
  recipeRepo.filteredTags = recipeCard;
  return recipeCard.innerHTML = result;
}

function displayRecipeByName( ) {
  const result = recipeRepo.filteredTags.map( recipe => {
      console.log( 'TAG RECIPE: ', recipe)
      return `<section class='recipe-card' id="recipeCard">
      <img src="${ recipe.image }" class="recipe-image" alt="">
      <h3>${ recipe.name }</h3>
      <button class="lets-make-it-button" id="${ recipe.id }">Let's Make It!</button>
      <div>
      <button class="save-button" id= ${ recipe.id }>Save to cooking profile!</button>
      </div>
      </section>`
  } );
  recipeRepo.filteredNames = recipeCard;
  return recipeCard.innerHTML = result;
}






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
// userBuildAttributes(user);
// goHomeButton.addEventListener('click', userBuildAttributes)