const Pantry = require('../src/pantry');
const Recipe = require('../src/recipe');

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

module.exports = User;
