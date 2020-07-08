/* eslint-disable */

class User {
  constructor(id) {
    this.id = id;
    this.favoriteRecipes = [];

  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}