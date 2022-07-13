import Ingredient from "./ingredient"
// const recipeData = require('src/data/recipes.js');

class Recipe {
    constructor(id, image, ingredients, instructions, name, tags) {
        this.id = id
        this.image = image
        this.ingredients = ingredients
        this.instructions = instructions
        this.name = name
        this.tags = tags
    }

    determineIngredientNames() {
        let ingredientNames = this.ingredients.map(ingredient => ingredient.name)
    }

    // if ingredientsData.id === recipeData.id
    // return ingredientsData.name

    // method called determineInredientAmount
    // assess if ingredientsdata.id === recipedata.ingredients.id THEN
    // new array 
    // ingredient.amount = recipedata.ingredients.amount
    // redefining the ingredient amount property in ingredient class


    calculateCosts() {
        // let totalCost = this.ingredients
        // .map(() =>
        // Ingredient.cost * this.quantity.amount
        // )
        // .reduce()


        // return totalCost
    }
}

export default Recipe;