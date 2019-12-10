class Pantry {
  constructor(ary) {
    this.pantryList = ary;
  }

  missingIngredients(recipeIngredients) {
    let recipeIds = recipeIngredients.map(x => x.id);
    let pantryIds = this.pantryList.map(x => x.ingredient);
    return recipeIds.filter(x => !pantryIds.includes(x));
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
