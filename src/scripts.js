import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import {recipeData} from './data/recipes';
import {ingredientsData} from './data/ingredients';

const recipeDisplay = document.querySelector('#recipeDisplay');
const recipeHeading = document.querySelector('#recipeHeading');

const ingredientsInfo = {ingredientsData};
const recipeInfo = {recipeData};
const recipeRepository = new RecipeRepository(recipeInfo.recipeData);

window.addEventListener('load', displayRecipeList);
recipeDisplay.addEventListener('click', showRecipeInstructions);

function displayRecipeList() {
 recipeRepository.listRecipes();
 recipeRepository.recipeList.forEach((recipe) => {
    recipeDisplay.innerHTML += (`
        <div class="recipe-image-wrapper">
          <img class="recipe-image" data-recipeId=${recipe.id} src=${recipe.image} alt=${recipe.name}>
          <p class="recipe-name">${recipe.name}</p>
          <button class="favorite-button" id="favoriteButton">Favorite</button>
        </div>
      `)
   });
};

function showRecipeInstructions(event) {
    if (event.target.getAttribute("data-recipeId")) { 
       const recipeId = parseInt(event.target.getAttribute("data-recipeId"));
       const selectedRecipe = recipeRepository.recipeList.find(recipe => recipe.id === recipeId);
       selectedRecipe.buildIngredientsNeeded(ingredientsInfo.ingredientsData);
       const totalCost = selectedRecipe.getTotalCost();

       recipeDisplay.innerHTML = "";
       recipeHeading.innerText = `${selectedRecipe.name}`;
       recipeDisplay.innerHTML = (`
        <img class="selected-recipe-image" data-recipeId=${selectedRecipe.id} src=${selectedRecipe.image} alt=${selectedRecipe.name}>
        <ol id="recipeInstructions"></ol>
        <h3 class="ingredients">Ingredients</h3>
        <ul class="ingredients-list" id="ingredientsList"></ul>
        <p class="total">Total Cost: ${totalCost}</p>
       `);

       selectedRecipe.instructions.forEach((instruction) => {
         document.querySelector("#recipeInstructions").innerHTML += (`
            <li class="instructions">${instruction.instruction}</li>
         `);
        });

        selectedRecipe.ingredientsNeeded.forEach((ingredient) => {
            document.querySelector("#ingredientsList").innerHTML += (`
            <li>${ingredient.name}</li>
            `);
        });
   };
};


