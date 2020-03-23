class Recipe {
  constructor(recipeId, name, ingredientsRequired, instructions, type, totalCost) {
    this.recipeId = recipeId;
    this.name = name;
    this.ingredientsRequired = ingredientsRequired;
    this.instructions = instructions;
    this.type = type;
    this.totalCost = totalCost;
  }
  calculateTotalCost() {
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
