import Ingredient from './ingredientClass';

class Recipe {
  
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.sum = 0;
  };

  retrieveIngredientInfo() {
    const currentIngredients = this.ingredients.map(i => {
      let newIng = new Ingredient(i);
      newIng.name = newIng.returnIngredientName(i.id);
      newIng.costInCents = newIng.returnIngredientCost(i.id);
      newIng.quantity = i.quantity;
      return newIng;
    });
    this.ingredients = currentIngredients;
    return this.ingredients;
  };

  returnCostOfIngredients() {
    const total = this.ingredients.reduce((total, cur) => {
      total += (cur.costInCents * cur.quantity.amount);
      return total;
    }, 0);
    this.sum = (total / 100).toFixed(2);
    return this.sum;
  };

  giveInstructionsForRecipe() {
    const steps = this.instructions.map(instruction => {
      return `Step ${instruction.number}: ${instruction.instruction}`
    });
    this.instructions = steps;
    return this.instructions;
  };
};

export default Recipe;