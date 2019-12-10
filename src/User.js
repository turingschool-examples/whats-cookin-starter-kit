class User {

  constructor(obj) {
    this.name = obj.name;
    this.pantry = obj.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  displayFavorites() {
    return this.favoriteRecipes;
  }

  displaySavedRecipes() {
    return this.recipesToCook;
  }

  addToFavorites(target) {
    this.favoriteRecipes.includes(target) ? this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(target), 1) : this.favoriteRecipes.push(target);
  }

  addToSaved(target) {
    this.recipesToCook.includes(target) ? this.recipesToCook.splice(this.recipesToCook.indexOf(target), 1) : this.recipesToCook.push(target);
  }

  addToCook() {

  }

  filterRecipesBy() {

  }

};

if (typeof module !== 'undefined') {
  module.exports = User;
}
