console.log('Hello world');
const mainPage = document.querySelector('.main-page');
const recipePage = document.querySelector('.recipe-page');
const favorites = document.querySelector('.favorites');
const mealPlan = document.querySelector('.meal-plan');
const searchResults = document.querySelector('.search-results');
const pantry = document.querySelector('.pantry');
//want to create navbar functionality

document.addEventListener('click', changePageView);

function changePageView(event) {
  const header = document.getElementsByTagName('header')[0]
  const favoritesNavItem = document.querySelector('.favorites-navbar');
  const pantryNavItem = document.querySelector('.pantry-navbar');
  const mealPlanNavItem = document.querySelector('.meal-plan-navbar');
  const variousPages = [mainPage, recipePage, favorites, mealPlan, searchResults,
  pantry]
  
  if (event.target === header && mainPage.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    mainPage.classList.toggle('shown')
  } else if (event.target === favoritesNavItem && favorites.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    favorites.classList.toggle('shown')
  } else if (event.target === pantryNavItem && pantry.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    pantry.classList.toggle('shown')
  } else if (event.target === mealPlanNavItem && mealPlan.classList.contains('hidden')) {
    variousPages.forEach(page => page.classList.add('hidden'));
    variousPages.forEach(page => page.classList.remove('shown'));
    mealPlan.classList.toggle('shown')
  }
}
