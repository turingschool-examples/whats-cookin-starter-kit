const data = require('../data/users.js');
const usersData = data.usersData;
const userData = usersData.sort((a, b) => 0.5 - Math.random())[0];

class User {
  constructor(userData) {
    this.user = userData
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.favorites = [];
    this.planned = [];
  }
  addFavorite(recipe) {
    this.favorites.push(recipe);
  }
  removeFavorite(recipe) {
    if(this.favorites[0]) {
      const index = this.favorites.indexOf(recipe);
      this.favorites.splice(index, 1);
    }
  }
  filterFavoritesByTags(tags) {

  }
  searchByName(name) {

  }
  searchByIngredient(ingredient) {

  }
  addToPlanned(recipe) {
    this.planned.push(recipe);
  }
}

module.exports = User;
