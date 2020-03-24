const Pantry = require('../classes/Pantry');

class User {
  constructor(person) {
    this.id = person.id;
    this.name = person.name;
    this.pantry = person.pantry;
    this.favRecipes = [];
    this.cookBook = [];
  }

  createPantry() {
    const pantry = new Pantry(this);

    return pantry;
  }

  addFavRecipe(recipe) {
    if(!this.favRecipes.includes(recipe)) {
      this.favRecipes.push(recipe);
    }
  }

  removeFavRecipe(recipe) {
    let deleteRecipe = this.favRecipes.indexOf(recipe);
    this.favRecipes.splice(deleteRecipe, 1);
  }

  addToCookBook(recipe) {
    if(!this.cookBook.includes(recipe)) {
      this.cookBook.push(recipe);
    }
  }

  removeFromCookBook(recipe) {
    let deleteRecipe = this.cookBook.indexOf(recipe);
    this.cookBook.splice(deleteRecipe, 1);
  }
}

module.exports = User;
