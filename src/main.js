// const User = require('../src/User');
// const Cookbook = require('../src/Cookbook');
// const Pantry = require('../src/Pantry');

// const users = require('../data/users');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');

// const generateRandomIndex = (source) => {
// 	return Math.floor(source.length * Math.random())
// }

// console.log(generateRandomIndex(users))
// window.onload()


let user = new User(users[generateRandomIndex(users)])
// let cookbook = new Cookbook()
// console.log(user)

// let user = new User(users[generateRandomIndex(users)])


let currentUser = users.filter(card => card.id === Math.floor(users.length * Math.random()))

// let cookbook = new Cookbook()

// const chai = require('chai');
// const expect = chai.expect;

// let user = new User(users)
let cookbook = new Cookbook(recipeData)
let pantry = new Pantry()

let recipeName = document.querySelector('.recipe_title');
let cooksName = document.querySelector('.user_title');
let mainRecipeArea = document.querySelector('.main_recipe-area');
let addFavoriteButton;
let favoriteButton;


function kickOff() {
	console.log(users.name);
	cooksName.innerHTML = user.name;
}

// function displayName() {
// 	recipeName.innerHTML = user.displayName(recipeData)
// 	user.displayName(users);
// }

function insertRecipeTitle(recipeData) {
	// recipeName.innerHTML = user.displayRecipeName(recipeData)
}

function addFavoritesArray(e) {
	console.log(e)
}

function displayRecipes() {
	cookbook.recipes.forEach(recipe => {
    mainRecipeArea.insertAdjacentHTML('afterbegin',
      `<section class="recipe_info-box">
            <img src="${recipe.image}">
            <h1 class="recipe_title">${recipe.name}</h1>
            <h4 id="ingredients_list">Ingredients:</h4>
            <button class="add_to-favorites"></button>
            <button class="add_to-cook">Save for later</button>
       </section>`);
  });
}

cooksName.innerHTML = currentUser[0].name

displayRecipes()
kickOff()
