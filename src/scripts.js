// ###########  Imports  ###########

import './styles.css';
import {fetchData} from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';
import Pantry from './classes/Pantry';

// ###########  Query Selectors ###########

const recipePicBoxes = document.querySelectorAll('.recipe-pic-box');
const userWelcome = document.querySelector('.user-welcome');
const homeButton = document.getElementById('homeButton');
const allRecipesButton = document.getElementById('allRecipesButton');
const savedRecipesButton = document.getElementById('savedRecipesButton');
const pantryButton = document.getElementById('pantryButton');
const searchButton = document.getElementById('searchButton')
const searchButton2 = document.getElementById('searchButton2');
const saveRecipeButton = document.getElementById('saveRecipeButton');
const deleteRecipeButton = document.getElementById('deleteRecipeButton');
const savedConfirmation = document.querySelector('.big-box-saved-confirmation');
const buttonInstructions = document.querySelector('.big-box-button-instructions');
const searchInput = document.querySelector('.search-input');
const searchInput2 = document.querySelector('.search-input2');
const homeViewContainer = document.querySelector('.home-view-container');
const recipeViewContainer = document.querySelector('.recipe-view-container');
const savedRecipesContainer = document.querySelector('.saved-recipes-view');
const smallPantryWindow = document.querySelector('.small-pantry-window')
const recipeName = document.querySelector('.recipe-name');
const ingredientDetails = document.querySelector('.ingredient-details');
const recipeViewPicBox = document.querySelector('.recipe-view-pic-box');
const cookingInstructions = document.querySelector('.cooking-instructions');
const allRecipesContainer = document.querySelector('.all-recipes-view');
const ingredientCost = document.querySelector('.ingredient-cost');
const filteredContainer = document.querySelector('.filtered-recipes-view')
const pantryContainer = document.querySelector('.pantry-view')
const filterByName = document.getElementById('filterByName');
const filterByName2 = document.getElementById('filterByName2');
const userSearchContainer1 = document.querySelector('.user-search-container');
const userSearchContainer2 = document.querySelector('.user-search-container2');
const form = document.querySelector('.form')

// ###########  Global Variables  ###########

let recipeRepo;
let user;
let usersData;
let recipeData;
let pantry

// ###########  Promises  ###########
function getPromiseData() {
  Promise.all( [fetchData('users'), fetchData('recipes'), fetchData('ingredients')]).then(data => {
    usersData = data[0].usersData;
    recipeData = data[1].recipeData;
    user = new User(usersData[randomIndex(usersData)]);
    recipeRepo = new RecipeRepository(recipeData);
    pantry = new Pantry(user)
    welcomeUser();
    populateRecipesInHomeView();
  })
}

// ###########  Event Listeners  ###########

window.addEventListener('load', getPromiseData);
homeButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', populateAllRecipesView);
savedRecipesButton.addEventListener('click', populateSavedRecipesView);
pantryButton.addEventListener('click', firePantryView)
homeViewContainer.addEventListener('click', populateChosenRecipe);
filteredContainer.addEventListener('click', populateChosenRecipe);
searchButton.addEventListener('click', searchButtonAction);
searchButton2.addEventListener('click', filterSaved);
allRecipesContainer.addEventListener('click', populateChosenRecipe);
saveRecipeButton.addEventListener('click', saveChosenRecipe);
deleteRecipeButton.addEventListener('click', deleteChosenRecipe);
savedRecipesContainer.addEventListener('click', deleteRecipe);
savedRecipesContainer.addEventListener('click', populateChosenRecipe);
savedRecipesContainer.addEventListener('click', fireIngredientEvaluation);

// ###########  On-Load Functions  ###########

const pageNames = [
  'My Grandma Taught Me This,',
  `Let's Eat`,
  'Eating My Empire,',
  'Dribbling Spoonfuls for',
  'Yum Yum & Tum Tum with',
  'Bite My Kitchen,',
  '"Big Taste Table," starring',
  'Cooking with Hubby,',
  'Queen of Tarts:',
  `What ISN'T cookin',`,
  'THANK YOU BASED COLE!! Oh, hi',
  'Eat to change your life,',
  `What's Eating`,
  'Who names their kid',
  'Your goose is cooked,',
  'GET IN MAH BELLY,',
  'Dirty Steve sends his regards,'
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
  userWelcome.innerText = `${getRandomPageName()} ${user.name}?`;
}

function populateRecipesInHomeView() {
  recipePicBoxes.forEach(image  => {
    var randomRecipe = getRandomRecipe()
    image.innerHTML += `<img class='recipe-image' id='${randomRecipe.id}' src='${randomRecipe.image}' alt='${randomRecipe.name}'>
    <p class='recipe-label'>${randomRecipe.name}</p>`;
  });
}

// ###########  All Recipes View Functions  ###########

