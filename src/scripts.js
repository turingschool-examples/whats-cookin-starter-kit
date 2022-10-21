import './styles.css';
import apiCalls from './apiCalls';
//import functionName from './apiCalls';
const varName = require('../src/apiCalls');
const functionName2 = varName.testFetch;
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// Import Fetch calls
// import {fetchCalls.method1, fetchCalls.method2,  fetchCalls.method3, fetchCalls.method4} from {"./apiCalls"};
// Import classes
// import Each from './Each'; {ex - RecipeRepository, Recipe, Ingredient, User}
// import Other from './Other';
// import Class from './Class';
// import Needed from './Needed';

// declare variables for linked methods compatibility
// let declare;
// let each;
// let thing;
// let you;
// let need;
// let then;
// let change;
// let below;

// Declare function to instantiate all of our data to dashboard on load/ refresh.
// function catalogAllData() {
  // Promise.all()
// }

// Declare a function to update dashboard's data state after invoking other methods to alter DOM values

// Query Selectors!!!
// const
// const

// Event Listeners
// window.addEventListener('load', catalogAllData);

// Functions
// function loadUser() {
  // render everything to DOM by invoking all helper functions declared for rendering below
// };

// function renderThing() {};
// function renderOtherThing() {};




// Iteration 1 User Stories (dashboard)

// As a user, I should be able to view a list of all recipes.
// render page view/ unhide form of grid containing all recipe card objects for All Recipes Page display
// invoke w/ handler either on load or click
function renderAllRecipes(data) {
  (QS4allRecipesGrid).innerHTML = "";
  (QS4allRecipesGrid).innerHTML = 
  `<section class="recipe-card">
    <h3 class="" id="recipe-title">Recipe Title</h3>
    <img url="">
    <div class="">
      ${recipeTags}
    </div>
  </section>`;
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


console.log('Hello world');

