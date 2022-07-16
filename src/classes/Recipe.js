import Ingredient from './Ingredient';

class Recipe {
  constructor(recipeData, ingredientData) {
    this.id = recipeData.id
    this.image = recipeData.image
    this.ingredients = recipeData.ingredients
    this.instructions = recipeData.instructions
    this.name = recipeData.name
    this.tags = recipeData.tags
    this.ingredientData = ingredientData
  }

    getIngredientNames() {
    const matchedIngredientNames = this.ingredients.map(ingredient => {
      const foundIngredient = this.ingredientData.find(
        data => data.id === ingredient.id
      );
      const newObject = Object.assign(foundIngredient, ingredient);
      const newIngredient = new Ingredient(newObject);
      return newIngredient.name
    });
    return matchedIngredientNames
   }

  getCostOfIngredients() {
    const matchedIngredientCost = this.ingredients.map(ingredient => {
      const foundIngredient = this.ingredientData.find(
        data => data.id === ingredient.id
      );
      const newObject = Object.assign(foundIngredient, ingredient);
      const newIngredient = new Ingredient(newObject);
      return newObject.estimatedCostInCents * newObject.quantity.amount
    })
    return matchedIngredientCost
  }

  getCostOfIngredientsInDollars() {
    let ingredientCostInDollars = this.getCostOfIngredients().map(cost => {
      return `$${(cost/100).toFixed(2)}`
    })
    return ingredientCostInDollars
  }

  getCostOfRecipe() {
    const recipeCost = this.getCostOfIngredients().reduce((sum, cost) => {
      return sum += cost
    }, 0);
    return `$${(recipeCost/100).toFixed(2)}`
  }

  returnRecipeInstructions() {
    const instructions = this.instructions.reduce((list, instruction, index) => {
      list[index] = `${instruction.number}: ${instruction.instruction}`
      return list;
    }, []);
    return instructions;
  }

};

export default Recipe;
