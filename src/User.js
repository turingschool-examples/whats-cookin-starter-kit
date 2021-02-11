// const Ingredient = require('../src/Ingredient.js');

class User {
  constructor(userData, ingredientsArray) {
    this.name = userData.name
    this.id = userData.id
    this.pantry = userData.pantry.map(pantryItem => new Ingredient(pantryItem.ingredient, pantryItem.amount, ingredientsArray))
    this.favoriteRecipes = JSON.parse(localStorage.getItem(`${this.id}-favorites`)) || [];
    this.recipesToCook = JSON.parse(localStorage.getItem(`this${this.id}-recipes-to-cook}`)) || [];
  }
  addRecipeToFavs(recipe) {
    if (!this.favoriteRecipes.includes(recipe.id)) {
      this.favoriteRecipes.push(recipe.id)
      localStorage.setItem(`${this.id}-favorites`, JSON.stringify(this.favoriteRecipes))
    }
  }
  addRecipeToCook(recipe) {
    if (!this.recipesToCook.includes(recipe.id)) {
      this.recipesToCook.push(recipe.id)
      localStorage.setItem(`${this.id}-recipes-to-cook`, JSON.stringify(this.recipesToCook))
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}