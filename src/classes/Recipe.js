import ingredientsData from '../data/ingredients';
import Ingredient from '../classes/Ingredient'

class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  }

  makeIngredients() {
    const ingredients = ingredientsData.map(ingredient => new Ingredient(ingredient));
    return ingredients;
  }

  returnAllIngredientIDs() {
    const ingredients = this.makeIngredients();
    const allIngredientIDs = ingredients.map(ingredient => ingredient.id);
    return allIngredientIDs;
  }

  returnRecipeIngredientIDs() {
    const ingredientIDs = this.ingredients.map(ingredient => ingredient.id);
    return ingredientIDs;
  }

  returnIngredientNames() {
    const allIngredients = this.makeIngredients();
    const recipeIngredientIDs = this.returnRecipeIngredientIDs();
    const newRecipeIngredients = allIngredients.filter(ingredient => recipeIngredientIDs.includes(ingredient.id));
    const names = newRecipeIngredients.map(ingredient => ingredient.name);
    return names;
  }

  returnIngredientCosts() {
    const allIngredients = this.makeIngredients();
    const recipeIngredientIDs = this.returnRecipeIngredientIDs();
    const newRecipeIngredients = allIngredients.filter(ingredient => (recipeIngredientIDs.includes(ingredient.id)));
    const costs = newRecipeIngredients.map(ingredient => ingredient.estimatedCostInCents);
    const ingredientQuantitiesNeeded = this.ingredients.map(ingredient => ingredient.quantity.amount);
    const multCostByAmt = costs.map((cost, index) => {
      let quantity = ingredientQuantitiesNeeded[index];
      return cost * quantity
    })
    const sumTotalCost = multCostByAmt.reduce((sum, cost) => {
      return sum + cost;
    }, 0)
     const parsedSum = parseFloat((sumTotalCost/100).toFixed(2));
    return parsedSum;
  }

  returnRecipeInstructions() {
    let instructionsParagraph = this.instructions.reduce((wholeString, instruction) => {
      return wholeString += `
      ${instruction.number}) ${instruction.instruction}`
    }, '')
    return instructionsParagraph;
  }

};

export default Recipe;
