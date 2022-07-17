import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import ingredientsData from './data/ingredients';
import recipeData from './data/recipes';
import usersData from './data/users';
import Ingredient from './classes/Ingredient';
import Recipe from './classes/Recipe';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';

const recipeImages = document.querySelectorAll('.recipe-image');
const recipePicBoxes = document.querySelectorAll('.recipe-pic-box');
const userWelcome = document.querySelector('.user-welcome');

const homeButton = document.getElementById('homeButton');
const allRecipesButton = document.getElementById('allRecipesButton');
const savedRecipesButton = document.getElementById('savedRecipesButton');
const saveRecipeButton = document.getElementById('saveRecipeButton');
// const myFavoritesButton = document.getElementById('myFavoritesButton')
// const pantryButton = document.getElementById('pantryButton')

// const mainSectionTitle = document.querySelector('.main-section-title')
const searchImage = document.querySelector('.search-image');
const searchInput = document.querySelector('.search-input');
const homeViewContainer = document.querySelector('.home-view-container');
const recipeViewContainer = document.querySelector('.recipe-view-container');
const savedRecipesContainer = document.querySelector('.saved-recipes-view');
const recipeViewSmallBox = document.querySelector('.recipe-view-small-box');
const recipeName = document.querySelector('.recipe-name');
const ingredientDetails = document.querySelector('.ingredient-details');
const recipeViewBigBox = document.querySelector('.recipe-view-big-box');
const recipeViewPicBox = document.querySelector('.recipe-view-pic-box');
const cookingInstructions = document.querySelector('.cooking-instructions');
const allRecipesContainer = document.querySelector('.all-recipes-view');
const ingredientCost = document.querySelector('.ingredient-cost');
const trashCan = document.querySelectorAll('.trash-can');


// ###########  Global Variables  ###############
const recipeRepo = new RecipeRepository(recipeData);
const user = new User(usersData[randomIndex(usersData)]);
console.log(user);

window.addEventListener('load', welcomeUser);
window.addEventListener('load', populateRecipesInHomeView);
homeButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', populateAllRecipesView);
savedRecipesButton.addEventListener('click', populateSavedRecipesView);
homeViewContainer.addEventListener('click', populateChosenRecipe);
allRecipesContainer.addEventListener('click', populateChosenRecipe);
saveRecipeButton.addEventListener('click', saveChosenRecipe);
// myFavoritesButton.addEventListener('click', )
// pantryButton.addEventListener('click', )
savedRecipesContainer.addEventListener('click', deleteRecipe);
savedRecipesContainer.addEventListener('click', populateChosenRecipe);

const pageNames = [
  'My Grandma Taught Me This',
  `Let's Eat Grandpa`,
  'Eating My Empire',
  'Dribbling Spoonfuls',
  'Yum Yum & Tum Tum',
  'Bite My Kitchen',
  'Big Taste Table',
  'Cooking with Hubby',
  'Queen of Tarts',
  `What ISN'T cookin'?`,
  'THANK YOU BASED COLE',
  'Eat to change your life',
  `What's Eating`,
  'Not to be rude but who names their kid'
]

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomRecipe() {
  const recipeIndex = randomIndex(recipeRepo.recipeData);
  return recipeRepo.recipeData[recipeIndex]
}

function getRandomPageName() {
  const pageNameIndex = randomIndex(pageNames);
  return pageNames[pageNameIndex]
}

function welcomeUser() {
  userWelcome.innerText = `${getRandomPageName()}, ${user.name}?`;
}

function populateRecipesInHomeView() {
  recipePicBoxes.forEach(image  => {
    var randomRecipe = getRandomRecipe()
    image.innerHTML += `<img class='recipe-image' id='${randomRecipe.id}' src='${randomRecipe.image}'>
    <p class='recipe-label'>${randomRecipe.name}</p>`;
  });
}

//functions to affect the all recipes view

function populateAllRecipesView() {
  displayAllRecipesView()
  allRecipesContainer.innerHTML = '';

  recipeRepo.recipeData.forEach((recipe) => {
    allRecipesContainer.innerHTML += `<img class='all-recipes-pic-box'
    id='${recipe.id}' src='${recipe.image}'>
    <p class='recipe-label'>${recipe.name}</p>`;
  })

}

