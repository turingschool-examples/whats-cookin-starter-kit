class Recipe {
    constructor(recipeDetails) {
        this.id = recipeDetails.id;
        this.name = recipeDetails.name;
        this.image = recipeDetails.image;
        this.portions = recipeDetails.portions;
        this.instructions = recipeDetails.instructions;
        this.tags = recipeDetails.tags;

    }
    showIngredientsNeeded() {
        return this.portions.map((portion) => {
            return portion.name;  
        });
    }
    calcTotalIngredientCost() {
        const ingredientsCost = this.portions.map((portion) => {
            return (portion.amount * portion.cost).toFixed(2) / 100;
        });
        return ingredientsCost;
    }
    calcRecipeCost() {
        const storedIngredients = this.calcTotalIngredientCost();
        const reducedIngredientCost = storedIngredients.reduce((acc, cur) => {
            acc += cur;
            return acc;
        }, 0);
        return reducedIngredientCost;
    }
    returnRecipeSteps() {
        return this.instructions
    }
  }

export default Recipe;