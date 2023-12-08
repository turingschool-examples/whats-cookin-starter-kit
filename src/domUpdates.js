import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import {
  filterRecipesByTag,
  findRecipeByName,
  findRecipeIngredients,
  calcRecipeCost,
  returnRecipeInstructions
} from '../src/recipes';

const recipesContainer = document.querySelector('.recipes-container');
const toRecipeContainer = document.querySelector('.to-recipe-container');
const recipeInstructions = document.querySelector('.instructions');

let homePageRecipes = [];
let allRecipes = [];

recipesContainer.addEventListener('click', e => {
  goToRecipe(e);
});

export function displayRecipesHome() {
  let recipes = shuffledRecipes(recipeData);
  recipes.forEach(recipe => {
    recipesContainer.innerHTML += `
        <div class="recipe-card" id=${recipe.id}>
          <img src=${recipe.image} alt="Recipe Image">
          <p class="recipe-name">${recipe.name}</p>
        </div>`;
  });
}

function shuffledRecipes(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
}

function goToRecipe(e) {
  const selectedRecipe = e.target.closest('div');
  recipeData.forEach(recipe => {
    if (Number(selectedRecipe.id) === recipe.id) {
      recipesContainer.classList.toggle('hidden');
      toRecipeContainer.classList.toggle('hidden');
      toRecipeContainer.innerHTML += `
        <h2 class="recipe-title">${recipe.name}</h2>
        <article class="ingredients">
            <p>${recipe.ingredients}</p>
        </article>
        <div class="recipe-img">
            <img src=${recipe.image} alt="">
        </div>
        <article class="instructions">
            <p>${recipe.instructions}</p>
        </article>
        `;
    }
  });
}

function formatRecipeInstructions(recipe) {
  recipeData.instructions.forEach(instruction => {
    recipeInstructions.innerHTML += `
      `;
  })
}

function formatRecipeIngredients() {

}

function displayRecipesAll() {}
function displayRecipesFiltered() {}
