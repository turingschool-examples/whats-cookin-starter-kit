import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import ingredientsData from './data/ingredients';
import recipeData from './data/recipes';
import usersData from './data/users';
import Ingredient from './classes/Ingredient';
import Recipe from './classes/Recipe';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';

const recipeBoxes = document.querySelectorAll('.recipe-pic-box');
const userWelcome = document.querySelector('.user-welcome')



const recipeRepo = new RecipeRepository(recipeData);
const user = new User(usersData[randomIndex(usersData)]);
console.log(user);




window.addEventListener('load', welcomeUser);


function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function welcomeUser() {
  userWelcome.innerText = `Feeling hungry, ${user.name}?`;
}

// function populateRecipesInHomeView() {
//   let innerHTML = [];
//
//   recipeRepo.recipeData.forEach(recipe => {
//     innerHTML.push(`<img class="recipe-pic-box src="${recipe.image}" ">`)
//   })
//   console.log(innerHTML)
//   // recipeBoxes.forEach(box, index => {
//
// }