function populateAllRecipesView() {
  displayAllRecipesView()
  allRecipesContainer.innerHTML = '';

  recipeRepo.recipeData.forEach((recipe) => {
    allRecipesContainer.innerHTML += `<img class='all-recipes-pic-box'
    id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <p class='recipe-label'>${recipe.name}</p>`;
  })
}

// ###########  Saved Recipes View Functions  ###########

function populateSavedRecipesView() {
  displaySavedRecipesView()
  savedRecipesContainer.innerHTML = '';
  user.recipesToCook.forEach((recipe) => {
    savedRecipesContainer.innerHTML += 
    `<section class='trash-this-one'>
      <img class='saved-recipes-pic-box'
      id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
      <div class='saved-recipe-info-bar'>
        <p class='recipe-label'>${recipe.name}</p>
        <img class='recipe-check-button' src='./check.svg.png' id='${recipe}'>
        <img class='trash-can' src='./trash.png' alt='click this trash can to throw away ${recipe.name}'>
      </div>
    </section>`;
  })

}

function firePantryView(){
  populatePantryView()
  displayPantryView()
}

function populatePantryView() {
  let pantryInfo = pantry.returnIngredientNamesAndAmounts()
  pantryContainer.innerHTML = ''
  pantryContainer.innerHTML = `<h2 class='pantryText'>${pantryInfo}</h2>`
}

