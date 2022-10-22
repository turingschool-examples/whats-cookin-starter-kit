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
let currentRecipe;



//QUERY SELECTORS-----------------------------------------------
//Navbar QUERY SELECTORS ---------
//Home Page QUERY SELECTORS--------
//All Recipes Page QUERY SELECTORS--------
//Saved Recipes Page QUERY SELECTORS--------
//Specific Recipe Page QUERY SELECTORS--------
const specificRecipePage = document.querySelector('.specific-recipe-page');
const specificRecipeHeading = document.querySelector('.specific-recipe-heading');
const specificRecipeSaveButton = document.querySelector('.save-button');
const specificRecipeImage = document.querySelector('.specific-recipe-img');
const specificRecipeIngredients = document.querySelector('.specific-recipe-ingredients-list');
const specificRecipeInstructions = document.querySelector('.specific-recipe-instructions');
const specificRecipeCost = document.querySelector('.specific-recipe-cost');

const allRecipesMain = document.querySelector('.all-recipes-main') /* 🚨 Delete before pushing */

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
allRecipesMain.addEventListener('click', loadSpecificRecipe)

//Saved Recipes Page EVENT LISTENERS --------
//Specific Recipe Page EVENT LISTENERS --------


//FUNCTIONS------------------------------------------------------
//Global FUNCTIONS -------------
//Navbar FUNCTIONS ---------
//Home Page FUNCTIONS --------
//All Recipes Page FUNCTIONS --------
//Saved Recipes Page FUNCTIONS --------
//Specific Recipe Page FUNCTIONS --------

function loadSpecificRecipe(event) { //will put this in event listener on Cournty's all recipes page
  if (event.target.className === 'single-recipe-img') {
    currentRecipe = allRecipes.find(recipe => recipe.id === event.target.parentElement.id);
  }
  if (event.target.className === 'recipe-title-text') {
    currentRecipe = allRecipes.listOfAllRecipes.find(recipe => recipe.id === event.target.parentElement.parentElement.id);
  }
  if (event.target.className === 'single-recipe-img' || 'recipe-title-text') {
    
    allRecipesMain.classList.add('hide');
    specificRecipePage.classList.remove('hide');

    specificRecipeHeading.innerText = '',
    specificRecipeHeading.innerText = currentRecipe.name;

    // specificRecipeSaveButton.id = '',
    // specificRecipeSaveButton.id = currentRecipe.id; no: use the current Recipe

    specificRecipeImage.src = '';
    specificRecipeImage.src = currentRecipe.image;

    generateIngredientList(currentRecipe);
    generateInstructions(currentRecipe);
    generateCost(currentRecipe);
  }
}

function generateIngredientList(recipe) {
  
  // need to make an array of single string sentences that have the names, amount and unit
  // 
  // and array of objects with name, amount and unit
  //iterate thru currentRecipe.ingredients
  // 1. for each ID, search the allIngredients array and 

    currentRecipe.ingredients.reduce((list, ingredient) => {
      let ingredObj = {};
      ingredObj.name = 
      ingredObj.unit = 
      indredObj.amount =
      list.push(ingredObj)
      return list;
    }, [])
 
  
  specificRecipeIngredients.innerHTML = '';
  currentRecipe.ingredients.forEach(ingredient => {
    specificRecipeIngredients.innerHTML =+ `
    <li>${ingredient}</li>
    `
  })
}

function generateInstructions(recipe) {
  
}

function generateCost(recipe) {
  
}


// TEST : DELETE THIS

window.addEventListener('click', function(event) {
  console.log('ingredientsData: ', ingredientsData)
  console.log('ingredients in recipes: ', allRecipes.listOfAllRecipes[0].ingredients)


})