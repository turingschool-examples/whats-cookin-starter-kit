class Pantry {
  constructor(ary) {
    this.pantryList = ary;
  }

  missingIngredients(recipeIngredients) {
    let missingIngredients = [];
    let query = this.pantryList.filter(pantryItem => recipeIngredients.map(x => x.id).includes(pantryItem.ingredient))
    console.log(query);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
