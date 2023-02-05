const recipeData = require('../data/recipes');

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
        let ingredientIds = this.ingredients.reduce((acc, ingredient) => {
            if(!acc.include(ingredient.id)) {
                acc.push(ingredient.id)
            }
            return acc
        },[])
        return ingredientIds
    }

    determineRecipeIngredients() {
        //Goal: Display the NAMES of ingredients
        //Input: is an array of objects with id's, quantity, amount, unit
        //Output: Array of ingredient names
        //Action: Iterate through the recipe array and use a method to
        //        push the "id" property into another array
        //        
    }
}

export default Recipe