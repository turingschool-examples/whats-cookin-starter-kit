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
const recipeContainer2 = document.querySelector('.recipes-container2');
const recipeCard = document.querySelector('.recipe-card');
const searchInput = document.querySelector('.searchInput');
let homePageRecipes = [];
let allRecipes = [];

searchInput.addEventListener("keyup", function(event) {
  if(event.key === 'Enter' ) {
    tagFilteredRecipes();
  };
});

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

function tagFilteredRecipes() {
  const searchTerm = searchInput.value.trim();
  const filtered = filterRecipesByTag(recipeData, searchTerm);
  if (typeof filtered === 'string') {
    console.log('error');
    recipeContainer.innerHTML = '';
    recipeContainer.innerHTML = `<p>We can not find a match for this!</p>`;
    return
    }
  // toRecipeContainer.classList.add('hidden');
  // recipesContainer.classList.remove('hidden');
  recipeContainer.innerHTML = ``;
  filtered.forEach(recipe => {
    recipeContainer.innerHTML += `
      <div class="recipe-card" id=${recipe.id}>
        <img src=${recipe.image} alt="Recipe Image">
        <p class="recipe-name">${recipe.name}</p>
      </div>`;
  });
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