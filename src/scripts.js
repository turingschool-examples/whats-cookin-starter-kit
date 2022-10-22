//IMPORTS--------------------------------------------------------

import "./styles.css";
import loadData from "./apiCalls";
import RecipeRepository from "./classes/RecipeRepository";
import Recipe from "./classes/Recipe";
import Ingredient from "./classes/Ingredient-class";
import User from "./classes/User";
import "./images/turing-logo.png";
import "./images/AndrewProfile.png";
import "./images/BrettProfile.png";
import "./images/CourtneyProfile.png";
import "./images/DaniProfile.png";

//VARIABLES-----------------------------------------------------
//Global VARIABLES ---------
let userData;
let ingredientsData;
let recipeData;
let currentUser;
let allRecipes;

//Navbar VARIABLES ---------
//Home Page VARIABLES --------
//All Recipes Page VARIABLES --------
//Saved Recipes Page VARIABLES --------
//Specific Recipe Page VARIABLES --------


//QUERY SELECTORS-----------------------------------------------
//Navbar QUERY SELECTORS ---------
const allReipesPageButton = document.querySelector('.all-recipes-button')
const savedReipesPageButton = document.querySelector('.saved-recipes-button')
//Home Page QUERY SELECTORS--------
//All Recipes Page QUERY SELECTORS--------
const allRecipesMain = document.querySelector('.all-recipes-main')
const allRecipesPageTitle = document.querySelector('.page-title')
const allRecipeThumbnailsSection = document.querySelector('.all-recipe-thumbnails')
const allRecipeFilterTagOptions = document.querySelector('.list-of-tag-options')
//Saved Recipes Page QUERY SELECTORS--------
//Specific Recipe Page QUERY SELECTORS--------


//FETCH/CALL FUNCTIONS-------------------------------------------

Promise.all([
  loadData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"),
  loadData(
    "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
  ),
  loadData("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes"),
]).then((data) => {
  userData = data[0];
  ingredientsData = data[1];
  recipeData = data[2];

  createInstances(recipeData, ingredientsData, userData);

   allRecipes = new RecipeRepository(recipeData);
      console.log(allRecipes)
      console.log(currentUser)
});

function createInstances(dataSet1, dataSet2, dataSet3) {
  makeRecipesList(dataSet1);
  makeIngredientsList(dataSet2);
  currentUser = new User();
  currentUser.generateRandomUser(dataSet3.usersData);
}

function makeRecipesList(dataSet) {
  recipeData = dataSet.recipeData.map((element) => {
    return new Recipe(element);
  });
}

function makeIngredientsList(dataSet) {
  ingredientsData = dataSet.ingredientsData.map((element) => {
    return new Ingredient(element);
  });
}

//EVENT LISTENERS-------------------------------------------------
//Navbar EVENT LISTENERS ---------
//Home Page EVENT LISTENERS --------
//All Recipes Page EVENT LISTENERS --------
allReipesPageButton.addEventListener('click', displayAllRecipesPage);
allRecipeFilterTagOptions.addEventListener('click', displayRecipesOfSameTag)
//Saved Recipes Page EVENT LISTENERS --------
savedReipesPageButton.addEventListener('click', displaySavedRecipesPage)
//Specific Recipe Page EVENT LISTENERS --------


//FUNCTIONS------------------------------------------------------
//Global FUNCTIONS -------------
//Navbar FUNCTIONS ---------
//Home Page FUNCTIONS --------
//All Recipes Page FUNCTIONS --------
function displayAllRecipesPage() {

  console.log('I am listening!')
  createPageTitle('ALL RECIPES');
  displayRecipeThumbnails(allRecipes.listOfAllRecipes, '');
  createListOfTags(allRecipes.listOfAllRecipes);
};

function createPageTitle(title) {
  allRecipesPageTitle.innerText = title; 
};

//Both ALL and Saved Recipe Pages
function displayRecipeThumbnails(recipesList, trashbin) {
  let recipesThumbnailsSection = '';
  recipesList.forEach(recipe => {
    return recipesThumbnailsSection += `<section    class="single-recipe-thumbnail" id = "${recipe.id}"> <img class="single-recipe-img" src=${recipe.image} alt=${recipe.name}> <div class="single-recipe-text"> <p class="recipe-title-text">${recipe.name}</p> <p>${trashbin}</p> </div> </section>`
  });
  /* recipe.id is a number and we need to convert it to a string, I think what I have above should work....*/
  /* Potentially, i can put trashbin text in as an an argument and if it is saved page then when displayRecipeThumbnails is invoke, we pass in a trashbin icon as the argument and if not then we pass in an empty string- we will need to make sure that the css still works with this approach*/
  allRecipeThumbnailsSection.innerHTML = recipesThumbnailsSection;
};

function createListOfTags(recipesList) {
  let allTags = recipesList.reduce((prev, current) => {
    return prev.concat(current.tags);
  }, []);
  return allTags.filter((recipe, index) => allTags.indexOf(recipe) === index);
}

function createRecipesOfTag(tag, recipeList) {
  return recipeList.filter((recipe) => recipe.tags.includes(tag));
}

function displayRecipesOfSameTag() {
};

//Saved Recipes Page FUNCTIONS --------
function displaySavedRecipesPage() {
  console.log('Save page listening')
  createPageTitle('SAVED RECIPES');
  displayRecipeThumbnails(currentUser.recipesToCook, '🗑');
  createListOfTags(currentUser.recipesToCook);
};

//Specific Recipe Page FUNCTIONS --------