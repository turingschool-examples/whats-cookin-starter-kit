/* eslint-disable */

class User {
  constructor(id) {
    this.id = id;
    this.favoriteRecipes = [];
    this.pantry = [];


  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}