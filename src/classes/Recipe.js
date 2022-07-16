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

  getIngredientsData(ingredientsData) {
    this.ingredients = this.ingredients.map(ingredient => {
      return new Ingredient(ingredient);
    });

    this.ingredients.forEach(ingredient => ingredient.findIngredientInfo(ingredientsData));
  }

  returnIngredientList() {
    return this.ingredients.map(ingredient =>
      `${ingredient.quantityAmount} ${ingredient.quantityUnit} ${ingredient.name}`
    );
  };

  returnTotalCost() {
    const cost = this.ingredients.reduce((recipeCost, ingredient) => {
      recipeCost += ingredient.calculateCost();
      return recipeCost;
    }, 0)
    return cost.toFixed(2);
  }

  returnInstructions() {
    return this.instructions.map(instruction => `${instruction.instruction}`);
  };
}


export default Recipe;
