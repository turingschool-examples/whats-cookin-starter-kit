import Ingredient from "./Ingredient"
// const recipeDataSet = require('/src/data/recipes.js');

class Recipe {
    constructor(recipeData, ingDataSet) {
        this.id = recipeData.id
        this.image = recipeData.image
        this.ingredients = recipeData.ingredients
        this.instructions = recipeData.instructions
        this.name = recipeData.name
        this.tags = recipeData.tags
        this.ingData = ingDataSet
    }

    determineIngredientNames() {
        let listOfNames = []

        let ingredientNames = this.ingredients.forEach(ingredient => {
            this.ingData.forEach(element => {
                if (element.id === ingredient.id) {
                    listOfNames.push(`${element.name}: ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}`)
                }
            })
        })
        return listOfNames.join('\n')
    }

    determineCostOfAllIngredients() {
        let totalCost = 0
        let getTotalCost = this.ingredients.forEach(ingredient => {
            this.ingData.forEach(element => {
                if (ingredient.id === element.id) {
                
                    totalCost += ingredient.quantity.amount * element.estimatedCostInCents
                      
                }
            })
        })
        return `$${(totalCost/100).toFixed(2)}`
    }


    listDirections() {
        let steps = this.instructions.map(step => {
            return `Step ${step.number}: ${step.instruction}`
        }).join("\n")
        return steps
    }
}

export default Recipe;