const Recipe = require('./recipe-class.js');
const ingredientData = require('../data/ingredients');

class Pantry {
  constructor(pantry) {
    this.supplies = [];
    Array.isArray(pantry) ? this.checkIngredients(pantry) : () => {};
  }

  checkIngredients = (pantry) => {
    return pantry.forEach(ingredient => {
      if (typeof ingredient.ingredient === 'number' &&
        typeof ingredient.amount === 'number') {
        this.supplies.push(ingredient);
      }
    });
  }

  compareIngredients(id, ingredient) {
    return id.id === ingredient.ingredient ? true : false;
  }

  checkPantryForRecipeIngredients = (recipe) => {
    if (recipe instanceof Recipe === false) {
      return 'This is not a recipe'
    }
    let supplyList = [];
    
    for (let i = 0; i < recipe.requiredIngredients.length; i++) {
      this.supplies.forEach(ingredient => {
        if (this.compareIngredients(recipe.requiredIngredients[i], ingredient)) {
          supplyList.push(ingredient);
        }
      }); 
    }
    return supplyList
  }

  findIngredientIds = (recipe) => {
    return recipe.requiredIngredients.map(ingredient => ingredient.id)
  } 

  findIngredientName(id) {
    if (typeof id === 'number') {
      let ingredient = ingredientData.find(item => item.id === id);
      return ingredient.name;
    }
  }

  findMissingIngredients = (recipe) => {
    if (recipe instanceof Recipe === false) {
      return 'This is not a recipe'
    }

    let supplyList = this.checkPantryForRecipeIngredients(recipe); 
    let message = [];
    
    recipe.requiredIngredients.forEach(ingredient => {
      let pantryItem = supplyList.find(item => item.ingredient === ingredient.id);
      let qtyDifference = pantryItem ? ingredient.amount - pantryItem.amount : ingredient.amount;
      
      qtyDifference > 0 ? message.push(`${qtyDifference} ${this.findIngredientName(ingredient.id)}`) : '';
    });
    if (message.length > 0) {
      return `You still need ${message.join(' and ')} to make ${recipe.name}`
    } 
  }
}

module.exports = Pantry;