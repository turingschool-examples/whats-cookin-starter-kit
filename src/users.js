class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.namel
    this.pantry = [];
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  addFavoriteRecipe() {
    // maybe pass in targeted card that triggers the star icon style change and this method
    this.favoriteRecipes.push(recipe);
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
