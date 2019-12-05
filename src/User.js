class User {

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.pantry = obj.pantry || [];
    this.favoriteRecipes = [];
    this.recipesToCook = [];

  }

  displayName(recipeData) {
    console.log(recipeData);
    return recipeData[0].name;
  }

  addToFavorites(user, recipeData) {


  }

  addToCook() {

  }

  filterRecipesBy() {

  }

};

window.User = User;
