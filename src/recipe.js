const testIngredients = require('../tests/test-ingredients')

class Recipe {
    constructor(recipe) {
        this.id = recipe.id,
        this.name = recipe.name,
        this.ingredients = recipe.ingredients,
        this.instructions = recipe.instructions,
        this.tags = recipe.tags,
        this.image = recipe.image
    }
    returnIngredientNames()  {
        return this.ingredients
    }
}



module.exports = Recipe;
