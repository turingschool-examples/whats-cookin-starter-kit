class User {
  constructor(users) {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.id = users.id;
    this.name = users.name;
    this.pantry = users.pantry;
  }
  decideRecipe(){

  }
  favoriteRecipes(){

  }
  searchRecipes(){

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
