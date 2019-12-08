class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.myMenu = [];
  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  addToMyMenu(recipe) {
    this.myMenu.push(recipe);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
