class User {

  constructor() {
    this.pantry = [];
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  
  displayFavorites() {
   return this.favoriteRecipes
  }

  addToFavorites(target) {
    this.favoriteRecipes.includes(target) ? this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(target), 1) : this.favoriteRecipes.push(target);
  }

  addToCook() {

  }

  filterRecipesBy() {

  }

};

window.User = User;
