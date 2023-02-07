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
    calculateIngredientsName() {

    }
    calculateIngredientsCosts() {

    }
    returnIngredients() {

    }
}

/* It should have methods to:
Determine the names of ingredients needed
Get the cost of its ingredients
Return its directions / instructions */