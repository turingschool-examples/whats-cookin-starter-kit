import RecipeRepository from "./RecipeRepository";
import Ingredient from "./Ingredient";


class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.ingredients = recipeDetails.ingredients;
    this.instructions = recipeDetails.instructions;
    this.name = recipeDetails.name;
    this.tags = recipeDetails.tags;
    this.ingredientsNeeded;
  }
  
  getAllIngredients(ingredients) {
    const allIngredients = ingredients.map((ingredient) => {
        return new Ingredient(ingredient);
    });
    return allIngredients;
  }

  buildIngredientsNeeded(ingredients) {
    const ingredientsHave = this.getAllIngredients(ingredients);
    const ingredientIds = this.ingredients.map(ingredient => ingredient.id);
    this.ingredientsNeeded = ingredientIds.map(ingredientId => {
      return ingredientsHave.find(ingredientObj => ingredientObj.id === ingredientId);
    }); 
  }

  getTotalCost() {
    const costsInCents = this.ingredientsNeeded.map(ingredient => ingredient.estimatedCostInCents);
    const totalCost = costsInCents.reduce((acc, cents) => {
      return acc += cents;
    }, 0);
   return `$${totalCost / 100}`;
  }

  returnInstructions() {
    return this.instructions;
  }
}

export default Recipe;
