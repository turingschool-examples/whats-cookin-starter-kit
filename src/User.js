/* eslint-disable */

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.favoriteRecipes = [];
    this.pantry = [];
    this.recipesToCook = [];
  }
  
  addFavoriteRecipe(id) {
    if (!this.favoriteRecipes.includes(id)) {
      this.favoriteRecipes.push(id)
    }
    // issue # 23
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}