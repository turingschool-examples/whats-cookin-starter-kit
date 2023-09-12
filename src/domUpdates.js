//NOTE: Your DOM manipulation will occur in this file

import {findRecipeIngredients, calculateCost} from '../test/untestedFunctions.js'

const recipesContainer = document.querySelector('.recipe-container');


const renderRecipes = (recipeData) => {

  recipesContainer.innerHTML = '';
  recipeData.forEach((recipe) => 
    recipesContainer.innerHTML += `
    <button class="recipe-card"id="${recipe.id}">
        <p class ="recipe-name">${recipe.name}</p>
        <img class="image-styling" src="${recipe.image}">
      </button>
    `
  )
  if(recipeData.length === 0) {
    recipesContainer.innerHTML = `<p>No saved recipes yet!</p>`
  }
}

const saveRecipe = (recipe, user) => {
  const saveRecipeButton = document.querySelector('.save-recipe-button')
    if (!user.recipesToCook.includes(recipe)){
      user.recipesToCook.push(recipe)
      saveRecipeButton.innerText = "Saved!"
      saveRecipeButton.style.backgroundColor = 'green';
    } else {
      let recipeIndex = user.recipesToCook.indexOf(recipe);
      user.recipesToCook.splice(recipeIndex, 1);
      saveRecipeButton.innerText = "Unsaved!"
      saveRecipeButton.style.backgroundColor = 'red';};
}

const createRandomIndex = (array) => { //REFACTOR: Move to untestedFunc or scripts
  return Math.floor(Math.random() * array.length);
}

const displayRecipes = (event, recipeData, searchField) => {
  recipesContainer.innerHTML = '';
  const filteredRecipes = recipeData.filter(recipe => recipe.name === searchField.value);
  if (event.key === 'Enter') {
    filteredRecipes.map(recipe => {
      recipesContainer.innerHTML += `
        <button class="recipe-card"id="${recipe.id}">
          <p class="recipe-name">${recipe.name}</p>
          <img class="image-styling" src="${recipe.image}">
        </button>
      `;
    });
  if (filteredRecipes.length === 0) {
    recipesContainer.innerHTML = `<p>No search results!</p>`
  }
    return filteredRecipes;
  }
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
  if (user.recipesToCook.includes(recipeMatch)){
    saveRecipeButton.innerText = "Saved!"
    saveRecipeButton.style.backgroundColor = 'green';
  }
  saveRecipeButton.addEventListener('click', () => {
    saveRecipe(recipeMatch, user);
})
}

export  {
  renderRecipes,
  displayRecipes,
  displayPopUp, 
  createRandomIndex,
}
