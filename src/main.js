// const User = require('../src/User');
// const Cookbook = require('../src/Cookbook');
// const Pantry = require('../src/Pantry');

// const users = require('../data/users');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');

let user = new User(users)
let cookbook = new Cookbook()
let pantry = new Pantry()

var recipeName = document.querySelector('.recipe_title');
var cooksName = document.querySelector('.user_title');

function kickOff() {
	cooksName.innerHTML = user.addToFavorites(users)
}

function displayName() {
	recipeName.innerHTML = user.displayName(user)
	user.addToFavorites(users, recipeData)
}

function addToFavorites() {

}

cooksName.innerHTML = user.addToFavorites(users)

displayName()
kickOff()