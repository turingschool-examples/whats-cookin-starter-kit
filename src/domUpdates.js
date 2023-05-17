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
const viewSaladRecipes = () => {
  hide([homePage], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag=> {
      if (tag==='salad')
      allContainer.innerHTML += 
      `<div class='all__recipes'>
        <p class='all__text'>${recipe.name}</p>
      </div>`
    })
  })
};
const viewHordoeuvresRecipes = () => {
  hide([homePage], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag=> {
      if (tag===`hor d'oeuvre`)
      allContainer.innerHTML += 
      `<div class='all__recipes'>
        <p class='all__text'>${recipe.name}</p>
      </div>`
    })
  })
};
const viewMainsRecipes = () => {
  hide([homePage], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag=> {
      if (tag==='main course')
      allContainer.innerHTML += 
      `<div class='all__recipes'>
        <p class='all__text'>${recipe.name}</p>
      </div>`
    })
  })
};
const viewSidesRecipes = () => {
  hide([homePage], 'home--hidden');
  show([allSection], 'all--hidden');
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag=> {
      if (tag==='side dish')
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
  viewSaladRecipes, 
  viewHordoeuvres, 
  viewHordoeuvresRecipes,
  viewMains, 
  viewMainsRecipes,
  viewSides,
  viewSidesRecipes
}