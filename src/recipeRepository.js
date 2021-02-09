const recipes = require('../data/recipes');
const ingredients = require('../data/ingredients');
const allRecipes = recipes.recipeData;
const allIngredients = ingredients.ingredientsData;
const Recipe = require('./Recipe');

class RecipeRepository {
  constructor(recipeArray) {
    this.recipes = recipeArray;
  }

  filterRecipeByTag(tag1) {
    // return this.recipes.map(recipe => this.recipes.filter(i => this.recipes.tags.includes(tag1)));
    // let returnedTags = this.recipes.map(recipe => )
    for(var i=0;i<this.recipes.length;i++) {
      let filteredRecipe = this.recipes.filter(recipe => this.recipes[i].tags.includes(tag1))
      return filteredRecipe;
    }
  }
}

module.exports = RecipeRepository;

// || this.recipes.tags.includes(tag2)
