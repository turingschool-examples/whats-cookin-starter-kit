import {recipeTestData} from './data/testData.js';

// Global Variables
const main = document.querySelector('main');
// Event Handlers
const viewAllRecipes = () => {
  recipeTestData.forEach(recipe => main.innerHTML += `
  <section class='recipe-container' id='${recipe.id}'>
    <img id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name'>${recipe.name}</h3>
  </section>
  `);
}

export {
  viewAllRecipes
}