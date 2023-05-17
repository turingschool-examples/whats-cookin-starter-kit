import {recipeTestData, ingredientTestData} from './data/testData.js';
import {calculateCost, determineIngredientNames, recipesToCook, returnInstructions, toggleRecipesToCook} from './recipe.js';

//Query Selectors
const mainRecipe = document.querySelector('.main-recipe');
let testBox;

// Event Handlers
const viewAllRecipes = () => {
  recipeTestData.forEach(recipe => mainRecipe.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <div class='favorite-box'></div>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `);
}

const viewRecipeInfo = (e) => {
 testBox = document.querySelector('.test')
 if(e.target.classList.contains('box')) {
  const selectedRecipe = recipeTestData.find(recipe => recipe.id === Number(e.target.id))
  testBox.innerHTML= `
  <h2 class='recipe-name'> ${selectedRecipe.name}</h2>
  <img class='recipe-img' id='${selectedRecipe.id}' src='${selectedRecipe.image}' alt='${selectedRecipe.name}'>
  <p class='ingredients'>${determineIngredientNames(recipeTestData, ingredientTestData, selectedRecipe.name).join(' -- ')}</p>
  <p class='instructions'>${returnInstructions(selectedRecipe)}</p>
  <p class='cost'>Total cost: $${calculateCost(selectedRecipe)}</p>
  `
}
}

const testFavoriteRecipes = e => {
  toggleRecipesToCook(e);
}

export {
  viewAllRecipes,
  viewRecipeInfo, 
  mainRecipe, 
  testBox, 
  testFavoriteRecipes
}