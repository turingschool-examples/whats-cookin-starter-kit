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
  //this has a very obvious sad path of getting used in the wrong order
  //maybe pantry should change every ingredient key to be ID?

  checkPantryForRecipeIngredients = (recipe) => {
    let supplyList = [];
    
    if (recipe instanceof Recipe) {
      for (let i = 0; i < recipe.requiredIngredients.length; i++) {
        this.supplies.forEach(ingredient => {
          if (this.compareIngredients(recipe.requiredIngredients[i], ingredient)) {
            supplyList.push(ingredient);
          }
        }); 
      }
      return supplyList
    } else {
      return 'This is not a recipe'
    }
  }

  findIngredientIds = (recipe) => {
    return recipe.requiredIngredients.map(ingredient => ingredient.id)
  } 

  findIngredientName(id) {
    let ingredient = ingredientData.find(item => item.id === id);
    return ingredient.name;
  }
  //TEST 
  findMissingIngredients = (recipe) => {
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