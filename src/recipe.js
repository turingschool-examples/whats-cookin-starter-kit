class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }
  findIngredients(ingredientData) {
    const recipeIngredients = [];
    this.ingredients.forEach((recipeIngredient) => {
      return recipeIngredients.push(
        ingredientData.find(ingredient => recipeIngredient.id === ingredient.id));
    });
    return recipeIngredients;
  }

  returnIngredientNames(ingredientData) {
    const recipeIngredients = this.findIngredients(ingredientData);
    const ingredientNames = recipeIngredients.map(ingredient => ingredient.name);
    return ingredientNames;
  }

  calculateRecipeCost(ingredientData) {
    const recipeIngredients = this.findIngredients(ingredientData);
    const ingredientCost = recipeIngredients.map(ingredientCost => ingredientCost.estimatedCostInCents);
    const cost = ingredientCost.reduce((totalCost, ingredientCost) => {
      return totalCost + ingredientCost;
    }, 0);
    return Number((cost / 100).toFixed(2));
  }

  returnRecipeInstructions() {
    return this.instructions;
  }
}

if (typeof module !== "undefined") {
  module.exports = Recipe;
}
