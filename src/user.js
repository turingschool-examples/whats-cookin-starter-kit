class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];

  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }
  
  removeFromFavorites(recipe) {
    const i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1)
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