//functions to affect the saved recipes view

function populateSavedRecipesView() {
  displaySavedRecipesView()
  savedRecipesContainer.innerHTML = '';
  user.recipesToCook.forEach((recipe) => {
    savedRecipesContainer.innerHTML += `<div class='trash-this-one'>
    <img class='saved-recipes-pic-box'
    id='${recipe.id}' src='${recipe.image}'>
    <p class='recipe-label'>${recipe.name}</p>
    <img class='trash-can' src='./trash.png'>
    </div>`;
  })

}

//functions to populate the chosen recipe view

function populateChosenRecipe(event) {
  const recipeObjs = recipeRepo.convertRecipeObjects();
  event.preventDefault();
  let targetID = event.target.id
  recipeObjs.forEach(recipe => {
    if (recipe.id == targetID) {
      displayChosenRecipeView();
      assignChosenRecipeProperties(recipe);
    }
  })
}

function assignChosenRecipeProperties(recipe) {
  recipeName.innerText = recipe.name;
  ingredientDetails.innerText = `Ingredients required:
  ${returnRecipeIngredientsAndCostPerServing(recipe)}`;
  ingredientCost.innerText = `Cost of Ingredients: $${recipe.returnIngredientCosts()}`;
  cookingInstructions.innerText= `Recipe Instructions:
  ${recipe.returnRecipeInstructions()}`;
  recipeViewPicBox.innerHTML = '';
  recipeViewPicBox.innerHTML += `<img class='recipe-view-pic' src='${recipe.image}'>
  <img class='recipe-view-pic' src='https://us.123rf.com/450wm/deagreez/deagreez1910/deagreez191008478/133027063-portrait-of-sad-upset-girl-hold-hand-feel-hungry-have-stomach-ache-want-eat-more-unhealthy-dieting-c.jpg?ver=6'>`
}


function returnRecipeIngredientsAndCostPerServing(recipe) {
  const ingredientNames = recipe.returnIngredientNames();
  const quantitiesNeeded = recipe.ingredients.map(ingredient => ingredient.quantity.amount)
  const units = recipe.ingredients.map(ingredient => ingredient.quantity.unit);
  const allInfo = ingredientNames.map((name, index) => {
    return `
     ${name}: ${quantitiesNeeded[index]} ${units[index]}`;
  })
  return allInfo;
}

//functions to affect displaying different views and hiding others

function hide(elements) {
  elements.forEach((element) => {
    element.classList.add('hidden')
  })
}

function show(elements) {
  elements.forEach((element) => {
    element.classList.remove('hidden')
  })
  saveRecipeButton.innerText = 'Save Recipe';
}

function displayHomeView(){
  hide([homeButton,
        recipeViewContainer,
        savedRecipesContainer,
        allRecipesContainer
  ])
  show([allRecipesButton,
        savedRecipesButton,
        homeViewContainer,
  ])
}

function displaySavedRecipesView(){
  hide([savedRecipesButton,
        allRecipesContainer,
        recipeViewContainer,
        homeViewContainer
  ])
  show([homeButton,
        allRecipesButton,
        savedRecipesContainer
  ])
}

function displayAllRecipesView() {
  hide([allRecipesButton,
        homeViewContainer,
        recipeViewContainer,
        savedRecipesContainer
      ])
  show([homeButton,
        savedRecipesButton,
        allRecipesContainer,
      ])
}

function displayChosenRecipeView() {
  hide([savedRecipesContainer,
        homeViewContainer,
        allRecipesContainer,
  ])
  show([homeButton,
      savedRecipesButton,
      allRecipesButton,
      recipeViewContainer
  ])
}
// console.log(recipePicBoxes);

//functions to save/remove a recipe

function saveChosenRecipe(){
saveRecipeButton.innerText = 'Recipe Saved!'

recipeData.forEach((recipe) => {
  if (recipeName.innerText === recipe.name && !user.recipesToCook.includes(recipe)) {
    user.addRecipeToCook(recipe)}
})
console.log('to cook:', user.recipesToCook)
}

function deleteRecipe(event) {
  if (event.target.classList.contains("trash-can")) {
    event.target.closest('div').remove();
  }
}
