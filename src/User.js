/* eslint-disable */

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.favoriteRecipes = [];
    this.pantry = [];
    this.recipesToCook = [];


  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}