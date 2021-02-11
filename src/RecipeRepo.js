const data = require('../data/recipes');
const recipeData = data.recipeData;
const userData = require('../data/users');
const Recipe = require('./Recipe');
const User = require('./User');

class RecipeRepo {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
    this.user = new User(userData);
  }

  matchTag(tag) {
    this.recipes = this.recipes.filter(recipe => recipe.tags.includes(tag));
  }

  matchIngredient(ingredientId) {
    this.recipes = this.recipes.filter(recipe => recipe.ingredients.filter(ingredient => ingredient.id === ingredientId));
  }

  matchName(name) {
    this.recipes = this.recipes.filter(recipe => recipe.name === name);
  }
}

module.exports = RecipeRepo;
