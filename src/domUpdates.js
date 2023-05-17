//NOTE: Your DOM manipulation will occur in this file
import recipeData from "./data/recipes";
import { recipesFromTag } from "./recipeUtils";

// Query Selectors:
const allRecipesButton = document.querySelector('.all-recipes');
const frontRecipeDisplay = document.querySelector('.front-recipe-display');
const allRecipeDisplay = document.querySelector('.all-recipes-display');
const allFilterDisplay = document.querySelector('.all-filters')

//Event Listeners
allRecipesButton.addEventListener('click', showRecipes);
allFilterDisplay.addEventListener('change', function(event) {
  if (event.target.classList.contains('checkbox')){
    renderFilteredRecipes(event);
  }
});

function renderFilteredRecipes(event) {
  console.log(event.target.id)
  var filtered = recipesFromTag(recipeData, [event.target.id]);
  console.log(filtered);
  allRecipeDisplay.innerHTML = '';
  filtered.forEach(recipe => allRecipeDisplay.innerHTML += `<div class = "recipe-wrapper">
  <img id="${recipe.name}" src="${recipe.image}" class="recipe">
  <div class = "recipe-info">
    <p>${recipe.name}</p>
  </div>`)
  }

//Event Handlers/Functions
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