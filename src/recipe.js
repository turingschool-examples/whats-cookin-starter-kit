class Recipe {
    constructor(recipeObj) {
        this.id = recipeObj.id,
        this.name = recipeObj.name,
        this.ingredients = recipeObj.ingredients,
        this.instructions = recipeObj.instructions,
        this.tags = recipeObj.tags
    }
    returnIngredientNames()  {
        console.log(this.ingredients)
        return this.ingredients
    }
}



module.exports = Recipe;