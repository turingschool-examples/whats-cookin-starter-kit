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
    this.recipeToBuild.unshift(recipe);
    if (this.recipeToBuild.length > 1) {
      this.recipeToBuild.pop()
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
