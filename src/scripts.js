import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'
import recipeData from './data/recipes';
import usersData from './data/users';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

const newUser = new User;
let currentUser;

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
const welcomeMessage = document.querySelector('#userName')

// Event Listeners
// window.addEventListener('load', function(){
//     console.log('hello')
// });
window.addEventListener('load', () => {insertRecipeCards(recipeData)})

window.addEventListener('load', function() {
    getRandomUser();
});


allImages.forEach((image) => {
    image.addEventListener("click", seeRecipe);
  });

searchBarBtn.addEventListener( 'click', function() {
  getRecipeByTag();
  getRecipeByName();
});

// Event handlers 
function getRandomUser() {
    let randomIndex = Math.floor(Math.random() * usersData.length);
    currentUser = new User(usersData);
    welcomeUser();
    return randomIndex
};

function welcomeUser() {
    if (usersData.name) {
        welcomeMessage.innerHTML = `${usersData.name}`;
    };
};

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