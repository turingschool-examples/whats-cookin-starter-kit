class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.weeklyMenu = [];
  }
  addToFavorites(fave) {
    this.favoriteRecipes.push(fave)
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
