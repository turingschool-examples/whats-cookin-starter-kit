//NOTE: Your DOM manipulation will occur in this file

import sampleRecipeData from "./data/sample-recipes.js";
import recipeData from "./data/recipes.js"

const viewAll = document.querySelector('.categories__all');
const allSection = document.querySelector('.all');
const homePage = document.querySelector('.home');
const allContainer = document.querySelector('.all__container');

const viewAllRecipes = () => {
  hide([homePage], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    allContainer.innerHTML += 
    `<div class='all__recipes'>
      <p class='all__text'>${recipe.name}</p>
    </div>`
  })
};

const show = (names, section) => {
  names.forEach((name) => {
    name.classList.remove(section);
  })
};

const hide = (names, section) => {
  names.forEach((name) => {
    name.classList.add(section);
  })
};

export { viewAllRecipes }