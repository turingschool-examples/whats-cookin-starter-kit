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
const users = []
const userId = getRandomUserId();
const recipeID = getRandomRecipe();
const user = new Users(usersData[2])
const recipe = new Recipe(recipeData[recipeID])
// QuerySelectors
const allRecipesButton = document.querySelector('#recipe-button')
const favoriteButton = document.querySelector('#favorite-button')
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
radioSearchButton.addEventListener('click', filterRecipeByTag)

// Global Variables
let recipeRepo = new RecipeRepository(recipeData)
let newRecipe = new Recipe(recipeData[0], ingredientsData)

function showAllRecipes() {
    const recipes = recipeRepo.createAllRecipes(ingredientsData)
    recipeCard.innerHTML =''
    recipes.forEach((recipe) => {
      recipeCard.innerHTML += `<button class="view-recipe-button" id=${recipe.id} data-recipeId=${recipe.id}> <h2 data-recipeId=${recipe.id}> ${recipe.name} </h2> 
      <img class='card-image' src=${recipe.image} data-recipeId=${recipe.id} alt=${recipe.name}>
      </button>`
    })

    /*
    do on page load show random new set of all recipes
    */


    hide(searchBar)
    hide(favoriteButton)
    // hide(cookbookButton)
    // hide(cardFavoriteButton);
    hide(allRecipesButton);
    // hide(addToCookbookButton);
    // hide(unFavoriteButton);
    // hide(rightBox);
    show(goHomeButton)
    console.log('IT WOEKS')

    // HERE we need to: recipeRepo.allRecipes append to main section of our app
    // want to loop through all recipes somehow, forEach/for loop
    // in order to get it to populate on the DOM
    // inner.HTML

    //MAKE WHATS COOKING A TOGGLE SO IT CAN TAKE US BACK TO THE
    //TAKE HOME PAGE WHEN WE CLICK IT AFTER SHOWING ALL RECIPES
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



function filterRecipeByTag(event) {
   event.preventDefault();
  const radioButtons = document.getElementsByName('tags')
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
goHomeButton.addEventListener('click', userBuildAttributes)