//NOTE: Your DOM manipulation will occur in this file
import ingredientsData from './data/ingredients.js';
import recipeData from './data/recipes.js';
import { findRecipeIngredients, findRecipeTag, findRecipeName, findRecipePrice } from '../src/recipes.js';

// const allRecipesButton = document.querySelector('.all-recipes-button');
const allRecipesButton = document.querySelector('.allRecipes');
const recipeDisplaySection = document.querySelector('.recipe-list-display');
const searchRecipesBtn = document.querySelector('.search-button')
const searchRecipes = document.querySelector('.input-bar')
const userSearchDisplay = document.querySelector('.best-selection')
// searchRecipes.addEventListener
// const recipeView = document.querySelector('')
//Here is an example function just to demonstrate one way you can export/import between the two js files. You'll want to delete this once you get your own code going.


const displayRecipes = () => {
  for (var i = 0; i < recipeData.length; i++) {
    
    var instructionText = [];
    
    recipeData[i].instructions.forEach((instructionData) => instructionText.push(`<br>` + instructionData.number + ' ' + instructionData.instruction));
    console.log(instructionText);

    recipeDisplaySection.innerHTML += `
    <article class="single-food">
      <section id=${recipeData[i].id}>
        <div class="food-name">
            <img class='food-image' id = 'foodImage-${recipeData[i].name}' src='${recipeData[i].image}'>
            <h2 class='food-name' id = 'foodName-${recipeData[i].name}'>${recipeData[i].name}</h2>
            <h3 class='total-price hidden'>Total price in American Cents : ${findRecipePrice(recipeData[i])} </h3>
        </div>
        <div class="food-ingredient">
          <h3 class='ingredients hidden' id = 'ingredients-${recipeData[i].name}'> ${findRecipeIngredients(recipeData[i].name)}</h3>
        </div>
        <div class="food-instructions">
          <h3 class='instructions hidden' id = 'instructions-${recipeData[i].name}'> ${instructionText}</h3>
        </div>
        <div class="food-tags">
          <h4 class='tags hidden'>${recipeData[i].tags} </h4>
        </div>
      </section>
    </article>
    `
  }
};



allRecipesButton.addEventListener('click', displayRecipes);




// showFullRecipe should take in the id of the recipe, find the corresponding section by id, then toggle each of the classes' visibility (except image) 

const userInput = () => {
  var userSearchInput = searchRecipes.value;
  if(userSearchInput === recipeData.name) {
    userSearchDisplay.innerHTML = `
    <section class="best-selection">
    <h2>${recipeData.name}</h2>
      <div class="best-selection-inner">
        <div>
          <img class='food-image' id = 'foodImage-${recipeData.name}' src='${recipeData.image}'>
          <h2 class='food-name' id = 'foodName-${recipeData.name}'>${recipeData.name}</h2>
          <h3 class='total-price'>Total price in American Cents : ${findRecipePrice(recipeData)} </h3>
        </div>
        <div class="food-ingredient">
          <h3 class='ingredients' id = 'ingredients-${recipeData.name}'> ${findRecipeIngredients(recipeData.name)}</h3>
        </div>
        <div class="food-instructions">
          <h3 class='instructions' id = 'instructions-${recipeData.instruction}'></h3>
        </div>
        <div class="food-tags">
          <h4 class='tags'>${recipeData.tags} </h4>
        </div>
    </section>
    `
  }
  console.log('helooooooo')
}

searchRecipesBtn.addEventListener('click', userInput)

export {
  displayRecipes,
  userInput
}



// As a user, I should be able to view all recipes.
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
// As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)


