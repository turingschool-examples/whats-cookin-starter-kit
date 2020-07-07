const usersData = require('../data/users.js');
const Pantry = require('../src/pantry.js');
const Recipe = require('./recipe.js');
class User {
  constructor(userData) {
    this.name = this.checkIfString(userData.name);
    this.id = this.checkIfNumber(userData.id);
    this.pantry = new Pantry(userData.pantry);
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  checkIfString(data) {
    return typeof data === 'string' ? data : JSON.stringify(data);
  }

  checkIfNumber(data) {
    return typeof data === 'number' ? data : Date.now();
  }

  chooseFavoriteRecipe(recipe) {
    if (recipe instanceof Recipe) {
      this.favoriteRecipes.push(recipe);
    }
  }
}

module.exports = User;