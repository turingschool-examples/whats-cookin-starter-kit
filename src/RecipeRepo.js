//const data = require('../data/recipes');
//const recipeData = data.recipeData;
//const userData = require('../data/users');
const Recipe = require('./Recipe');
const User = require('./User');

class RecipeRepo {
  constructor(recipeData, userData, ingredientsData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe, ingredientsData));
    this.user = new User(userData);
  }

  matchTags(tags) {
    this.recipes = this.recipes.filter(recipe => {
      return tags.filter(tag => {
        return recipe.tags.includes(tag);
      });
    });
  }

  matchIngredient(ingredientId) {
    this.recipes = this.recipes.filter(recipe => recipe.ingredients.filter(ingredient => ingredient.id === ingredientId));
  }

  matchName(name) {
    this.recipes = this.recipes.filter(recipe => recipe.name === name);
  }
}

module.exports = RecipeRepo;
