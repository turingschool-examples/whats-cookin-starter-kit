//NOTE: Your DOM manipulation will occur in this file
import recipeData from "./data/recipes";
import { recipesFromTag } from "./recipeUtils";

// Query Selectors:
const allRecipesButton = document.querySelector('.all-recipes');
const frontRecipeDisplay = document.querySelector('.front-recipe-display');
const allRecipeDisplay = document.querySelector('.all-recipes-display');
const allFilterDisplay = document.querySelector('.all-filters');
const checkCategories = document.getElementsByName('checkbox');

//Event Listeners
allRecipesButton.addEventListener('click', showRecipes);
allFilterDisplay.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkbox')) {
    renderFilteredRecipes(event)
  }
});

//Event Handlers/Functions
function renderFilteredRecipes() {
  const tags = Array.from(checkCategories).filter((category) => category.checked).map(c => c.id)
  console.log(tags)
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
}

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

// Andrea:
const singleRecipeDisplay = document.querySelector('.single-recipe-display')
allRecipeDisplay.addEventListener('click', e => {
  addHiddenClass([allRecipeDisplay]);
  console.log(singleRecipeDisplay)
  removeHiddenClass([singleRecipeDisplay])
  console.log(e.target)
  viewSelectedRecipe(e)
})
import { findRecipe, findIngredientNames, calculateRecipeCost, recipeInstructions } from "../src/recipeUtils";
const viewSelectedRecipe = e => {
  singleRecipeDisplay.innerHTML = ''
  const recipeName = e.target.id
  console.log(e.target.id)
  const selectedRecipe = findRecipe(recipeData, recipeName)
  console.log(selectedRecipe)
  const recipeCost = calculateRecipeCost(selectedRecipe)
  console.log(recipeCost)
  singleRecipeDisplay.innerHTML = `
  <h2>${selectedRecipe.name}</h2>
  <img id="${selectedRecipe.id}" src="${selectedRecipe.image}" class="recipe" alt='${selectedRecipe.name}'>
  <p class="total-cost-box">This recipe costs a total of: $${recipeCost} to make!</p>
  <p class="ingredient-box">Ingredients Box</p>
  <p class="instruction-box"></p>
  `
}


export {
  exampleFunction1,
  exampleFunction2,
  showRecipes,
  removeHiddenClass,
  addHiddenClass
}