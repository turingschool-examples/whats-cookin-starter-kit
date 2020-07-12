//Note: the below line breaks scripts.js
//If you comment it out, scripts.js works, but test no longer works
//Look into this more (other groups have same problem)
const Pantry = require('../src/Pantry');

class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = new Pantry(pantry);
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.groceryList = [];
  }

  toggleFavoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      let index = this.favoriteRecipes.indexOf(recipe)
      this.favoriteRecipes.splice(index, 1);
    } else {
      this.favoriteRecipes.push(recipe);
    }
  }

  toggleRecipeToCook(recipe) {
    if (this.recipesToCook.includes(recipe)) {
      let index = this.recipesToCook.indexOf(recipe);
      this.recipesToCook.splice(index, 1);
    } else {
      this.recipesToCook.push(recipe);
    }
  }

  getSavedRecipes() {
    return this.favoriteRecipes.concat(this.recipesToCook);
  }

  searchByRecipeOrIngr(userQuery, ingredientsList) {
    userQuery = userQuery.toLowerCase();
    let savedRecipes = this.getSavedRecipes();
    let filteredRecipes = savedRecipes.filter(recipe => {
      if (recipe.name.toLowerCase().includes(userQuery) || recipe.ingredients.find(ingredient => this.getIngredientName(ingredientsList, ingredient.id).includes(userQuery))) {
        return recipe;
      };
    });
    return filteredRecipes;
  }

  getIngredientName(ingredientsList, ingredientId) {
    const matchingIngredient = ingredientsList.find(ingredient => ingredient.id === ingredientId);
    if (matchingIngredient === undefined) {
      return '';
    }
    return matchingIngredient.name;
  }
}



if (typeof module !== 'undefined') {
  module.exports = User;
}
