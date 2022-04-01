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


const recipeSection = document.getElementById('recipesSection')
var recipePreview = document.querySelector('.recipe-preview')
;

//~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~
var recipeRepository = new RecipeRepository();
recipeRepository.addRecipes();
var recipes = recipeRepository.recipeObjects;


//~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', () => {initiatePage()});

recipeSection.addEventListener('click', (e) => {
  displayRecipeDetail(e)
  })

const displayRecipeDetail = (e) => {
  if(e.target.dataset.id) {
    recipes.find((recipe) => {
      console.log(recipe.id)
      recipe.id ===  e.target.dataset.id
    })
   
  } 
};

// take our id and compare and use find or filter through our respoitory to find
// the matching whatever. 
// assign innerHtml to our popout div and unhide it
// when we click off that div what happens? 
// we hide it thats happens




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
      <section class="recipe-preview" data-id="${recipe.id}">
        <section class="recipe-heading" data-id="${recipe.id}">
          <h3 data-id="${recipe.id}">${recipe.name}</h3>
        </section>
        <div data-id="${recipe.id}" class="recipe-img">
          <img data-id="${recipe.id}" src="${recipe.img}">
        </div>
        <section class="recipe-info" data-id="${recipe.id}">
          <section class="tag-icon-section" data-id="${recipe.id}">
            <div class="icons-section" data-id="${recipe.id}">
              <img class="icon add-to-cook" src="./images/icon_fire_symbol_unlit.png">
              <img class="icon add-to-saved" src="./images/icon_banner_add.png">
            </div>
          </section>
        </section>
      </section>
      `
  })
}
/*
var targetRecipeToDisplay = () => {
  (event) => {
   var idToDisplay = recipes.find((recipe) => `${recipe.id}` === event.target.id); };
}

  // onclick we need the recipe id to match the recipe-preview id

  recipeSection.innerHTML = "";
  recipes.forEach((recipe) => {
    recipe.showDisplayTag();
    recipe.collectIngredients();
    recipePopout.innerHTML += `

      `

      // As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
}
*/
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
