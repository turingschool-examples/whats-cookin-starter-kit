class User {

  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.pantry = [];
    this.favoriteRecipes = [];
    this.recipesToCook = [];

  }

  displayName(user) {
    console.log(user)
    return "Kevin"
  }

  addToFavorites(user, recipeData) {
    console.log(recipeData)
    // return "Add to yo favorites"
    console.log('Hello') 

  }

  addToCook() {

  }

  filterRecipesBy() {

  }

};

window.User = User;
