const Recipe = require('../src/recipe.js');

class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    // this.recipe = recipe;
    this.favorites = [];
  }

  saveToFavorites() {
    this.favorites.push(recipe.id);
    return this.favorites;
  }

  recipesToCook() {

  }

  searchByTags() {

  }
}

module.exports = User;
