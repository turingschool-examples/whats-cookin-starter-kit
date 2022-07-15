import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import {recipeData} from './data/recipes';
import {ingredientsData} from './data/ingredients';

const recipeDisplay = document.querySelector('#recipeDisplay');

const recipeInfo = {recipeData};
const recipeRepository = new RecipeRepository(recipeInfo.recipeData);

window.addEventListener('load', displayRecipeList);

 function displayRecipeList() {
   recipeRepository.listRecipes();
   recipeRepository.recipeList.forEach((recipe) => {
     recipeDisplay.innerHTML += (`
       <img class="recipe-image" src=${recipe.image} alt=${recipe.name}>
       <p class="recipe-name">${recipe.name}</p>
       <button class="favorite-button" id="favoriteButton">Favorite</button>
       `)
   });

 };
