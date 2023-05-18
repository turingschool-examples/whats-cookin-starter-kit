//NOTE: Your DOM manipulation will occur in this file

import sampleRecipeData from "./data/sample-recipes.js";
import recipeData from "./data/recipes.js"
import { filterByTag, filterByName } from "./functions/filter-recipes.js"

const viewAll = document.querySelector('.categories__all');
const viewSalads = document.querySelector('.categories__salads');
const viewHordoeuvres = document.querySelector('.categories__horsdoeuvres');
const viewMains = document.querySelector('.categories__mains');
const viewSides = document.querySelector('.categories__sides');
const allSection = document.querySelector('.all');
const homePage = document.querySelector('.home');
const allContainer = document.querySelector('.all__container');
const categoriesSection = document.querySelector('.categories');
const footerSection = document.querySelector('.footer');
const viewSearchResults = document.querySelector('.home__searchIcon');
const searchInput = document.querySelector('.home__searchInput');

const viewAllRecipes = () => {
  allContainer.innerHTML = ''
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
  allContainer.innerHTML = ''
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

const filterByNameOrTag = () => {
  allContainer.innerHTML = ''
  hide([categoriesSection, footerSection], 'home--hidden');
  show([allSection], 'all--hidden');
  let results = filterByTag(recipeData, searchInput.value)
  if (results === `Error: try a new tag`){
    results = filterByName(recipeData, searchInput.value)
  }
  if (results !== 'No results' && searchInput.value){
    results.forEach(recipe => {
      allContainer.innerHTML += 
      `<div style="background-image: url(${recipe.image})" class='all__recipes'>
        <p class='all__text'>${recipe.name}</p>
      </div>`
    })
  } else {
    allContainer.innerHTML = 
      `<p class='all__text'>No Results!</p>`
  }
}

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
  viewSearchResults, 
  filterByNameOrTag
}