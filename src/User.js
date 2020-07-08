/* eslint-disable */

class User {
  constructor(id) {
    this.id = id;
    this.favoriteRecipes = [];
    this.pantry = [];
    this.recipesToCook = [];


  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}