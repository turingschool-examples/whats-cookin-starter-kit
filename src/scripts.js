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
const userWelcome = document.querySelector('.user-welcome')

const homeButton = document.getElementById('homeButton')
const allRecipesButton = document.getElementById('allRecipesButton')
const savedRecipesButton = document.getElementById('savedRecipesButton')
// const myFavoritesButton = document.getElementById('myFavoritesButton')
// const pantryButton = document.getElementById('pantryButton')

// const mainSectionTitle = document.querySelector('.main-section-title')
const searchImage = document.querySelector('.search-image')
const searchInput = document.querySelector('.search-input')

const homeViewContainer = document.querySelector('.home-view-container')
const recipeViewContainer = document.querySelector('.recipe-view-container')
const savedRecipesContainer = document.querySelector('.saved-recipes-view')
const recipeViewSmallBox = document.querySelector('.recipe-view-small-box')
const ingredientName = document.querySelector('.ingredient-name')
const ingredientDetails = document.querySelector('.ingredient-details')
const recipeViewBigBox = document.querySelector('.recipe-view-big-box')
const recipeViewPicBox = document.querySelector('.recipe-view-pic-box')
const allRecipesContainer = document.querySelector('.all-recipes-view')



const recipeRepo = new RecipeRepository(recipeData);
const user = new User(usersData[randomIndex(usersData)]);
console.log(user);

window.addEventListener('load', welcomeUser)
window.addEventListener('load', populateRecipesInHomeView);
homeButton.addEventListener('click', displayHomeView)
allRecipesButton.addEventListener('click', displayAllRecipesView)
savedRecipesButton.addEventListener('click', displaySavedRecipesView)
// myFavoritesButton.addEventListener('click', )
// pantryButton.addEventListener('click', )

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function welcomeUser() {
  userWelcome.innerText = `Feeling hungry, ${user.name}?`;
}

function populateRecipesInHomeView() {

  const imageLinks = recipeRepo.recipeData.map(recipe => {
    return recipe.image;
  })

  recipePicBoxes.forEach((image, index) => {
    // image.innerHTML = '';
    image.innerHTML += `<img class='recipe-image' src='${imageLinks[index]}'>
    <p class='recipe-label'>Name</p>`;
  });
  // console.log(recipePicBoxes);
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
        allRecipesContainer
      ])
}
