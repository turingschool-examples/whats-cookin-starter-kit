//NOTE: Your DOM manipulation will occur in this file

import {findRecipeIngredients, calculateCost} from '../test/untestedFunctions.js'
import ingredientsData from './data/ingredients.js'
import recipeData from './data/recipes.js'

const recipesContainer = document.querySelector('.recipe-container');


const renderRecipes = (recipeData) => {

  recipesContainer.innerHTML = '';

  for (let i = 0; i < recipeData.length; i++) {
    recipesContainer.innerHTML += `
    <button class="recipe-card"id="${recipeData[i].id}">
      <p class ="recipe-name">${recipeData[i].name}</p>
      <img class="image-styling" src="${recipeData[i].image}">
      </button>
    `
  }
}
Testing

const addRecipesToCook = (usersData) => { //REFACTOR: Move to untestedFunc or scripts
  usersData.forEach(user => {
  if (!user.hasOwnProperty("recipesToCook")) {
    user.recipesToCook = [];
  } 
});
}

const saveRecipe = (recipe, user) => {
  console.log(user.recipesToCook)
  user.recipesToCook.push(recipe);
  console.log(user.recipesToCook)
}

const createRandomIndex = (array) => { //REFACTOR: Move to untestedFunc or scripts
  return Math.floor(Math.random() * array.length);
}

const displayRecipes = (event, recipeData, searchField) => {
  recipesContainer.innerHTML = '';

  const filteredRecipes = recipeData.filter(recipe => recipe.name === searchField.value);
  console.log({searchField})
  if (event.key === 'Enter') {
    filteredRecipes.map(recipe => {
      recipesContainer.innerHTML += `
        <div class="recipe-card"id="${recipe.id}">
          <p class="recipe-name">${recipe.name}</p>
          <img class="image-styling" src="${recipe.image}">
        </div>
      `;
    });
    return filteredRecipes;
  }
};

const findRecipeById = (recipeData, id) => {
  const matchingRecipe = recipeData.find(recipe => recipe.id == id);
  console.log('recipe', matchingRecipe);
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
  console.log("list", instructionsDivs);
  console.log("ing", ingredientsDivs)
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
        <div class="save-and-close-button-container">
          <button class="save-and-close-button" id="closePopup">Close</button>
          <button class="save-and-close-button save-recipe-button" id="saveRecipe">Save</button>
        </div>
      </div>
    </div>
  `
  const closeButton = document.querySelector('#closePopup');
  closeButton.addEventListener('click', () => {
    renderRecipes(recipeData); //REFACTOR; CHECK: SCRIPTS (82.1)
  });
 
  const saveRecipeButton = document.querySelector('.save-recipe-button');
  saveRecipeButton.addEventListener('click', () => {
    if (saveRecipeButton.classList.contains('save-recipe-button')) {
      saveRecipeButton.innerText = "Saved!"
      saveRecipeButton.style.backgroundColor = 'green';
    }
    saveRecipe(recipeMatch, user);
})
console.log("peepo", user)
}

export  {
  renderRecipes,
  displayRecipes,
  displayPopUp, 
  addRecipesToCook,
  createRandomIndex,
}
