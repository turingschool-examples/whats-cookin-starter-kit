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
const recipeRepository = new RecipeRepository(recipeData);
// const globalArray = [];

const searchBarBtn = document.querySelector('#searchButton');
const savedViewBtn = document.querySelector('#savedViewButton');
const userNamePrompt = document.querySelector('#userName');
const cardTileDisplay = document.querySelector('#cardTileView');
const searchBarInput =document.querySelector('#searchBar')
const tagSeachResults = document.querySelector('#tagSearchResults')
const nameSearchResults = document.querySelector('#nameResultsView')

// Event Listeners
// window.addEventListener('load', function(){
//     console.log('hello')
// });
window.addEventListener('load', () => {insertRecipeCards(recipeData)})
console.log("yes getting hit")
searchBarBtn.addEventListener( 'click', function() {
//   getRecipeByTag();
console.log("hola")
  getRecipeByName();
});

// Event handlers 
// function getRecipeByTag(userInput) {
//   if ( userInput.includes(recipeRepository.filteredList.filterByTag()));
// };

function getRecipeByName() {
    console.log("hi")
    let nameResults = [];
    let userInput = searchBarInput.value;
    nameResults = recipeRepository.filterByName(userInput);
    console.log(nameResults)
    nameResults.forEach(result => {
        nameSearchResults.innetHTML += `<section class="nameResults"><h1 class="searched-recipe" id=${result.id}></h1></section>`
    })
    if (nameResults.length === 0) {
        nameSearchResults.innerHTML = `<h1>No results found.</h1>`
    };
    insertRecipeCards(nameResults)
};

function insertRecipeCards(array) {
    cardTileDisplay.innerHTML = "";
  for(let i = 0; i < array.length; i++){
    cardTileDisplay.innerHTML += 
      `<section class="card" id="${array[i].id}">
      <h2>${array[i].name}</h2>
      <img src="${array[i].image}" alt="image of ${array[i].name}">
      <div class="rating">*****</div>
      </section>`;
  };
};
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