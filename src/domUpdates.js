//NOTE: Your DOM manipulation will occur in this file
import recipeData from "./data/recipes";
import { recipesfromName, recipesFromTag, findRecipe, findIngredientNames, calculateRecipeCost, recipeInstructions, shuffleData } from "../src/recipeUtils";
import ingredientsData from "./data/ingredients";
import usersData from "./data/users"
import { recipesToCook, saveRecipe, deleteRecipe, addSavedRecipesToUser } from "../src/userUtils";

// Query Selectors:
const allRecipesButton = document.querySelector('.all-recipes');
const frontRecipeDisplay = document.querySelector('.front-recipe-display');
const allRecipeDisplay = document.querySelector('.all-recipes-display');
const allFilterDisplay = document.querySelector('.all-filters');
const checkCategories = document.getElementsByName('checkbox');
const searchInput = document.getElementById('search-bar');
const singleRecipeDisplay = document.querySelector('.single-recipe-display');
const homeButton = document.querySelector('.title')

//Event Listeners
allRecipesButton.addEventListener('click', showRecipes);
allFilterDisplay.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkbox')) {
    renderFilteredRecipes(event)
  }
});
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    showSearchResults();
  }
})

allRecipeDisplay.addEventListener('click', function (event) {
  addHiddenClass([allRecipeDisplay]);
  removeHiddenClass([singleRecipeDisplay]);
  viewSelectedRecipe(event);
});

homeButton.addEventListener('click', function () {
  showHomePage()
  randomizeHomePage()
})
window.addEventListener('load', () => {
  randomizeHomePage();
  generateRandomUser(usersData);
})

//Event Handlers/Functions

const generateRandomUser = users => {
  var currentUser = users[Math.floor(Math.random() * users.length)];
  console.log(currentUser)
  return currentUser
}

function showSearchResults() {
  let searchValue = searchInput.value
  removeHiddenClass([allRecipeDisplay, allFilterDisplay])
  addHiddenClass([frontRecipeDisplay]);
    allRecipeDisplay.innerHTML = ''
    recipesfromName(recipeData, searchValue).forEach(recipe => allRecipeDisplay.innerHTML += `<div class = "recipe-wrapper">
    <img id="${recipe.name}" src="${recipe.image}" class="recipe">
    <div class = "recipe-info">
      <p>${recipe.name}</p>
      <p>Total Cost: $..</p>
    </div>`)
};


function showHomePage() {
  addHiddenClass([allRecipeDisplay], [allFilterDisplay]);
  removeHiddenClass([frontRecipeDisplay]);
}

function randomizeHomePage() {
  shuffleData(recipeData)
  frontRecipeDisplay.innerHTML = '';
  for (let i = 0; i < recipeData.length; i++) {
    frontRecipeDisplay.innerHTML = `
      <div class = "recipe-wrapper">
        <img id="front-recipe-1" src="${recipeData[0].image}" class="recipe">
        <div class = "recipe-info">
          <p>${recipeData[0].name}</p>
        </div>
        </div>
      <div class = "recipe-wrapper">
        <img id="front-recipe-2" src="${recipeData[1].image}"  class="recipe">
        <div class = "recipe-info">
          <p>${recipeData[1].name}</p>
        </div>
      </div>
      <div class = "recipe-wrapper">
        <img id="front-recipe-3" src="${recipeData[2].image}"  class="recipe">
        <div class = "recipe-info">
          <p>${recipeData[2].name}</p>
        </div>`
  }
}

function renderFilteredRecipes() {
  const tags = Array.from(checkCategories).filter((category) => category.checked).map(c => c.id)
  if (tags.length === 0) {
    showRecipes()
    return
  }
    let filtered = recipesFromTag(recipeData, tags);
    console.log(recipeData)
  allRecipeDisplay.innerHTML = '';
  filtered.forEach(recipe => allRecipeDisplay.innerHTML += `<div class = "recipe-wrapper">
      <img id="${recipe.name}" src="${recipe.image}" class="recipe">
      <div class = "recipe-info">
        <p>${recipe.name}</p>
        <p>Total Cost: $..</p
      </div>`)
};

function viewSelectedRecipe(event){
  const recipeName = event.target.id;
  const selectedRecipe = findRecipe(recipeData, recipeName);
  const recipeCost = calculateRecipeCost(selectedRecipe, ingredientsData);
  const ingredients = findIngredientNames(recipeData, recipeName);
  const instructions = recipeInstructions(selectedRecipe);
  addHiddenClass([allFilterDisplay]);
  singleRecipeDisplay.innerHTML= `
  <h2>${selectedRecipe.name}</h2>
  <img id="${selectedRecipe.id}" src="${selectedRecipe.image}" class="recipe" alt='${selectedRecipe.name}'>
  <p class="total-cost-box">This recipe costs a total of: $${recipeCost} to make!</p>
  <p class="ingredient-box">The ingredients you will need to make this recipe are: <br>
  ${ingredients}</p>
  <p class="instruction-box">Instructions: <br>
  ${instructions}</p>`;
}

function showRecipes() {
  removeHiddenClass([allRecipeDisplay, allFilterDisplay]);
  addHiddenClass([frontRecipeDisplay, singleRecipeDisplay]);
  allRecipeDisplay.innerHTML = ''
  recipeData.forEach(recipe => allRecipeDisplay.innerHTML += `
  <div class = "recipe-wrapper">
    <img id="${recipe.name}" src="${recipe.image}" class="recipe">
  <div class = "recipe-info">
    <p>${recipe.name}</p>
  </div>`);
};

function removeHiddenClass(elements) {
  return elements.forEach(element => element.classList.remove('hidden'));
};

function addHiddenClass(elements) {
  return elements.forEach(element => element.classList.add('hidden'));
};

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
function exampleFunction1(person) {
  console.log(`oh hi there ${person}`)
}

function exampleFunction2(person) {
  console.log(`bye now ${person}`)
}

export {
  exampleFunction1,
  exampleFunction2,
  showRecipes,
  removeHiddenClass,
  addHiddenClass,
  showHomePage,
  randomizeHomePage
}