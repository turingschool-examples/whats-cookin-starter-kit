// const Ingredient = require('../src/Ingredient.js');

class User {
  constructor(userData, ingredientsArray) {
    this.name = userData.name
    this.id = userData.id
    this.pantry = userData.pantry.map(pantryItem => new Ingredient(pantryItem.ingredient, pantryItem.amount, ingredientsArray))
    this.favoriteRecipes = JSON.parse(localStorage.getItem(`${this.id}-favorites`)) || [];
    this.recipesToCook = [];
  }
  addRecipeToFavs(recipe) {
    if (!this.favoriteRecipes.includes(recipe.id)) {
      this.favoriteRecipes.push(recipe.id)
      localStorage.setItem(`${this.id}-favorites`, JSON.stringify(this.favoriteRecipes))
    }
  }
  addRecipeToCook() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}