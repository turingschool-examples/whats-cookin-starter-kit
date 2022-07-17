import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import Ingredient from './classes/Ingredient';
import User from './classes/User';
const recipeData = require('./data/recipes');
const ingredientData = require('./data/ingredients');
const userData = require('./data/users');

// ***** Query Selectors ***** //

const homePage = document.querySelector('.main-page-container');
const recipePage = document.querySelector('.recipe-container');
const favoritesPage = document.querySelector('.main-favorite-container');
const searchContainer = document.querySelector('.search-container');
const homeButton = document.querySelector('.home-img');
const favoritePageButton = document.querySelector('.fav-img');
const searchButton = document.querySelector('.search-button');
const favoriteSearchButton = document.querySelector('.favorite-search-button')
const recipeSidebarList = document.querySelector('.list-recipes');
const icon1Img = document.querySelector('.icon-1-img');
const icon2Img = document.querySelector('.icon-2-img');
const icon3Img = document.querySelector('.icon-3-img');
const icon4Img = document.querySelector('.icon-4-img');
const icon5Img = document.querySelector('.icon-5-img');
const icon6Img = document.querySelector('.icon-6-img');
const featureImage = document.querySelector('.random-feature-img');
const selectedRecipeImg = document.querySelector('.selected-recipe-img');
const recipeNameBox = document.querySelector('.recipe-title-box');
const priceListBox = document.querySelector('.price-list-container');
const totalPriceBox = document.querySelector('.total-price-box');
const recipeDetailsBox = document.querySelector('.recipe-info-box');
const searchValue = document.querySelector('.search-input');
const favoriteSearchValue = document.querySelector('.search-favorite-input');
const tagRadioBtn = document.querySelector('.tag-search');
const nameRadioBtn = document.querySelector('.name-search');
const nameRadioBtnFavorite = document.querySelector('.name-search-favorite');
const tagRadioBtnFavorite = document.querySelector('.tag-search-favorite');
const ingredientBox = document.querySelector('.ingredients-listed');
const addFavoriteButton = document.querySelector('.add-favorite-button');

// ***** Event Listeners ***** //

window.addEventListener('load', updateMainPageRecipeIcons);
window.addEventListener('load', updateMainPageFeatureImg);
window.addEventListener('load', loadNewUser);
window.addEventListener('load', displayAllNames);
recipeSidebarList.addEventListener('click', viewRecipe);
homeButton.addEventListener('click', showHomePage);
searchButton.addEventListener('click', filterRecipe);
favoriteSearchButton.addEventListener('click', filterFavoriteRecipes)
favoritePageButton.addEventListener('click', showFavoritesPage);
addFavoriteButton.addEventListener('click', addToFavorites)

// ***** Global Variables ***** //

const allRecipes = recipeData.recipeData.map(recipe => new Recipe(recipe, ingredientData.ingredientsData));
const recipeRepository =  new RecipeRepository(allRecipes);
let user;
let selectedRecipeName;
let selectedRecipe;

// ***** Functions ***** //

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function loadNewUser() {
  user = new User(userData.usersData[getRandomIndex(userData.usersData)]);
}

function updateMainPageRecipeIcons() {
  icon1Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon2Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon3Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon4Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon5Img.src = allRecipes[getRandomIndex(allRecipes)].image;
  icon6Img.src = allRecipes[getRandomIndex(allRecipes)].image;
}

function updateMainPageFeatureImg(){
  featureImage.src = allRecipes[getRandomIndex(allRecipes)].image;
}

function displayRecipeNames(recipes) {
  recipeSidebarList.innerHTML = ''
  const recipeNames = recipes.map(recipe => recipe.name);
  recipeNames.forEach(name => {
    recipeSidebarList.innerHTML += `<p>${name}</p>`
  });
}

function displayAllNames() {
  displayRecipeNames(recipeRepository.recipeData);
}

function showHomePage() {
  hide(recipePage);
  show(homePage);
  show(searchContainer);
}

function showFavoritesPage() {
  hide(homePage);
  hide(searchContainer);
  hide(recipePage);
  show(favoritesPage);
}

function viewRecipe(event) {
  selectedRecipeName = event.target.innerText;
  selectedRecipe = allRecipes.filter(recipe => selectedRecipeName === recipe.name)[0];
  hide(homePage);
  hide(searchContainer);
  show(recipePage);
  displaySelectedRecipeName();
  displayRecipeInstructions();
  displayIngredientNames();
  displayIngredientCosts();
  // displayIngredientQuantities();
  displayTotalCostOfAllIngredients();
  displaySelectedRecipeImg();
}

function displaySelectedRecipeName() {
  recipeNameBox.innerText = selectedRecipe.name;
}

function displaySelectedRecipeImg() {
  selectedRecipeImg.src = selectedRecipe.image;
}

function displayRecipeInstructions() {
  recipeDetailsBox.innerHTML = '';
  selectedRecipe.returnRecipeInstructions().forEach(instruction => {
  recipeDetailsBox.innerHTML += `<p class='recipe-instructions'> ${instruction} </p></br>`;
  });
}

function displayIngredientNames() {
  ingredientBox.innerHTML = '';
  selectedRecipe.getIngredientNames().forEach(ingredient => {
  ingredientBox.innerHTML += `<p class='recipe-ingredients'> ${ingredient} </p></br>`;
  });
}

function displayIngredientCosts() {
  priceListBox.innerHTML = '';
  selectedRecipe.getCostOfIngredientsInDollars().forEach(cost => {
  priceListBox.innerHTML += `<p class='ingredient-prices'> ${cost} </p></br>`;
  });
}

// function displayIngredientQuantities() {
//   quantityBox.innerHTML = '';
//   selectedRecipe[0].getAmountOfIngredients().forEach(amount => {
//   quantityBox.innerHTML += `<p class='ingredient-quantities'> ${amount} </p></br>`;
//   });
// }

function displayTotalCostOfAllIngredients() {
  totalPriceBox.innerText = selectedRecipe.getCostOfRecipe();
}

function filterRecipe(event) {
  event.preventDefault();
  if (tagRadioBtn.checked) {
    filterRecipeByTag(searchValue.value);
  } else if (nameRadioBtn.checked) {
    filterRecipeByName(searchValue.value);
  } 
}

function filterRecipeByTag(tag) {
  let input = tag.toLowerCase();
  let filteredRecipes = recipeRepository.filterByTag(input);
  displayRecipeNames(filteredRecipes);
}

function filterRecipeByName(name) {
  // let input = name.toLowerCase()
  // let lowerCaseRecipes = recipeRepository.recipeData
  // lowerCaseRecipes.forEach(recipe => {
  //   recipe.name = recipe.name.toLowerCase()
  // })
  let filteredRecipes = recipeRepository.filterByName(name);
  displayRecipeNames(filteredRecipes);
}

function addToFavorites() {
  user.addRecipesToCook(selectedRecipe)
  console.log(user.recipesToCook)
}

function filterFavoriteRecipes(event) {
  event.preventDefault();
  if (tagRadioBtnFavorite.checked) {
    filterFavoriteRecipesByTag(favoriteSearchValue.value);
  } else if (nameRadioBtnFavorite.checked) {
    filterFavoriteRecipesByName(favoriteSearchValue.value);
  } 
}

function filterFavoriteRecipesByTag(tag) {
  let input = tag.toLowerCase();
  let filteredRecipes = user.filterSavedRecipesByTag(input);
  // display favorite recipe images
}

function filterFavoriteRecipesByName(name) {
  let filteredRecipes = user.filterSavedRecipesByName(name);
  // display favorite recipe images
}