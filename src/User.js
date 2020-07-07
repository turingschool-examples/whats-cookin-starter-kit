class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  addFavoriteRecipes() {
    //add to / remove from the user's favoriteRecipes (an array)
  }

  removeFavoriteRecipes() {

  }

  addRecipeToCook() {

  }

  searchFavoriteRecipes() {

  }
}

module.exports = User;
