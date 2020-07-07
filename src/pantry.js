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
}

module.exports = Pantry;