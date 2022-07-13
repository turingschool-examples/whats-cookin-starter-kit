class Recipe {
  constructor(recipeInfo) {
    this.id = recipeInfo.id;
    this.image = recipeInfo.image;
    this.ingredients = recipeInfo.ingredients;
    this.instructions = recipeInfo.instructions;
    this.name = recipeInfo.name;
    this.tags = recipeInfo.tags;
  }

  getIngredients() {
    return this.ingredients;
  }
}

export default Recipe;
