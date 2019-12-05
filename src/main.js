// const User = require('../src/User');
// const Cookbook = require('../src/Cookbook');
// const Pantry = require('../src/Pantry');

// const users = require('../data/users');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');
const generateRandomIndex = (source) => {
	return Math.floor(source.length * Math.random())
}
console.log(generateRandomIndex(users));
// window.onload()

let user = new User(users[generateRandomIndex(users)])
let cookbook = new Cookbook()
let pantry = new Pantry()

var recipeName = document.querySelector('.recipe_title');
var cooksName = document.querySelector('.user_title');



function kickOff() {
	cooksName.innerHTML = user.name;
	user.displayName('pants');
}

function displayName() {
	recipeName.innerHTML = user.displayName(recipeData)
	user.displayName(users);
}

function addToFavorites() {

}




displayName()
kickOff()
