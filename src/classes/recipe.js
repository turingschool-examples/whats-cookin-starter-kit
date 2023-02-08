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


export default Recipe
