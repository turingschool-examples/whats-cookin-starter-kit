const allUsers = require('/data/users.js')
const allIngredients = require('/data/ingredients.js')
const allMeals = require('/src/dom-meals.js')
const mealData = require('/src/recipes.js')


const page = document.querySelector('body');
const homePage = document.querySelector('.home-page');
const favoritesPage = document.querySelector('.favorites-page');
const mealContainer = document.getElementById('meal-container')

window.onload = load();

pagde.addEventListener('click', clickHandler)

function clickHandler() {
  let selection = event.target.classList;
  switch(selection) {
    case 'home-btn':
      displayHomePage();
      break;
    case 'favorites':
      displayFavoritesPage();
      break;
    case 'add-to-favorites':
      addToFavorites();
      break;
  }

  // add a switch function to handle the possibilities of the filter to have multiple values responde the same (ex. main course, dinner is the same shit. same as antipasto and antipasti for fucks sake)

  // could also try to build a dynamic fucntion that can display depending on dom-meal id# have that insert adjacentHtml for the whole page. have the main hide completely
  // this shows a new main 
}

function load() {
  showMeals();
  // add a loadUser() function that randomizes a user into the DOM data
}

function loadUser() {
  // randomize user selection
  // instantiate user 
  // return the user
}

function showMeals(recipes) {
  // iterate over all meals and instert html on main page
  // mealData.forEach(recipe => {
  //   mealContainer.insertAdjacentHTML('afterbegin', allMeals.displayMeals(recipe))
  // })
}

function displayFavoritesPage(homePage, favoritesPage) {
  // set attribute or addclasslits? 
  // remove hidden from faves
  // favoritesPage.removeAttribute('hidden');
  // hide the home page
  // homePage.setAttribute('hidden', '');
  // perhaps this has a class it can remove and add to toggle pages hide
}


function displayHomePage(homePage, favoritesPage) {
  // remove hidden from homepage
  // homePage.removeAttribute('hidden');
  // add hidden to favorites page
  // favoritesPage.setAttribute('hidden', '');
  // perhaps this has a specific class it can remove and add to toggle pages hide
}
