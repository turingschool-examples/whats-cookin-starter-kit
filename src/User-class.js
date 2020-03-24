class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.pantry = [];
    this.savedFavorites = [];
    this.savedToCook = [];
  }
  // moveToFavArray
    // if the recipe.isFav is true,
    // then we want to push it into the
    // savedFav array

  // moveToCookArray
    //if the recipe.savedToCook is true,
    // then we want to push it into
    // savedToCook array
}

module.exports = User;
