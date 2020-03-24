class User {
  constructor({name, id, pantry}) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }
  removeFromFavorites(recipe) {
    let recipeToRemove = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(recipeToRemove, 1);
    return this.favoriteRecipes;
  }
}

module.exports = User;
