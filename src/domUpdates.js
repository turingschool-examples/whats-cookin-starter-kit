//NOTE: Your DOM manipulation will occur in this file

import sampleRecipeData from "./data/sample-recipes.js";

const viewAll = document.querySelector('.categories__all');
const allSection = document.querySelector('.all');
const homePage = document.querySelector('.home');

function viewAllRecipes () {
  hide([homePage], 'home--hidden');
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