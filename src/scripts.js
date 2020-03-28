const page = document.querySelector('body');
const homePage = document.querySelector('.home-page');
const favoritesPage = document.querySelector('.favorites-page');
const mealPage = document.querySelector('.meal-page');
const mealContainer = document.getElementById('meal-container');
// const meals = domMeals;

page.addEventListener('click', clickHandler)

window.onload = load();

function load() {
  showMeals();
  // add a loadUser() function that randomizes a user into the DOM data
}

let domMeals = {
  displayMeals(recipe) {
    return `
    <div id="${recipe.id}" class='meal-card'>
      <div id="${recipe.id}" class='card-title-container'>
        <p class='card-title'>${recipe.name}</p>
      </div>
      <div id="${recipe.id}"class="food-img-container">
        <img id="${recipe.id}" class="food-img" rel="food-img" src="${recipe.image}">
      </div>
      <div class="card-icon-container">
        <img id="${recipe.name}" class="icon active hidden"src="https://img.icons8.com/color/96/000000/hearts.png"/>
        <img id="${recipe.name}" class="icon inactive" src="https://img.icons8.com/windows/96/000000/hearts.png"/>
        <img id="${recipe.name}" class="icon cook-ready" src="https://img.icons8.com/doodle/96/000000/pot---v1.png"/>
      </div>
    </div>
    `
  }
}

function clickHandler(event) {
  event.target.classList.contains('home-btn') ? displayHomePage() : null;
  event.target.classList.contains('favorites-btn') ? displayFavoritesPage() : null;
  event.target.classList.contains('food-img') ? displayMealPage() : null;
  // event.target.classList.contains()

  // if event target is favorites heart - call user method addtofaves
  // if card is already in add to faves - then PUSH OUT of faves and change heart
  // if event target is add BTN - call user method addMealToCook
  //meal card click handler can have event.target.closest('.meal-card')
}

function loadUser() {
  // randomize user selection
  // instantiate user 
  // return the user
}

function showMeals(meals) {
  // iterate over all meals and instert html on main page
  let domMeals = meals;
  domMeals.forEach(recipe => {
    mealContainer.insertAdjacentHTML('afterbegin', domMeals.displayMeals(recipe))
  })
}

function displayHomePage() {
  homePage.classList.remove('hidden');
  favoritesPage.classList.add('hidden');
  mealPage.classList.add('hidden')
}

function displayFavoritesPage() {
  favoritesPage.classList.remove('hidden');
  homePage.classList.add('hidden');
  mealPage.classList.add('hidden')
}

function displayMealPage() {
  mealPage.classList.remove('hidden')
  homePage.classList.add('hidden');
  favoritesPage.classList.add('hidden');
  // could also try to build a dynamic fucntion that can display depending on dom-meal id# have that insert adjacentHtml for the whole page. have the main hide completely
  // this shows a new main separate from faves or home page
}

function filterByType() {
   // add a switch function to handle the possibilities of the filter to have multiple values responde the same (ex. main course, dinner is the same shit. same as antipasto and antipasti for fucks sake)
}