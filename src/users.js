class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.myMenu = [];
  }

  addToFavorites(recipe) {
    console.log('favs work')
    this.favoriteRecipes.push(recipe);
  }

  addToMyMenu(recipe) {
    console.log('step 1');
    this.myMenu.push(recipe);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
