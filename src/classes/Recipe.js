class Recipe {
    constructor(recipeDetails) {
        this.id = recipeDetails.id || this.generateRandomId();
        this.name = recipeDetails.name;
        this.image = recipeDetails.image;
        this.portions = recipeDetails.portions || [];
        this.instructions = recipeDetails.instructions || [];
        this.tags = recipeDetails.tags || [];

    }
    generateRandomId() {
        return Math.floor(Math.random() * 1000);
    }
    
    getPortionNames() {
        return this.portions.map((portion) => {
            return portion.name;  
        });
    }
    getPortionCosts() {
        const ingredientsCost = this.portions.map((portion) => {
            return (portion.amount * portion.cost).toFixed(2) / 100;
        });
        return ingredientsCost;
    }
    calcTotalRecipeCost() {
        const storedIngredients = this.getPortionCosts();
        const reducedIngredientCost = storedIngredients.reduce((sumOfPortionCosts, currentPortionCost) => {
            sumOfPortionCosts += currentPortionCost;
            return sumOfPortionCosts;
        }, 0);
        return reducedIngredientCost;
    }
    getInstructions() {
        return this.instructions
    }
  }

export default Recipe;