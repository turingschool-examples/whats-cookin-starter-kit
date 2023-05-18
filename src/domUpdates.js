//NOTE: Your DOM manipulation will occur in this file
import recipeData from "./data/recipes";
import { recipesFromTag } from "./recipeUtils";
import { recipesfromName } from '../src/recipeUtils';

// Query Selectors:
const allRecipesButton = document.querySelector('.all-recipes');
const frontRecipeDisplay = document.querySelector('.front-recipe-display');
const allRecipeDisplay = document.querySelector('.all-recipes-display');
const allFilterDisplay = document.querySelector('.all-filters');
const checkCategories = document.getElementsByName('checkbox');
const searchInput = document.getElementById('search-bar');
const singleRecipeDisplay = document.querySelector('.single-recipe-display');

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

//Event Handlers/Functions
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

function renderFilteredRecipes() {
  const tags = Array.from(checkCategories).filter((category) => category.checked).map(c => c.id)
  if (tags.length === 0) {
    showRecipes()
    return
  }
    let filtered = recipesFromTag(recipeData, tags);
  allRecipeDisplay.innerHTML = '';
  filtered.forEach(recipe => allRecipeDisplay.innerHTML += `<div class = "recipe-wrapper">
      <img id="${recipe.name}" src="${recipe.image}" class="recipe">
      <div class = "recipe-info">
        <p>${recipe.name}</p>
        <p>Total Cost: $..</p
      </div>`)
};

function showRecipes() {
  removeHiddenClass([allRecipeDisplay, allFilterDisplay])
  addHiddenClass([frontRecipeDisplay]);
  allRecipeDisplay.innerHTML = ''
  recipeData.forEach(recipe => allRecipeDisplay.innerHTML += `<div class = "recipe-wrapper">
  <img id="${recipe.name}" src="${recipe.image}" class="recipe">
  <div class = "recipe-info">
    <p>${recipe.name}</p>
  </div>`)
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
  addHiddenClass
}