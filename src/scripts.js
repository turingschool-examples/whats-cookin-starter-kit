import './styles.css';
// import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/star-icon.png';
import Recipe from './classes/Recipe';
import RecipeRepository from './classes/RecipeRepository';
import ingredientsData from './data/ingredients';
import recipeData from './data/recipes';

// global variables
const recipeRepo = new RecipeRepository(recipeData);

const recipeSection = document.getElementById('allRecipes');
const modalSection = document.getElementById('recipeModalBackground');
const filterDropdown = document.getElementById('filterDropdown');

//event listeners
window.addEventListener('load', () => createRecipeCards(recipeRepo.recipes));
recipeSection.addEventListener('click', createRecipeModal);
modalSection.addEventListener('click', collapseRecipe);
filterDropdown.addEventListener('click', filterRecipes);

//functions
function createRecipeCards(recipes) {
    recipeSection.innerHTML = "";
    recipes.forEach(recipe => {
        let size = (2 - (recipe.length / 65)).toFixed(2);
        recipeSection.innerHTML += `
        <article class="recipe-card" data-parent="${recipe.id}">
            <img class="recipe-img" src="${recipe.image}" data-parent="${recipe.id}" alt="picture of ${recipe.name}">
            <img class="star-icon hidden" id="star-icon" data-parent="${recipe.id}" src="./images/star-icon.png" alt="This recipe is in my recipes!">
            <h3 style="font-size: ${size}rem" data-parent="${recipe.id}">${recipe.name}</h3>
        </article>`;
    });
}

function createRecipeModal(event) {
  toggleHidden(modalSection);
  let recipeID = +(event.target.dataset.parent);
  let clickedRecipe = recipeRepo.recipes.find(recipe => recipe.id === recipeID);
  modalSection.innerHTML = `
  <div class="recipe-popup">
      <h2>${clickedRecipe.name}</h2>
      <div class="image-ingredients">
      <img class="recipe-img" src="${clickedRecipe.image}" alt="${clickedRecipe.name} image">
      <ul class="ingredient-list">
          <h3>Ingredients:</h3>
          ${createList(clickedRecipe.listIngredients(ingredientsData))}
      </ul>
      </div>
      <ol class="direction-list">
      <h3>Directions:</h3>
      ${createList(clickedRecipe.getInstructions())}
      </ol>
      <h4>TOTAL COST $${+(clickedRecipe.listCost(ingredientsData))}</h4>
  </div>`;
}

function createList(recipe) {
    return recipe.reduce((acc, cv) => {
        acc += `<li>${cv}</li>`;
        return acc;
    }, "");
}

function toggleHidden(element) {
  element.classList.toggle('hidden');
}

function collapseRecipe(event) {
  if(event.target.id === "recipeModalBackground"){
    toggleHidden(modalSection);
  }
}

function filterRecipes(event) {
    let tag = event.target.innerText.toLowerCase();
    let filteredRecipes = recipeRepo.filterByTag(tag);
    createRecipeCards(filteredRecipes);
}