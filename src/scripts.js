import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'
import recipeData from './data/recipes';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


//header that welcomes user based on user data

//even handler /listener for form and form data
//search bar will return recipe based on taking in
//name or tag from recipeRepository
// const recipeInfo = new Recipe();
// const globalArray = [];

const searchBarBtn = document.querySelector('#searchButton');
const savedViewBtn = document.querySelector('#savedViewButton');
const userNamePrompt = document.querySelector('#userName');
const cardTileDisplay = document.querySelector('#cardTileView');
const singleRecipeDisplay = document.querySelector('#singleRecipeView');
// Event Listeners
window.addEventListener('load', () => {insertRecipeCards(recipeData)});
cardTileDisplay.addEventListener('dblclick', () => {
  if (event.target.closest('.card')) {
    showSingleRecipe(event);
  }
});
searchBarBtn.addEventListener( 'click', function() {
  getRecipeByTag();
  getRecipeByName();
});

// Event handlers 
function getRecipeByTag(userInput) {
  if ( userInput.includes(RecipeRepository.filteredList.filterByTag()));
};

function getRecipeByName() {
    
};

function insertRecipeCards(array) {
  for(let i = 0; i < array.length; i++){
    cardTileDisplay.innerHTML += 
      `<section class="card" id="${array[i].id}">
      <h2>${array[i].name}</h2>
      <img src="${array[i].image}" alt="image of ${array[i].name}">
      </section>`;
  };
};

function showSingleRecipe(event) {
  show(singleRecipeDisplay);
  hide(cardTileDisplay);
  const recipeElement = event.target;
  singleRecipeDisplay.innerHTML = 
  `<h2>${recipeElement.name}</h2>
  <img src="${recipeElement.image}" alt="image of ${recipeElement.name}">
  <div class="rating">
    <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
    <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label>
    <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
    <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label>
    <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
  </div>
  <div>
    <p>${recipeElement.instructions}</p>
  </div>
  <div>
    <p>${recipeElement.ingredients}</p>
  </div>`
}
// Functions
// this will populate all the cards in an array to either using the saved recipes or the original load recipes

// Helper Functions
function show(element) {
  element.classList.remove('hidden');
};
  
function hide(element) {
  element.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};