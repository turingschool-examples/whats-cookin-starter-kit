class Recipe {
    constructor(recipe) {
        this.id = recipe.id
        this.image = recipe.image
        this.ingredients = recipe.ingredients
        this.instructions = recipe.instructions
        this.name = recipe.name
        this.tags = recipe.tags
    }

    getIngredientIds() {
        let ingredientIds = this.ingredients.map(ingredient => ingredient.id)
        return ingredientIds
    }
    
    determineRecipeIngredients(ingredientData) {
        let ingredients = []
        this.getIngredientIds().forEach(ingredientId => {
            ingredients = [...ingredients, ...ingredientData
            .filter((ingredient) => ingredientId === ingredient.id)]
        });

        const ingredientNames = ingredients.map(ingredient => ingredient.name)
        return ingredientNames;
    }

calculateRecipeCost(ingredientsData) {
    let costCounter = 0
    let testArray = []
    let names = this.determineRecipeIngredients(ingredientsData)
    console.log(names)
        ingredientsData.forEach(ingredient => {
            ingredient === ingredientsData.name
            testArray.push(ingredientsData.estimatedCostInCents)
    }) 
  }

  returnInstructions() {
    const retrieveInstr = this.instructions.reduce((acc, currentInstructions) => {
        const instructions = `${currentInstructions.number}: ${currentInstructions.instruction}`
        acc.push(instructions)
        return acc
    },[])
    return retrieveInstr
    }
}

export default Recipe;

