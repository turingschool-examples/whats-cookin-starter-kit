const Ingredient = require('../src/Ingredient.js');

class User {
  constructor(userData, ingredientsArray) {
    this.name = userData.name
    this.id = userData.id
    this.pantry = userData.pantry.map(ingredient => new Ingredient(ingredient.ingredient, ingredient.amount, ingredientsArray))
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  addRecipeToFavs() {

  }
  addRecipeToCook() {

  }
}

module.exports = User;