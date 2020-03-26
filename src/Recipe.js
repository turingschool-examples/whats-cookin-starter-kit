
class Recipe {
  constructor(recipeData) {
    this.name = recipeData.name;
    this.id = recipeData.id;
    this.ingredients = recipeData.ingredients;
    this.image = recipeData.image;
    this.instructions = recipeData.instructions;
    this.tags = recipeData.tags;
    this.printedInstructions = undefined;
    this.hasBeenCooked = false;
    this.hasBeenFavorited = false;
    this.ingredientPrices = [];
  }

  calculateCostOfIngredients(allIngredients) {
    let recipeIngredientIds = this.ingredients.map(ingredient => ingredient.id)
    let ingredientAmts = [];
    allIngredients.filter(item => {
      if (recipeIngredientIds.includes(item.id)) {
        return this.ingredientPrices.push(item.estimatedCostInCents);
      }
    });
    this.ingredients.filter(item => {
      if (recipeIngredientIds.includes(item.id)) {
        return ingredientAmts.push(item.quantity.amount);
      }
    });
    let priceOfEach = this.ingredientPrices.map((el, i) => el * ingredientAmts[i]);
    return parseFloat((priceOfEach.reduce((sum, num) => sum += num).toFixed(2)))
  }

  returnInstructions() {
    return this.printedInstructions = this.instructions.map(instruction =>
      instruction.instruction)
  }

  cookRecipe(user, recipe) {
    if (user.checkIngredientAmts(recipe)) {
      this.hasBeenCooked = true;
      return true;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
