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
    // instantiates a pantry class and the this.pantry will be the argument of the new pantry object instance.
  }

  addFavRecipe() {
    // add the newly clicked on favRecipe to this.favRecipe array
  }

  removeFavRecipe() {
    // remove the clicked on favRecipe from this.favRecipe array
  }

  addToCookBook() {
    // add the newly clicked on recipe to this.cookBook array
  }

  removeFromCookBook() {
    // remove the clicked on recipe from this.cookBook array
  }
}

module.exports = User;
