// const Ingredient = require('../src/Ingredient.js');


class User {
  constructor(userData, ingredientsArray, storedFavs, storedRecipesToCook) {
    this.name = userData.name
    this.id = userData.id
    this.pantry = userData.pantry.map(pantryItem => new Ingredient(pantryItem.ingredient, pantryItem.amount, ingredientsArray))
    this.favoriteRecipes = storedFavs ? storedFavs : [];
    this.recipesToCook = storedRecipesToCook ? storedRecipesToCook : [];
  }
  
  addRecipeToFavs(recipe) {
    if (!this.favoriteRecipes.map(recipe => recipe.id).includes(recipe.id)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeRecipeFromFavs(recipe) {
    this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(this.favoriteRecipes.find(savedRecipe => savedRecipe.id === recipe.id)), 1)
  }

  addRecipeToCook(recipe) {
    if (!this.recipesToCook.map(recipe => recipe.id).includes(recipe.id)) {
      this.recipesToCook.push(recipe)
      // localStorage.setItem(`${this.id}-recipes-to-cook`, JSON.stringify(this.recipesToCook))
    }
  }

  removeRecipeToCook(recipe) {
    this.recipesToCook.splice(this.recipesToCook.indexOf(this.recipesToCook.find(savedRecipe => savedRecipe.id === recipe.id)), 1)
  }


}

if (typeof module !== 'undefined') {
  module.exports = User;
}