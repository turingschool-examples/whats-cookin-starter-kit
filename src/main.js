// const User = require('../src/User');
// const Cookbook = require('../src/Cookbook');
// const Pantry = require('../src/Pantry');

// const users = require('../data/users');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');

let user = new User(users)


function kickOff() {
  var cooksName = document.querySelector('.user_title');
	cooksName.innerHTML = user.addToFavorites(users)
}

kickOff()