import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import {
  filterRecipesByTag,
  findRecipeByName,
  findRecipeIngredients,
  calcRecipeCost,
  returnRecipeInstructions
} from '../src/recipes';
const recipeContainer = document.querySelector('.recipes-container');
const recipeCard = document.querySelector('.recipe-card');
let homePageRecipes = [];
let allRecipes = [];

function displayRecipesHome() {
  let recipes = shuffledRecipes(recipeData);
  for (let i = 10; i > 0; i --){
    recipeContainer.innerHTML += `
      <div class="recipe-card">
        <img src=${recipes[i].image} alt="Recipe Image">
        <p class="recipe-name">${recipes[i].name}</p>
      </div>`;
  };
}

const shuffledRecipes = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
};

function displayRecipesAll() {}
function displayRecipesFiltered() {}
export { displayRecipesHome };