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
    calculateIngredientsCosts() {
        const total = this.ingredients.reduce((sum, ingredient) => {
        this.ingredientsData.forEach(element => {
        if (ingredient.id === element.id) {
        sum += ingredient.quantity.amount * element.estimatedCostInCents
        }
    })
        return sum }, 0)

        return `$${(total/100).toFixed(2)}`
    }
    
    returnInstructions() {
        return this.instructions.map(step => {
        return `Step ${step.number}: ${step.instruction}`
        })
    }
}

export default Recipe