try {
  ingredientsData = require('../data/ingredients.js');
} catch (e) {
  let ingredientsData;
}

class Recipe {
  constructor(recipe) {
    this.id = this.createId(recipe.id);
    this.image = recipe.image || 'https://spoonacular.com/recipeImages/698701-556x370.jpg';
    this.requiredIngredients = recipe.ingredients || [`no ingredients are listed for this recipe`];
    this.instructions = recipe.instructions || ['No instructions were provided, <br>I guess it\'s one of those make it up as you go cakes <br>🤷🏽‍♀️'];
    this.name = recipe.name || 'untitled';
    this.tags = recipe.tags || [];
  }

  createId(data) {
    return typeof data === 'number' ? data : Date.now();
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
    console.log(this.ingredientList);
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