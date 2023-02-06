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
        let ingredientIds = this.ingredients.reduce((ids, ingredient) => {
            console.log(ids)
            if(!ids.includes(ingredient.id)) {
                ids.push(ingredient.id)
            }
            return ids
        },[])
        return ingredientIds
    }

    determineRecipeIngredients() {
        const ingredientIds = this.getIngredientIds()
        const matchNamesWithId = ingredientIds.reduce((namesArray, currentId) => {
       
        },[])
        //Goal: Display the NAMES of ingredients
        //Input: is an array of objects with id's, quantity, amount, unit
        //Output: Array of ingredient names
        //Action: Iterate through the ingredientsData array using reduce
        //        Use another iterator (find) to return matching ID element
        //        return the matching ingredient ID
        //        Push the name into the array and return the names Array
        //        
}

export default Recipe