//NOTE: Your DOM manipulation will occur in this file

import {findRecipeIngredients, calculateCost} from './ingredient-functions'
import { updateUsers } from './apiCalls';

const recipesContainer = document.querySelector('.recipe-container');
// const headCenter = document.querySelector('.container')
const featuredTitle = document.querySelector('#featured');
const errorMessage = document.querySelector('#error')


const styleElementBorder = (element, styling) => {
  element.style.borderBottom = styling;
}

const printError = (error, users) => {
  errorMessage.innerText = `ERROR with ${users}: ${error}`
}

const renderRecipes = (recipeData) => {
  recipesContainer.innerHTML = '';
  featuredTitle.classList.toggle('hidden', true)
  if(recipeData.length === 6) {
    featuredTitle.classList.toggle('hidden', false)
    // let featuredTitle = document.createElement('h2');
    // featuredTitle.innerText = 'Featured Recipes';
    // featuredTitle.classList.add('class', 'categories')
    // headCenter.insertBefore(featuredTitle, recipesContainer);

  }
  recipeData.forEach((recipe) => 
    recipesContainer.innerHTML += `
    <button class="recipe-card"id="${recipe.id}">
        <p class ="recipe-name">${recipe.name}</p>
        <img class="image-styling" src="${recipe.image}">
      </button>
    `
  )
  if(recipeData.length === 0) {
    recipesContainer.innerHTML = `<h2 class="categories">No saved recipes yet!</h2>`
  }
}

const saveRecipe = (recipe, user) => {
  const saveRecipeButton = document.querySelector('.save-recipe-button')
    if (!user.recipesToCook.includes(recipe)){
      user.recipesToCook.push(recipe)
      saveRecipeButton.innerText = "Saved!"
      saveRecipeButton.style.backgroundColor = 'green'
    } else {
      let recipeIndex = user.recipesToCook.indexOf(recipe);
      user.recipesToCook.splice(recipeIndex, 1);
      saveRecipeButton.innerText = "Unsaved!"
      saveRecipeButton.style.backgroundColor = 'red';};
}


const displayRecipes = (recipeData, searchField) => {
  recipesContainer.innerHTML = '';
  featuredTitle.classList.toggle('hidden', true)
  let searchValue = searchField.value.toLowerCase();
  const filteredRecipes = recipeData.filter(recipe => 
    recipe['name'].toLowerCase().includes(searchValue));
    filteredRecipes.map(recipe => {
      recipesContainer.innerHTML += `
        <button class="recipe-card"id="${recipe.id}">
          <p class="recipe-name">${recipe.name}</p>
          <img class="image-styling" src="${recipe.image}">
        </button>
      `;
    });
  if (filteredRecipes.length === 0) {
    recipesContainer.innerHTML = `<h2 class="categories">No search results!</h2>`
  }
    return filteredRecipes;
};

const findRecipeById = (recipeData, id) => {
  const matchingRecipe = recipeData.find(recipe => recipe.id == id);
  return matchingRecipe || 'oops'

};



const displayPopUp = (recipeData, ingredientInfo, recipeId, user) => {
  let recipeMatch = findRecipeById(recipeData, recipeId)
  let recipeIngredientNames = findRecipeIngredients(recipeData, ingredientInfo, recipeId);
  let recipeCost = calculateCost(recipeData, ingredientInfo, recipeId);
  let ingredientsDivs = recipeIngredientNames.map(ingredient => {
    return `<p>${ingredient}</p>`
  });
  let ingredientsString = ingredientsDivs.join("");
  let recipeInstructions = recipeMatch.instructions
  let instructionsDivs = recipeInstructions.map(step => {
    return `<p>${step.number}. ${step.instruction}</p>`
  });
  let instructionsList = instructionsDivs.join("");
  recipesContainer.innerHTML =
`
    <div class="popup-overlay">
      <div class="popup-content">
        <h2>${recipeMatch.name}</h2>
        <img src="${recipeMatch.image}" alt="${recipeMatch.name}">
        <h3>Ingredients:</h3>
        <div class="ingredients-list">${ingredientsString}</div>
        <h3>Instructions:</h3>
        <div class="instructions-list">${instructionsList}</div>
        <h3>Total Cost:</h3>
        <p>${recipeCost}</p>
      </div>
      <section class="save-and-close-button-container">
      <button class="save-and-close-button" id="closePopup">Close</button>
      <button class="save-and-close-button save-recipe-button" id="saveRecipe">Save</button>
    </section>
    </div>
  `
  const popUpContentContainer = document.querySelector('.popup-content');
  popUpContentContainer.style.backgroundColor = '#414535';
  popUpContentContainer.style.border = '3px black solid';
  const closeButton = document.querySelector('#closePopup');
  closeButton.addEventListener('click', () => {
    renderRecipes(recipeData); //REFACTOR; CHECK: SCRIPTS (82.1)
  });
 
  const saveRecipeButton = document.querySelector('.save-recipe-button');
  if (user.recipesToCook.includes(recipeMatch)){
    saveRecipeButton.innerText = "Saved!"
    saveRecipeButton.style.backgroundColor = 'green';
  }
  saveRecipeButton.addEventListener('click', () => {
    updateUsers(user, recipeMatch);  
    saveRecipe(recipeMatch, user);
    // updateUsers(user, recipeMatch)
})
}

export  {
  renderRecipes,
  displayRecipes,
  displayPopUp, 
  styleElementBorder,
  printError
}
