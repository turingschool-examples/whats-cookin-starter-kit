// let ingredientsData = require('../data/ingredients')
//^Having this line breaks scripts.js

class User {
  constructor(usersData) {
    this.name = usersData.name
    this.id = usersData.id
    this.pantry = usersData.pantry
    this.favoriteRecipes = []
    this.recipesToCook = []
    this.groceryList = []
  }

  toggleFavoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      let index = this.favoriteRecipes.indexOf(recipe)
      this.favoriteRecipes.splice(index, 1);
    } else {
      this.favoriteRecipes.push(recipe)
    }
  }

  toggleRecipeToCook(recipe) {
    if (this.recipesToCook.includes(recipe)) {
      let index = this.recipesToCook.indexOf(recipe)
      this.recipesToCook.splice(index, 1);
    } else {
      this.recipesToCook.push(recipe)
    }
  }

  getSavedRecipes() {
    return this.favoriteRecipes.concat(this.recipesToCook)
  }

  searchRecipeByNameOrIng(userQuery) {
    userQuery = userQuery.toLowerCase()
    let savedRecipes = this.getSavedRecipes()
    return savedRecipes.filter(recipe => {
      if (recipe.name.toLowerCase().includes(userQuery)) {
        return recipe
      } else if (this.getRecipeIngredient(userQuery, recipe)) {
        return recipe
      }
    })
  }

  getRecipeIngredient(userQuery, recipe) {
    let checkedIngredient = recipe.ingredients.filter(ingredient => {
      let item = ingredientsData.filter(ingredientName => {
        if (ingredientName.id === ingredient.id && ingredientName.name.toLowerCase().includes(userQuery.toLowerCase())) {
          return ingredientName
        }
      })
      if (item.length > 0) {
        return ingredient
      }
    })
    return checkedIngredient.length > 0
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
