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
const recipeTitle = document.querySelector('.recipe-title');
const recipeCost = document.querySelector('.recipe-cost');
const recipeImage = document.querySelector('.recipe-img');
const recipeIngredients = document.querySelector('.ingredients-list');
const recipeInstructions = document.querySelector('.instructions-list');

let currentRecipe;

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
      currentRecipe = recipe;
      recipesContainer.classList.toggle('hidden');
      toRecipeContainer.classList.toggle('hidden');
      renderRecipeTitle(recipe);
      renderRecipeCost(recipe);
      renderRecipeImg(recipe);
      renderRecipeInstructions(recipe);
      renderRecipeIngredients(recipe);
    }
  });
  return currentRecipe;
}

function renderRecipeTitle(recipe) {
  recipeTitle.innerText = recipe.name;
}

function renderRecipeCost(recipe) {
  const estimatedCost = calcRecipeCost(recipe, ingredientsData);
  recipeCost.innerText = `estimated cost | $${estimatedCost}`;
}

function renderRecipeImg(recipe) {
  recipeImage.innerHTML += `<img src=${recipe.image} >`;
}

function renderRecipeInstructions(recipe) {
  recipe.instructions.forEach(instruction => {
    recipeInstructions.innerHTML += `<li>${instruction.number}. ${instruction.instruction}</li>`;
  });
}

function formatRecipeIngredients(recipe) {
  const formatted = recipe.ingredients.map(ingredients => {
    const included = ingredientsData.find(item => item.id === ingredients.id);
    ingredients.id = included.name;
    return ingredients;
  })
  return formatted;
}

function renderRecipeIngredients(recipe) {
  const ingredientsToRender = formatRecipeIngredients(recipe)
  ingredientsToRender.forEach(({ id, quantity: { amount, unit } }) => {
    recipeIngredients.innerHTML += `<li>${id} | ${amount} ${unit}</li>`;
  });
}

function displayRecipesAll() {}
function displayRecipesFiltered() {}
