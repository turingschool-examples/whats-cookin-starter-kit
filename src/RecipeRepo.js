const data = require('../data/recipes');
const recipeData = data.recipeData;
const Recipe = require('./Recipe');

class RecipeRepo {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
  }
  matchTag(tag) {
    this.recipes = this.recipes.filter(recipe => recipe.tags.includes(tag));
  }
  matchIngredient(ingredientId) {
    this.recipes = this.recipes.filter(recipe => recipe.ingredients.includes(Object.values(ingredientId)));
  }
}

module.exports = RecipeRepo;
