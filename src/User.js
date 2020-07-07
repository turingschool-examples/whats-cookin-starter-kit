class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
  }
  addFavoriteRecipe(id) {
      this.favoriteRecipes.push(id);
  }

  removeFavoriteRecipe(id) {
    let index = this.favoriteRecipes.indexOf(id);
    this.favoriteRecipes.splice(index, 1);
  }
}

module.exports = User;