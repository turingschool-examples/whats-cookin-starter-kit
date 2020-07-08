const Pantry = require('./pantry-class.js');
const Recipe = require('./recipe-class.js');
const usersData = require('../data/users.js');
const ingredientsData = require('../data/ingredients.js');
const recipeData = require('../data/recipes.js');

class User {
  constructor(userData) {
    this.name = this.checkIfString(userData.name);
    this.id = this.checkIfNumber(userData.id);
    this.pantry = new Pantry(userData.pantry);
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  checkIfString(data) {
    return typeof data === 'string' ? data : JSON.stringify(data);
  }

  checkIfNumber(data) {
    return typeof data === 'number' ? data : Date.now();
  }

  chooseFavoriteRecipe(recipe) {
    if (recipe instanceof Recipe) {
      this.favoriteRecipes.push(recipe);
    }
  }

  searchFavoriteRecipesByName(searchInput) {
    let searchResults = this.favoriteRecipes.filter(recipe => {
      let recipeName = recipe.name.toLowerCase();
      return recipeName.includes(searchInput.toLowerCase());
    });

    return searchResults;
  }

  searchFavoriteRecipesByIngredient(searchInput) {
    const ingredientID = this.convertIngredientNameToID(searchInput);
    const searchResults = this.favoriteRecipes.filter(recipe => {
      return this.generateIngredientList(recipe).includes(ingredientID);
    });

    return searchResults; 
  }

  convertIngredientNameToID(ingredientName) {
    let ingredient = ingredientsData.find(ingredient => {
      return ingredient.name ? ingredient.name.includes(ingredientName) : undefined;
    });
    
    return ingredient ? ingredient.id : [];
  }

  generateIngredientList = (recipe) => {
    if (recipe instanceof Recipe) {
      return recipe.requiredIngredients.map(ingredient => ingredient.id);
    } else {
      return [];
    }
  }
}
if (typeof module !== 'undefined') {
  module.exports = User;
}