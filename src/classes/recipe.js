class Recipe {
    constructor(recipeData, ingredientsData) {
        this.id = recipeData.id
        this.image = recipeData.image
        this.ingredients = recipeData.ingredients
        this.instructions = recipeData.instructions
        this.name = recipeData.name
        this.tags = recipeData.tags
        this.ingredientsData = ingredientsData
    }
    getIngredientsName(name) {
        return this.ingredients.filter(ingredient => ingredient.name === name);
        
    }
    getIngredientsName(name) {
        return this.ingredients.filter(ingredient => ingredient.name === name);
    }
    
      calculateIngredientsCosts() {
        let total = 0;
        this.ingredients.forEach(ingredient => {
        const ingredientData = this.ingredientsData.find(
        i => i.id === ingredient.id);
          if (ingredientData) {
        total += ingredient.quantity.amount * ingredientData.estimatedCostInCents;
    }
    });
    
        return `$${(total / 100).toFixed(2)}`;
      
    }

    returnInstructions() {
        return this.instructions.map(step => {
        return `Step ${step.number}: ${step.instruction}`
        })
    }
}
    




export default Recipe
