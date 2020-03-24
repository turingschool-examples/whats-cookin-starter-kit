class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image; 
    this.ingredients = recipeDetails.ingredients;
    this.instructions = recipeDetails.instructions;
    this.name = recipeDetails.name;
    this.tags = recipeDetails.tags;

  }

  getTotalCost() {
    // ingredient cost * amount of ingredients needed = total cost returned
  }
}

module.exports = Recipe; 