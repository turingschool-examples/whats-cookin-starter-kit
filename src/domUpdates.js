//NOTE: Your DOM manipulation will occur in this file

import {findRecipeIngredients, calculateCost} from './ingredient-functions';
import { updateUsers } from './apiCalls';

const recipesContainer = document.querySelector('.recipe-container');
const featuredTitle = document.querySelector('#featured');
const errorMessage = document.querySelector('#error');
const header = document.querySelector('h1');

const greetUser = (user) => {
  const firstName = user['name'].split(' ')[0];
  header.innerText = `What's Cookin', ${firstName}?`
};

const styleElementBorder = (element, styling) => {
  element.style.borderBottom = styling;
};

const printError = (error, users) => {
  errorMessage.innerText = `ERROR with ${users}: ${error}`
};

const renderRecipes = (recipeData) => {
  recipesContainer.innerHTML = '';
  featuredTitle.classList.toggle('hidden', true);

  if (recipeData.length === 6) {
    featuredTitle.classList.toggle('hidden', false);
  };

  recipeData.forEach((recipe) => {
    const recipeCard = document.createElement('button');
    recipeCard.classList.add('recipe-card');
    recipeCard['id'] = recipe['id'];
    recipeCard.tabIndex = 0; 

    recipeCard.innerHTML = `
      <p class="recipe-name">${recipe.name}</p>
      <img class="image-styling" src="${recipe.image}" alt="${recipe.name}">
    `;

    recipesContainer.appendChild(recipeCard);
  });

  if (recipeData.length === 0) {
    recipesContainer.innerHTML = `<h2 class="categories">No saved recipes yet!</h2>`;
  }
};

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
};


const findRecipeById = (recipeData, id) => {
  const matchingRecipe = recipeData.find(recipe => recipe.id == id);
  return matchingRecipe || 'oops'
};

const displayRecipes = (recipeData, searchField) => {
  recipesContainer.innerHTML = '';
  featuredTitle.classList.toggle('hidden', true);
  let searchValue = searchField.value.toLowerCase();
  const filteredRecipes = recipeData.filter(recipe => 
    recipe['name'].toLowerCase().includes(searchValue));

  filteredRecipes.forEach(recipe => {
    const recipeCard = document.createElement('button');
    recipeCard.classList.add('recipe-card');
    recipeCard.id = recipe.id;
    recipeCard.tabIndex = 0; 
 
  const imgElement = document.createElement('img');
  imgElement.classList.add('image-styling');
  imgElement.src = recipe.image;
  imgElement.alt = recipe.name; 

  recipeCard.appendChild(imgElement);

  const recipeName = document.createElement('p');
  recipeName.classList.add('recipe-name');
  recipeName.textContent = recipe.name;

  recipeCard.appendChild(recipeName);

  recipesContainer.appendChild(recipeCard);
  });

  if (filteredRecipes.length === 0) {
    recipesContainer.innerHTML = `<h2 class="categories">No search results!</h2>`;
  }

  return filteredRecipes;
};

const displayPopUp = (recipeData, ingredientInfo, recipeId, user) => {
  featuredTitle.classList.toggle('hidden', true);
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
  <article class="popup-content">
    <h2 tabindex="0">${recipeMatch.name}</h2>
    <img tabindex="0" src="${recipeMatch.image}" alt="${recipeMatch.name} Image">
    <h3 tabindex="0">Ingredients:</h3>
    <li class="ingredients-list" tabindex="0">${ingredientsString}</li>
    <h3 tabindex="0">Instructions:</h3>
    <li class="instructions-list" tabindex="0">${instructionsList}</li>
    <h3 tabindex="0">Total Cost:</h3>
    <p tabindex="0">${recipeCost}</p>
  </article>
  <section class="save-and-close-button-container">
    <button tabindex="0" class="save-and-close-button" id="closePopup">Close</button>
    <button tabindex="0" class="save-and-close-button save-recipe-button" id="saveRecipe">Save</button>
  </section>
</div>
  `
  const popUpContentContainer = document.querySelector('.popup-content');
  popUpContentContainer.style.backgroundColor = '#414535';
  popUpContentContainer.style.border = '3px black solid';
  const closeButton = document.querySelector('#closePopup');
  closeButton.addEventListener('click', () => {
    renderRecipes(recipeData); 
  });
 
  const saveRecipeButton = document.querySelector('.save-recipe-button');
  if (user.recipesToCook.includes(recipeMatch)){
    saveRecipeButton.innerText = "Saved!"
    saveRecipeButton.style.backgroundColor = 'green';
  };

  saveRecipeButton.addEventListener('click', () => {
    updateUsers(user, recipeMatch);  
    saveRecipe(recipeMatch, user);
})
};

export  {
  renderRecipes,
  displayRecipes,
  displayPopUp, 
  styleElementBorder,
  printError,
  greetUser
};