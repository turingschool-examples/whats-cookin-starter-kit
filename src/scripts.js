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
// const recipePicBox = document.querySelector('.recipe-pic-box');
const userWelcome = document.querySelector('.user-welcome');

const homeButton = document.getElementById('homeButton');
const allRecipesButton = document.getElementById('allRecipesButton');
const savedRecipesButton = document.getElementById('savedRecipesButton');
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
const allRecipesContainer = document.querySelector('.all-recipes-view');
// const recipePicBoxes = document.querySelectorAll('.recipe-pic-box');


// ###########  Global Variables  ###############
const recipeRepo = new RecipeRepository(recipeData);
const user = new User(usersData[randomIndex(usersData)]);
console.log(user);

window.addEventListener('load', welcomeUser);
window.addEventListener('load', populateRecipesInHomeView);
homeButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', populateAllRecipesView);
savedRecipesButton.addEventListener('click', displaySavedRecipesView);
// recipeImages.addEventListener('click', populateChosenRecipe);
// myFavoritesButton.addEventListener('click', )
// pantryButton.addEventListener('click', )

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function welcomeUser() {
  userWelcome.innerText = `Feeling hungry, ${user.name}?`;
}

function populateRecipesInHomeView() {

  recipePicBoxes.forEach((image, index) => {
    image.innerHTML += `<img class='recipe-image' id='${recipeRepo.recipeData[index].id}' src='${recipeRepo.recipeData[index].image}'>
    <p class='recipe-label'>${recipeRepo.recipeData[index].name}</p>`;
  });

}

function populateAllRecipesView() {

  displayAllRecipesView()
  allRecipesContainer.innerHTML = '';

  recipeRepo.recipeData.forEach((recipe) => {
    allRecipesContainer.innerHTML += `<img class='all-recipes-pic-box'
    id='${recipe.id}' src='${recipe.image}'>
    <p class='recipe-label'>${recipe.name}</p>`;
  })

}

function populateChosenRecipe() {
  displayChosenRecipeView();
  // recipeName.innerText = "Hello";
  console.log(recipePicBoxes);
}



function hide(elements) {
  elements.forEach((element) => {
    element.classList.add('hidden')
  })
}

function show(elements) {
  elements.forEach((element) => {
    element.classList.remove('hidden')
  })
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
