class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  }

  matchIngredients(ingredientData) {
    const ingredientNames = this.ingredients.map(ingredient => {
      const ingredientDataNames = ingredientData.filter(element => element.id === ingredient.id);
      return ingredientDataNames;
    });
    return ingredientNames.flat();
  }
  
  listIngredients(ingredientData) {
    return this.matchIngredients(ingredientData).map(element => element.name);
  }

  listCost(ingredientData) {
    const ingredientCosts = this.matchIngredients(ingredientData).reduce((acc, cv) => {
      acc[cv.id] = cv.estimatedCostInCents;
      return acc;
    }, {});

    const ingredientAmounts= this.ingredients.reduce((acc, cv) => {
      acc[cv.id] = cv.quantity.amount;
      return acc;
    }, {});

    const ingredientKeys = Object.keys(ingredientAmounts);

    const totalCost = ingredientKeys.reduce((acc, cv) => {
      acc += (ingredientAmounts[cv] * ingredientCosts[cv]);
      return acc;
    }, 0);

    return totalCost;
  }

  getInstructions() {
    const instructions = this.instructions.map(step => `${step.number}. ${step.instruction}`)
    return instructions;
  }
}

export default Recipe;