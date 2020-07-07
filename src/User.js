class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  addFavoriteRecipes(recipe) {
    //add to / remove from the user's favoriteRecipes (an array)
    // this.addFavoriteRecipes.push(recipe);
  }

  removeFavoriteRecipes() {
    //possibly use filter to return an array that doesn't include recipe
    //reassign favorite recipes to that array
  }

  addRecipeToCook() {

  }

  searchFavoriteRecipes() {

  }
}

module.exports = User;
