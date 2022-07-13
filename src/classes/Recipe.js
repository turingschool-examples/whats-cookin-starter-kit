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

  getCostofIngredients() {
    const matchedIngredientCost = this.ingredients.map(ingredient => {
      const foundIngredient = this.ingredientData.find(
        data => data.id === ingredient.id
      );
      const newObject = Object.assign(foundIngredient, ingredient);
      const newIngredient = new Ingredient(newObject);
      return (newObject.estimatedCostInCents * newObject.quantity.amount)
    })
    return matchedIngredientCost
  }

  getCostofRecipe() {
    const recipeCost = this.getCostofIngredients().reduce((sum, cost) => {
      return sum += cost
    }, 0);
    return `$${(recipeCost/100).toString()}`
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
