class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.namel
    this.pantry = [];
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  addToFavorites(id) {
    this.favoriteRecipes.push(id);
    console.log(this.favoriteRecipes);
  }
  displayFavorites() {
    return this.favoriteRecipes;
  }
  addRecipeToCook() {
    this.recipesToCook.push(recipe);
  }
  displayToCook() {
    return this.recipesToCook;
  }
  searchFavorites() {
    // search the recipes contained with favoriteRecipes
  }
  filterRecipes() {

  }

}

if (typeof module !== 'undefined') {
  module.exports = Users;
}
