// const Pantry = require('../src/pantry');

// const Recipe = require('../src/recipe');

class User {
  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.pantry = new Pantry(obj.pantry)
    this.favorites = [];
    this.mealsToCook = []
  }

  addToFavorites(recipe) {
    this.favorites.push(recipe)
  }

  addMealsToCook(recipe) {
    this.mealsToCook.push(recipe)
  }

}

// figure out which classes are dependent on each other and organize them
// on html

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = User;
}
