const Recipe = require('./recipe.js');
class Pantry {
  constructor(pantry) {
    this.ingredients = [];
    Array.isArray(pantry) ? this.checkIngredients(pantry) : () => {};
  }

  checkIngredients = (pantry) => {
    return pantry.forEach(ingredient => {
      if (typeof ingredient.ingredient === 'number' &&
        typeof ingredient.amount === 'number') {
        this.ingredients.push(ingredient);
      }
    });
  }

  compareIngredients(first, second) {
    return first.ingredient === second.ingredient ? true : false;
  }

  checkPantryForRecipeIngredients = (recipe) => {
    let supplyList = [];
    
    for (let i = 0; i < recipe.requiredIngredients.length; i++) {
      this.ingredients.forEach(ingredient => {
        if (this.compareIngredients(recipe.requiredIngredients[i], ingredient)) {
          supplyList.push(ingredient);
        }
      }); 
    }
    return supplyList
  }
}

module.exports = Pantry;