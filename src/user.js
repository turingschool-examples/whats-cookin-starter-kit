const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');

class User {
  constructor(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.pantry = new Pantry(obj.pantry)
    this.favorites = [];
    this.mealToCook = []
  }

  addToFavorites() {
    //adds recipe to the favorites array

  }

  removeFromFavorites() {
    // removes recipe from favorites array
  }


  stageMealToCook() {
    //take current meal selection
    //pass it into pantry.validateMeal
    //^ if above equates to true, move meal to meal to cook on user
    //^ if aboce equates to false. run pantry required for meal and return required items.
    //add meal user wants to cook to meal que.
  }

  cookMeal() {
    //run remove item(s) from pantry
    //set meal to cook to an empty []
  }

}

module.exports = User;
