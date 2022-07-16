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

const recipeImages = document.querySelectorAll('.recipe-image');
const recipePicBoxes = document.querySelectorAll('.recipe-pic-box');
const userWelcome = document.querySelector('.user-welcome')



const recipeRepo = new RecipeRepository(recipeData);
const user = new User(usersData[randomIndex(usersData)]);
console.log(user);




window.addEventListener('load', welcomeUser)
window.addEventListener('load', populateRecipesInHomeView);


function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function welcomeUser() {
  userWelcome.innerText = `Feeling hungry, ${user.name}?`;
}

function populateRecipesInHomeView() {

  const imageLinks = recipeRepo.recipeData.map(recipe => {
    return recipe.image;
  })

  recipePicBoxes.forEach((image, index) => {
    // image.innerHTML = '';
    image.innerHTML += `<img class='recipe-image' src='${imageLinks[index]}'>
    <p class='recipe-label'>Name</p>`;
  });
  // console.log(recipePicBoxes);
}
