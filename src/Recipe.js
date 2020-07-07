class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients; //update with names from recipe data file
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  calculateCost() {
    // access ingredients for total of each ingredient
    // access recipes.js for cost of ingredient using id. .find(id === id) return cost
    // multiply these two
    // combine all ingredients in array
    // return cost of all combined ingredients
  }

  returnInstructions() {
    //  return this.ingredients
    // maybe only return
  }
}

module.exports = Recipe;
