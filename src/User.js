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

  removeFavoriteRecipe(id) {
    let item = this.favoriteRecipes.indexOf(id);
    this.favoriteRecipes.splice(item, 1)
    // #19
  }

  addRecipesToCook(id) {
    if (!this.recipesToCook.includes(id)) {
      this.recipesToCook.push(id)
    }
    //#20
  }

  removeRecipesToCook(id) {
    let item = this.recipesToCook.indexOf(id);
    this.recipesToCook.splice(item, 1)
  }
  // #21

}

if (typeof module !== 'undefined') {
  module.exports = User;
}