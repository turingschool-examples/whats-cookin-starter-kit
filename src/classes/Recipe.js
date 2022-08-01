class Recipe {
  constructor(recipeDetails = {}) {
    this.id = recipeDetails.id || this.generateRandomId();
    this.name = recipeDetails.name;
    this.imageURL = recipeDetails.imageURL;
    this.portions = recipeDetails.portions || [];
    this.instructions = recipeDetails.instructions || [];
    this.tags = recipeDetails.tags || [];
  }
  generateRandomId() {
    return Math.floor(Math.random() * 1000);
  }

  getPortionInfo() {
    return this.portions.map((portion) => {
      return {
        name: portion.name, 
        amount: portion.amount,
        unit: portion.unit
      }
    });
  }

  getPortionCosts() {
    const ingredientsCost = this.portions.map((portion) => {
      return (portion.amount * portion.cost).toFixed(2) / 100;
    });
    return ingredientsCost;
  }

  getInstructions() {
    return this.instructions;
  }

  calcTotalRecipeCost() {
    const storedIngredients = this.getPortionCosts();
    const reducedIngredientCost = storedIngredients.reduce(
      (sumOfPortionCosts, currentPortionCost) => {
        sumOfPortionCosts += currentPortionCost;
        return sumOfPortionCosts;
      },
      0
    );
    return reducedIngredientCost;
  }
}

export default Recipe;
