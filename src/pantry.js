class Pantry {
  constructor(id, items) {
    this.userId = id;
    this.items = items;
    this.selectedRecipe = [];
  }
}

module.exports = Pantry