const recipes = require('../test/Data');
const ingredients = require('../test/Data');
const allRecipes = recipes.dummyRecipeData;
const allIngredients = ingredients.dummyIngredientData;
const Recipe = require('./Recipe');

class RecipeRepository {
  constructor(recipeArray) {
    this.recipes = recipeArray;
  }

  filterRecipeByTag(tag1, tag2, tag3) {
    return this.recipes.filter(recipe => recipe.tags.includes(tag1) || recipe.tags.includes(tag2) || recipe.tags.includes(tag3))
  }

  filterRecipeByName(name) {
    return this.recipes.filter(recipe => recipe.name.includes(name));
  }

  filterRecipeByIngredients(ingredient) {
  // let inputedObject = allIngredients.filter(ingredients => ingredients.name === ingredient);
  // return inputedObject[0];
  return this.recipes.filter(recipe => recipe.ingredients.id === ingredient)
  // let returnedId = inputedObject.filter(ingredient => ingredient.id)
  // let id =
  // return inputedObject
  // return this.recipes.filter(recipe => recipe.name.includes(id))
  // return allRecipes.filter(recipe => recipe.ingredients.includes(returnedId))
  }

}


module.exports = RecipeRepository;


//this.recipes.map(ingredient =>
