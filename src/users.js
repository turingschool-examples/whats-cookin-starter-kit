class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.myMenu = [];
    this.recipeToBuild = [];
  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  addToMyMenu(recipe) {
    this.myMenu.push(recipe);
  }

  addToRecipeToBuild(recipe) {
    this.recipeToBuild.push(recipe);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
