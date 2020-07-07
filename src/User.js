class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
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
