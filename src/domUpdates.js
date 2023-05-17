//NOTE: Your DOM manipulation will occur in this file

import sampleRecipeData from "./data/sample-recipes.js";
import recipeData from "./data/recipes.js"

const viewAll = document.querySelector('.categories__all');
const viewSalads = document.querySelector('.categories__salads');
const viewHordoeuvres = document.querySelector('.categories__hordoeuvres');
const viewMains = document.querySelector('.categories__mains');
const viewSides = document.querySelector('.categories__sides');
const allSection = document.querySelector('.all');
const homePage = document.querySelector('.home');
const allContainer = document.querySelector('.all__container');
const allRecipes = () => document.querySelectorAll('.all__recipes');
const recipeTitle = document.querySelector('.recipe__title');


const viewRecipe = (event) => {
  recipeData.forEach(recipe => {
    if(recipe.name === event.target.innerHTML){
      recipe
    }
  })
}

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

const viewFilteredRecipes = (event) => {
  hide([homePage], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag=> {
      if (tag===event.target.id)
      allContainer.innerHTML += 
      `<div class='all__recipes'>
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
  names.forEach((name) => {
    name.classList.add(section);
  })
};

export { 
  viewAll,
  viewAllRecipes,
  viewSalads, 
  viewHordoeuvres, 
  viewMains, 
  viewSides,
  viewFilteredRecipes, 
}