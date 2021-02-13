
class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients.map(ingredient =>
      new Ingredient(ingredient));
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;

  }

  getIngredients() {
    const ingredients = this.ingredients.map(recipeIngredient => {
      recipeIngredient.nameObj = this.ingredientsData.find(ingredient => {
        return ingredient.id === recipeIngredient.id;
      });
      return recipeIngredient;
    });
    return ingredients;
  }

  getCost() {
    const costInCents = this.ingredients.reduce((acc, recipeIngredient) => {
      acc += recipeIngredient.amount * this.ingredientsData[
        this.ingredientsData.findIndex(ingredient =>
          ingredient.id === recipeIngredient.id)].estimatedCostInCents;
      return acc;
    }, 0);
    return (costInCents / 100).toFixed(2);
  }

  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;
