import {recipeTestData, ingredientTestData} from './data/testData.js';
import {calculateCost, determineIngredientNames, recipesToCook, returnInstructions, toggleRecipesToCook} from './recipe.js';

//Query Selectors
const mainRecipe = document.querySelector('.main-recipe');
const favoriteButton = document.querySelector('.favorite-button');  
const tagButtons = document.querySelectorAll('.tag');
const searchButton = document.querySelector('.submit-button');
const userInput = document.querySelector('#search-bar');
const page = {mode: 'home'}
let testBox;

// Event Handlers
const viewAllRecipes = (recipes) => {
  mainRecipe.innerHTML = '';
  if(page.mode === 'home'){
    recipes = recipeTestData
  }else {
    recipes = recipesToCook
  }
  recipes.forEach(recipe => mainRecipe.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `);

}

const viewRecipeInfo = (e) => {
 if(e.target.classList.contains('box')) {
  const selectedRecipe = recipeTestData.find(recipe => recipe.id === Number(e.target.id))
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

const selectFavoriteRecipes = e => {
  toggleRecipesToCook(e);
}

// const viewFavoriteRecipes = () => {
//   mainRecipe.innerHTML = '';
//   recipesToCook.forEach(recipe => mainRecipe.innerHTML += `
//   <section class='recipe-container box' id='${recipe.id}'>
//     <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
//     <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
//   </section>
//   `);
// }

const filterRecipeByTag = (e, recipes) => {
  if(page.mode === 'home'){
    recipes = recipeTestData
  }else {
    recipes = recipesToCook
  }
  mainRecipe.innerHTML = ''
  recipes.forEach(recipe => {
  if (recipe.tags.includes(e.target.id)) {
    mainRecipe.innerHTML += `<section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `
  }
})
 
}

const searchRecipe = (recipes) => {
  if(page.mode === 'home'){
    recipes = recipeTestData
  }else {
    recipes = recipesToCook
  }
  mainRecipe.innerHTML = ''
  let input = userInput.value.toLowerCase()
   recipes.forEach(recipe => {
    let recipe1 = recipe.name.toLowerCase()
    if (recipe1.inlcudes(input)) {
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
    mainRecipe.innerHTML = ''
    viewAllRecipes()   
  }
}

const toggleMode = (e) => {
page.mode = e.target.id
}


export {
  viewAllRecipes,
  viewRecipeInfo, 
  mainRecipe, 
  favoriteButton,
  testBox, 
  selectFavoriteRecipes,
  filterRecipeByTag,
  searchRecipe,
  tagButtons,
  searchButton,
  userInput,
  toggleMode
}