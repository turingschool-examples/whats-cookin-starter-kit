import './styles.css';
import apiCalls from './apiCalls';
import gatherData from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
// Import Fetch calls
// import {fetchCalls.method1, fetchCalls.method2,  fetchCalls.method3, fetchCalls.method4} from {"./apiCalls"};
// Import classes
// import Each from './Each'; {ex - RecipeRepository, Recipe, Ingredient, User}
import Ingredient from './classes/Ingredient.js';
import Recipe from './classes/Recipe.js';
import RecipeRepository from './classes/RecipeRepository.js';
import User from './classes/User.js';



// declare variables for linked methods compatibility
let usersData;
let ingredientsData;
let recipeData;
let currentUser;
let newRecipeRepo;
let recipeCards;

function makeAllHidden() {
  recipeGrid.classList.toggle('hidden');
}
// Declare function to instantiate all of our data to dashboard on load/ refresh.
function instantiateData() {
  Promise.all([
    gatherData('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users'),
    gatherData('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients'),
    gatherData('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
  ]).then(data => {
      usersData = data[0].usersData;
      ingredientsData = data[1].ingredientsData;
      recipeData = data[2].recipeData;
      currentUser = new User(
        usersData[Math.floor(Math.random() * usersData.length)]
      );
      recipeCards = recipeData.map(recipe => {
        const newCard = new Recipe (recipe);
        return newCard
      });
      newRecipeRepo = new RecipeRepository (recipeCards);
      loadUser()
  })
}

// Query Selectors!!!
const allRecipesGrid = document.querySelector('#all-card-grid');
const favoriteRecipesGrid = document.querySelector('#favorite-grid');
const greeting = document.querySelector('#greeting');

// Event Listeners
window.addEventListener('load', instantiateData());

// Functions
function loadUser() {
  renderUser(currentUser);
  // renderIngredientsData();
  renderAllRecipes(recipeCards);
}

// Iteration 1 User Stories (dashboard)
function renderUser(user) {
  greeting.innerHTML = '';
  greeting.innerHTML = `Welcome to What\'s Cookin\' ${user.name}`;
}
// As a user, I should be able to view a list of all recipes.
// render page view/ unhide form of grid containing all recipe card objects for All Recipes Page display
// invoke w/ handler either on load or click
function renderAllRecipes(data) {
  (allRecipesGrid).innerHTML = '';
  (allRecipesGrid).innerHTML = 
    data.map(recipe => `<li class="recipe-card">
      <span class="" id="recipe-title">${recipe.name}</h3>
      <img url="${recipe.image}">
      <div class="">
        ${recipe.tags}
      </div>
    </li>`);
}


// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// render page view/ unhide form of grid containing selected recipe card object for Specific Recipes Page display
// invoke with handler on click
function showRecipe() {
  greeting.classList.add('hidden')
  allRecipesGrid.classList.add('hidden');
  savedRecipesGrid.classList.add('hidden');
  singleRecipe.classList.remove('hidden');
}


// As a user, I should be able to filter recipes by a tag. (Extension option: by multiple tags)
// render page view/ unhide form of grid containing all recipe card objects WITH SELECTED TAG for All Recipes Page display (may as well reuse code for render?)
// invoke with searchbar handler? Maybe easier to set a static list of all tag names to use as preset 'filters'? probably not.
// invoke on recipe page with handler on click of tag name


// As a user, I should be able to search recipes by their name. (Extension option: by name or ingredients)
// searchbar should have a handler to search all recipes and filter by entered/ selected name OR tag
