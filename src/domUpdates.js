//NOTE: Your DOM manipulation will occur in this file

import recipeData from "./data/recipes.js"
import { calculateCost } from "./functions/calculate-cost.js";
import { recipeIngredients } from "./functions/recipe-ingredients.js";

const viewAll = document.querySelector('.categories__all');
const viewSalads = document.querySelector('.categories__salads');
const viewHordoeuvres = document.querySelector('.categories__horsdoeuvres');
const viewMains = document.querySelector('.categories__mains');
const viewSides = document.querySelector('.categories__sides');
const allSection = document.querySelector('.all');
const categoriesSection = document.querySelector('.categories');
const footerSection = document.querySelector('.footer');
const allContainer = document.querySelector('.all__container');
const allRecipes = () => document.querySelectorAll('.all__recipes');
const recipePage = document.querySelector('.recipe');
const recipeTitle = document.querySelector('.recipe__title');
const imageContainer = document.querySelector('.image__container');
const ingredientsEl = document.querySelector('.recipe__ingredients');
const instructionsEl = document.querySelector('.recipe__instructions');
const recipeCost = document.querySelector('.recipe__cost')

const viewAllRecipes = () => {
  hide([categoriesSection, footerSection], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    allContainer.innerHTML += 
    `<div style="background-image: url(${recipe.image})" class='all__recipes'>
    <p class='all__text'>${recipe.name}</p>
    </div>`
  })
};

const viewFilteredRecipes = (event) => {
  hide([categoriesSection, footerSection], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if(tag === event.target.id)
      allContainer.innerHTML += 
      `<div style='background-image: url(${recipe.image})' class='all__recipes'>
      <p class='all__text'>${recipe.name}</p>
      </div>`
    })
  })
};

const show = (names, section) => {
  names.forEach((name) => {
    name.classList.remove(section);
  })
};

const hide = (names, section) => {
  console.log(names)
  names.forEach((name) => {
    console.log(name)
    name.classList.add(section);
  })
};

const viewRecipe = (event) => {
  recipeData.forEach(recipe => {
    if(recipe.name === event.target.innerText){
      displayRecipe(recipe)
    }
  });
}

const displayRecipe = (recipe) => {
  hide([allSection], 'all--hidden');
  show([recipePage], 'recipe--hidden');
  recipeTitle.innerText = `${recipe.name}`;
  displayRecipeImg(recipe);
  displayIngredients(recipe);
  displayInstructions(recipe);
  const cost = calculateCost(recipe.name);
  recipeCost.innerText = `The estimated cost is ${cost}`;
  console.log(cost)
}

const displayRecipeImg = (recipe) => {
  const image = document.createElement('img');
  image.setAttribute('src', recipe.image);
  image.classList.add('recipe__img');
  imageContainer.appendChild(image);
}
const displayIngredients = (recipe) => {
  const ingredientsArr = recipeIngredients(recipe.name);
  recipe.ingredients.forEach((ingredient, index) => {
    const {quantity: {amount, unit}} = ingredient;
    ingredientsEl.innerHTML += `<p> ${amount} ${unit} ${ingredientsArr[index]}</p>`;
  })
}

const displayInstructions = (recipe) => {
  recipe.instructions.forEach((instruction, index) => {
    instructionsEl.innerHTML += `<p> ${instruction.instruction} </p>`;
  })
}

export { 
  viewAll,
  viewAllRecipes,
  viewSalads, 
  viewHordoeuvres, 
  viewMains, 
  viewSides,
  viewFilteredRecipes, 
  viewRecipe,
  allRecipes
}