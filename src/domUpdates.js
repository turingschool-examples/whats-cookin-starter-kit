import {recipeTestData, ingredientTestData} from './data/testData.js';
import {calculateCost, determineIngredientNames, returnInstructions, filterByTag, filterByName} from './recipe.js';

//Query Selectors
const mainRecipe = document.querySelector('.main-recipe');
// const breakfastButton = document.querySelector('#breakfast');
// const lunchButton = document.querySelector('#lunch');
// const dinnerButton = document.querySelector('#dinner');
const tagButtons = document.querySelectorAll('.tag');
const searchButton = document.querySelector('.submit-button');
const userInput = document.querySelector('#search-bar');
let testBox;


// Event Handlers
const viewAllRecipes = () => {
  recipeTestData.forEach(recipe => mainRecipe.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `);
}

const viewRecipeInfo = (e) => {
 testBox = document.querySelector('.test')
 if(e.target.classList.contains('box')) {
  const selectedRecipe = recipeTestData.find(recipe => recipe.id === Number(e.target.id))
  console.log('hello is this working')
  mainRecipe.innerHTML= `
  <div class="test">
  <h2 class='recipe-name'> ${selectedRecipe.name}</h2>
  <img class='recipe-img' id='${selectedRecipe.id}' src='${selectedRecipe.image}' alt='${selectedRecipe.name}'>
  <p class='ingredients'>${determineIngredientNames(recipeTestData, ingredientTestData, selectedRecipe.name).join(' -- ')}</p>
  <p class='instructions'>${returnInstructions(selectedRecipe)}</p>
  <p class='cost'>Total cost: $${calculateCost(selectedRecipe)}</p>
  </div>
  `
}
}


const filterRecipeByTag = (event) => {
  // filterByTag(recipes, tag)

  recipeTestData.forEach(recipe => {

  if (recipe.tags.includes(event.target.id)) {
    mainRecipe.innerHTML = ''
    mainRecipe.innerHTML += `<section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `
  }
})
 
}

const searchRecipe = () => {
// const findName = recipes.filter(recipe => {
//   return recipe.name === name;
// });
// return findName;
// userInput.value.toLowerCase()
let input = userInput.value.toLowerCase()
console.log(userInput.value.toLowerCase())
 recipeTestData.forEach(recipe => {
  let recipe1 = recipe.name.toLowerCase()
  // console.log(recipe.name.toLowerCase())

  if (recipe1.includes(input)) {
    searchButton.disable = false
    mainRecipe.innerHTML = ''
    mainRecipe.innerHTML += `<section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `
  } 
})

  if (!input){
    // alert('INPUT REQUIRED')
    mainRecipe.innerHTML = ''
    viewAllRecipes()
    return
  }

}


export {
  viewAllRecipes,
  viewRecipeInfo, 
  mainRecipe, 
  testBox, 
  // displayRecipeInfo,
  filterRecipeByTag,
  searchRecipe,
  // breakfastButton,
  // lunchButton,
  // dinnerButton
  tagButtons,
  searchButton,
  userInput
}