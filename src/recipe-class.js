try {
  ingredientsData = require('../data/ingredients.js');
  scripts = require('./scripts');
  createId = scripts.createId;
} catch (e) {
  let scripts
  let createId;
  let ingredientsData;
}

class Recipe {
  constructor(recipe) {
    this.id = createId(recipe.id);
    this.image = recipe.image || 'https://spoonacular.com/recipeImages/698701-556x370.jpg';
    this.requiredIngredients = recipe.ingredients || [`no ingredients are listed for this recipe`];
    this.instructions = recipe.instructions || ['No instructions were provided, <br>I guess it\'s one of those make it up as you go cakes <br>🤷🏽‍♀️'];
    this.name = recipe.name || 'untitled';
    this.tags = recipe.tags || [];
    this.isFavorite = false;  
  }

  giveInstructions() {
    return this.instructions.reduce((list, direction) => {
      return list += `${direction.number}: ${direction.instruction}<br>`
    }, '');
  }

  toggleFavorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  getTotalCost() {
    const ingredientList = this.createIngredientList();

    return ingredientList.reduce((totalPrice, ingredient) => {
      return totalPrice += ingredient.estimatedCostInCents / 100;
    }, 0);
  }

  createIngredientList() {
    return this.requiredIngredients.reduce((ingredientList, ingredient) => {
      return ingredientList.concat(this.checkIngredientMatch(ingredient));
    }, []);
  }

  checkIngredientMatch(recipeIngredient) {
    return ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
  }
}
if (typeof module !== 'undefined') {
  module.exports = Recipe;
}