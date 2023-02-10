import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

//header that welcomes user based on user data

//even handler /listener for form and form data
//search bar will return recipe based on taking in
//name or tag from recipeRepository
const recipeCard = new Recipe();
const globalArray = [];



const searchBtn = document.querySelector(".search-button");
// const breakfastBtn = document.querySelector(".breakfast-bar");
// const lunchBtn = document.querySelector(".lunch-bar");
// const dinnerBtn = document.querySelector(".dinner-bar");
// const dessertBtn = document.querySelector(".dessert-bar");
// const condimentsBtn = document.querySelector(".condiments-bar");
// const sidesBtn = document.querySelector(".sides-bar");
// const appetizersBtn = document.querySelector(".appetizers-bar");
// const saladsBtn = document.querySelector(".salads-bar");




const searchBtn = document.querySelector(".search-button");
const userNamePrompt = document.querySelector("#userName")

searchBtn.addEventListener( 'click', function() {
    getRecipeByTag();
    getRecipeByName();
});

function getRecipeByTag(userInput) {
    if ( userInput.includes(RecipeRepository.filteredList.filterByTag()))


};

function getRecipeByName() {


};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};