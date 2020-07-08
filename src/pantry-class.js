const Recipe = require('./recipe-class.js');
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

  compareIngredients(first, second) {
    return first.ingredient === second.ingredient ? true : false;
  }

  checkPantryForRecipeIngredients = (recipe) => {
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
}

module.exports = Pantry;