import ingredientsData from '../data/ingredients';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  };

  getIngredients() {
    const ingredientsListIDs = this.ingredients.map((ingredient) => {
      return ingredient.id;
    })
    const ingredientNames = ingredientsData.filter((ingredient) => {
      return ingredientsListIDs.includes(ingredient.id)
    }).map((ingredient) => {
      return ingredient.name;
    });
    return ingredientNames;
  };

  getIngredientsCost() {
    const ingredientsListIDs = this.ingredients.map((ingredient) => {
      return ingredient.id;
    })
    const ingredientCost = ingredientsData.filter((ingredient) => {
      return ingredientsListIDs.includes(ingredient.id)
    }).map((ingredient) => {
      return ingredient.estimatedCostInCents
    });

    let total = 0

    ingredientCost.forEach((ingredient, index) => {
      total += (ingredient * this.ingredients[index].quantity.amount)
    })

    return (total / 100).toFixed(2)
  };

  getInstructions() {
    let recipeInstructions = '';
    const instructionsString = this.instructions.forEach((instruction) => {
      recipeInstructions += `Step ${instruction.number}: ${instruction.instruction}`
    })

    return recipeInstructions
  };
};

export default Recipe;