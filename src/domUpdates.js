import {recipeTestData} from './data/testData.js';

//Query Selectors
const main = document.querySelector('main');

// Event Handlers
const viewAllRecipes = () => {
  recipeTestData.forEach(recipe => main.innerHTML += `
  <section class='recipe-container box' id='${recipe.id}'>
    <img class='box' id='${recipe.id}' src='${recipe.image}' alt='${recipe.name}'>
    <h3 class='recipe-name box' id="${recipe.id}">${recipe.name}</h3>
  </section>
  `);
}

const viewRecipeInfo = (e) => {
 if(e.target.classList.contains('box')) {
  const id = recipeTestData.find(recipe => recipe.id === Number(e.target.id))
  console.log(id)
 }
}

export {
  viewAllRecipes,
  viewRecipeInfo, 
  main
}