class Recipe {
  constructor(dataSetObject) {
    this.id = dataSetObject.id;
    this.image = dataSetObject.image;
    this.ingredients = dataSetObject.ingredients;
    this.instructions = dataSetObject.instructions;
    this.name = dataSetObject.name;
    this.tags = dataSetObject.tags;
  }
  getIngredientNames(dataSet) {
    return this.ingredients.map((ingredient) => {
      for (let i = 0; i < dataSet.length; i++) {
        if (ingredient.id === dataSet[i].id) {
          return dataSet[i].name;
        }
      }
    });
  }
  getDirections() {
    return this.instructions.map((item) => item.instruction);
  }
  getCosts(dataSet) {
    return this.ingredients.map((ingredient) => {
      for (let i = 0; i < dataSet.length; i++) {
        if (ingredient.id === dataSet[i].id) {
          let ingredientObj = new Object();
          let cost = dataSet[i].estimatedCostInCents;
          let name = dataSet[i].name;
          ingredientObj[name] = cost;
          return ingredientObj;
        }
      }
    });
  }
}

module.exports = Recipe;
