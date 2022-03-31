//~~~~~~~~~~~~~~~~~~~~ IMPORTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png';
import './images/icon_banner_add.png';
import './images/icon_banner_remove.png';
import './images/icon_fire_symbol_lit.png';
import './images/icon_fire_symbol_unlit.png';
import RecipeRepository from '../src/classes/RecipeRepository';
//~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const recipePreview = document.querySelector('.recipe-preview');
const recipeSection = document.querySelector('.recipes-section');

//~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~
var recipeRepository = new RecipeRepository();
recipeRepository.addRecipes();
var recipes = recipeRepository.recipeObjects;


//~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', () => {initiatePage()});
// recipePreview.addEventListener('click', () => {viewRecipeDetail()});


//~~~~~~~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var initiatePage = () => {
  createRecipePreview();
}

var createRecipePreview = () => {
  recipeSection.innerHTML = "";
  recipes.forEach((recipe) => {
    recipe.showDisplayTag()
    recipe.collectIngredients();
    recipeSection.innerHTML += `
      <section class="recipe-preview" id="${recipe.id}">
        <section class="recipe-heading">
          <h3>${recipe.name}</h3>
        </section>
        <div class="recipe-img">
          <img src="${recipe.img}">
        </div>
        <section class="recipe-info">
          <section class="tag-icon-section">
            <div class="icons-section">
              <img class="icon add-to-cook" src="./images/icon_fire_symbol_unlit.png">
              <img class="icon add-to-saved" src="./images/icon_banner_add.png">
            </div>
          </section>
        </section>
      </section>
      `
  })
}










//~~~~~~~~~~~~~~~~~~~~ CODE/PSUEDOCODE DUMP ~~~~~~~~~~~~~~~~~~~~~~~~~~
// think about how to pull correct tag to display
// var viewRecipeDetail = () => {
//
// }


// var displayAllRecipes = () => {
//   console.log('did this display recipes?')
//
// }

//for every instance of recipe we want to create recipes
//class is recipe-preview


/*

As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.

As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)

As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)*/
