const usersData = require('../data/users.js');
const Pantry = require('../src/pantry.js');
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
}

module.exports = User;