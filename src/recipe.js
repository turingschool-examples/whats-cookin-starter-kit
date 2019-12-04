class Recipe {
  constructor(id, name, image, tags, instructions) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.instructions = instructions;
    this.tags = tags;
    // console.log(this.ingredients);
  }



  filterByIngredients() {
  }

  findCostPerRecipe() {
  }

  retrieveInstructions() {
  }
}

module.exports = Recipe;
