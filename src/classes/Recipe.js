import Ingredient from './Ingredient.js';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  returnIngredientList() {
    return this.ingredients.map(ingredient =>
      `${ingredient.amount}) ${ingredient.unit} ${ingredient.name}`
    )
  };

  returnTotalCost() {
    const cost = this.ingredients.reduce((acc, ingredient) => {
      acc += ingredient.calculateCost();
      return acc;
    }, 0)
    return cost.toFixed(2);
  }

  returnInstructions() {
    return this.instructions.map(instruction => `${instruction.instruction}`)
  };
}


export default Recipe;