// ###########  Chosen Recipe View Functions  ###########

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
  ${returnRecipeIngredientsAndQuantities(recipe)}`;
  ingredientCost.innerText = `Cost of Ingredients: $${recipe.returnIngredientCosts()}`;
  cookingInstructions.innerText= `Recipe Instructions:
  ${recipe.returnRecipeInstructions()}`;
  recipeViewPicBox.innerHTML = '';
  recipeViewPicBox.innerHTML += `<img class='recipe-view-pic' src='${recipe.image}' alt='${recipe.name}'>
  <img class='recipe-view-pic' src='https://us.123rf.com/450wm/deagreez/deagreez1910/deagreez191008478/133027063-portrait-of-sad-upset-girl-hold-hand-feel-hungry-have-stomach-ache-want-eat-more-unhealthy-dieting-c.jpg?ver=6' alt='Hungry woman holding an empty plate, feeling hungry'>`
}


function returnRecipeIngredientsAndQuantities(recipe) {
  const ingredientNames = recipe.returnIngredientNames();
  const quantitiesNeeded = recipe.ingredients.map(ingredient => ingredient.quantity.amount)
  const units = recipe.ingredients.map(ingredient => ingredient.quantity.unit);
  const allInfo = ingredientNames.map((name, index) => {
    return `
     ${name}: ${quantitiesNeeded[index]} ${units[index]}`;
  })
  return allInfo;
}

// ###########  Saved Recipe View Search Functions  ###########

function filterSaved() {
  if (filterByName2.checked) {
    showFilteredSavedNames(searchInput2.value)
  } 
  else {
    showFilteredSavedTags(searchInput2.value);
  }
  displayFilteredView();
}


function showFilteredSavedTags(tags) {
  const tagResults = user.listRecipeToCookByTag(tags);
  if (tagResults.length === 0) {
    filteredContainer.innerHTML = '';
    filteredContainer.innerHTML += "<h2 class='main-section-title'>Sorry, this search returned no results.</h2>";
  } else {
  filteredContainer.innerHTML = '';
  tagResults.forEach((recipe) => {
  filteredContainer.innerHTML += `<img class='recipe-pic-box'
    id='${recipe.id}' src='${recipe.image}'>
    <p class='recipe-label'>${recipe.name}</p>`;
   })
  }
}

function showFilteredSavedNames(name) {
  const nameResults = user.listRecipebyToCookName(name);
  if (nameResults.length === 0) {
    filteredContainer.innerHTML = '';
    filteredContainer.innerHTML += "<h2 class='main-section-title'>Sorry, this search returned no results.</h2>";
  } else {
  filteredContainer.innerHTML = '';
  nameResults.forEach((recipe) => {
    filteredContainer.innerHTML += `<img class='recipe-pic-box'
      id='${recipe.id}' src='${recipe.image}'>
      <p class='recipe-label'>${recipe.name}</p>`;
    })
  }
}

// ###########  Main Search Functions  ###########

function searchButtonAction() {
  if (filterByName.checked) {
    showFilteredNames(searchInput.value);
  } 
  else {
    showFilteredTags(searchInput.value);
  }
  displayFilteredView();
}

function showFilteredNames(name) {
  const nameResults = recipeRepo.listRecipeNames(name);
  if (nameResults.length === 0) {
    filteredContainer.innerHTML = '';
    filteredContainer.innerHTML += "<h2 class='main-section-title'>Sorry, this search returned no results.</h2>";
  } else {
  filteredContainer.innerHTML = '';
  nameResults.forEach((recipe) => {
   filteredContainer.innerHTML += `<img class='recipe-pic-box'
     id='${recipe.id}' src='${recipe.image}'>
     <p class='recipe-label'>${recipe.name}</p>`;
   })
  }
 }


function showFilteredTags(tag) {
 const tagResults = recipeRepo.listRecipeTags(tag);
 if (tagResults.length === 0) {
  filteredContainer.innerHTML = '';
  filteredContainer.innerHTML += "<h2 class='main-section-title'>Sorry, this search returned no results.</h2>";
 } else {
 filteredContainer.innerHTML = '';
 tagResults.forEach((recipe) => {
  filteredContainer.innerHTML += `<img class='recipe-pic-box'
    id='${recipe.id}' src='${recipe.image}'>
    <p class='recipe-label'>${recipe.name}</p>`;
    })
  }
}

// ###########  Show/Hide View Functions  ###########

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
        allRecipesContainer,
        filteredContainer,
        userSearchContainer2,
        smallPantryWindow
        
  ])
  show([allRecipesButton,
        savedRecipesButton,
        homeViewContainer,
        userSearchContainer1,
        form,
        searchButton,
        pantryButton,
        pantryContainer
  ])
}

function displaySavedRecipesView(){
  hide([savedRecipesButton,
        allRecipesContainer,
        recipeViewContainer,
        homeViewContainer,
        filteredContainer,
        userSearchContainer1,
        form,
        searchButton,
        pantryContainer
  ])
  show([homeButton,
        allRecipesButton,
        savedRecipesContainer,
        userSearchContainer2,
        pantryButton,
        smallPantryWindow
  ])
}

function displayAllRecipesView() {
  hide([allRecipesButton,
        homeViewContainer,
        recipeViewContainer,
        savedRecipesContainer,
        filteredContainer,
        userSearchContainer2,
        pantryContainer,
        smallPantryWindow
      ])
  show([homeButton,
        savedRecipesButton,
        allRecipesContainer,
        userSearchContainer1,
        form,
        searchButton,
        pantryButton
      ])
}

function displayChosenRecipeView() {
  hide([savedRecipesContainer,
        homeViewContainer,
        allRecipesContainer,
        filteredContainer,
        userSearchContainer2,
        pantryContainer,
        smallPantryWindow
  ])
  show([homeButton,
      savedRecipesButton,
      allRecipesButton,
      recipeViewContainer,
      userSearchContainer1,
      form,
      searchButton,
      pantryButton
  ])
}

function displayFilteredView() {
  hide([savedRecipesContainer,
        homeViewContainer,
        allRecipesContainer,
        recipeViewContainer,
        userSearchContainer2,
        pantryContainer,
        smallPantryWindow
  ])
  show([homeButton,
      savedRecipesButton,
      allRecipesButton,
      filteredContainer,
      userSearchContainer1,
      form,
      searchButton,
      pantryButton
  ])
}

function displayPantryView(){
  hide([pantryButton,
      homeViewContainer,
      recipeViewContainer,
      savedRecipesContainer,
      allRecipesContainer,
      filteredContainer,
      userSearchContainer2,
      smallPantryWindow
  ])
  
  show([pantryContainer,
        homeButton,
        savedRecipesButton,
        allRecipesButton,
        userSearchContainer1,
        form,
        searchButton,
  ])
}


// ###########  Save/Remove Recipe Functions  ###########


function saveChosenRecipe() {
  savedConfirmation.innerText = 'RECIPE SAVED!'
  buttonInstructions.innerText = 'Click this button to remove this recipe from your saved recipes page'
  show([savedConfirmation, deleteRecipeButton])
  hide([saveRecipeButton])
  recipeData.forEach((recipe) => {
    if (recipeName.innerText === recipe.name && !user.recipesToCook.includes(recipe)) {
      user.addRecipeToCook(recipe)}
  })
}

function deleteChosenRecipe(){
  savedConfirmation.innerText = 'RECIPE DELETED!'
  buttonInstructions.innerText = 'Click this button to add this recipe to your saved recipes page'
  show([saveRecipeButton])
  hide([deleteRecipeButton])
  user.recipesToCook.forEach((recipe, index) => {
    if (recipe.name === recipeName.innerText){
      user.recipesToCook.splice(index, 1)
    }
  })
}

function deleteRecipe(event) {
  let alt = event.target.alt;
  if (event.target.classList.contains("trash-can")) {
    event.target.closest('section').remove();
  }
  user.recipesToCook.forEach((recipe, index) => {
    if (alt === `click this trash can to throw away ${recipe.name}`) {
      user.recipesToCook.splice(index, 1);
    }
  })
}

function fireIngredientEvaluation(event) {
  if (event.target.classList.contains('recipe-check-button')) {
    let recipeToCheck = event.target.id
    console.log(recipeToCheck)
    // returnIfRecipeIsCookable(recipeToCheck);
  }
}