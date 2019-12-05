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
    console.log(this.image);
  }

  retrieveInstructions() {
  }
}

module.exports = Recipe;
