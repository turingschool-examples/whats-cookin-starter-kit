const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');

class User {
  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.pantry = new Pantry(obj.pantry)
    this.favorites = [];
    this.mealToCook = []
  }

  addToFavorites() {
    //adds recipe to the favorites array

  }

  removeFromFavorites() {
    // removes recipe from favorites array
  }

  displayFavorites() {
    // shows list of favorites may need to live on scripts.js
  }

  mealToCook() {
    //add meal user want to cook to meal que.
  }

}
module.exports = User;
