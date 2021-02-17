
class Recipe {
  constructor(recipeObject) {
    this.id = recipeObject.id;
    this.name = recipeObject.name;
    this.image = recipeObject.image;
    this.ingredients = recipeObject.ingredients;
    this.instructions = recipeObject.instructions;
    this.tags = recipeObject.tags;
  }

  returnIngredients() {
    return this.ingredients.map(ingredient => ingredientsData.find(i => i.id === ingredient.id).name);
  }

  returnTotalCost() {
    let costs = this.ingredients.map(ingredient => ingredientsData.find(i => i.id === ingredient.id).estimatedCostInCents * ingredient.quantity.amount);
    let totalCost = costs.reduce((total, currentValue) => total + currentValue);
    let dollarCost = totalCost / 100;
    let roundedCost = Math.round(dollarCost * 100) / 100
    return roundedCost;
  }

  returnInstructions() {
    return this.instructions.map(instruction => `Step ${instruction.number}: ${instruction.instruction} `);
  }

}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
