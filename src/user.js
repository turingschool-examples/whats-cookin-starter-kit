const Pantry = require('../src/pantry');
const Recipe = require('../src/recipe');

class User {
  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.pantry = new Pantry(obj.pantry)
    this.favorites = [];
  }

  addToFavorites() {
    //adds recipe to the favorites array

  }

  removeFromFavorites() {
    // removes recipe from favorites array
  }

}

module.exports = User;
