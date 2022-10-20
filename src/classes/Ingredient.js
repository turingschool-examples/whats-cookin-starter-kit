class Ingredient {
  constructor(ingredientRow) {
    this.ingredientRow = ingredientRow;
  }
  returnIngredient(newId) {
    var name = this.ingredientRow.find((ingredient) => {
      return newId === ingredient.id;
    });
    return name;
  }

  // countEstCost() {
  //   return this.quantity.amount * this.estCost;
  // }
}

module.exports = Ingredient;
