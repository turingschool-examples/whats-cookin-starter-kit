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
                    listOfNames.push(`${element.name}: ${ingredient.quantity.amount} ${ingredient.quantity.unit}`)
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
                    console.log('amount', ingredient.quantity.amount)
                    console.log('cents', element.costInCents)
                    totalCost += ingredient.quantity.amount * element.estimatedCostInCents
                    // return totalCost
                    // console.log('cost', element.costInCents)
                      console.log('ingredient', ingredient)
                      console.log('element', element)
                }
                //return totalCost
            })
        })
        console.log('cost', totalCost)
        return `$${(totalCost/100).toFixed(2)}`
    }


    listDirections() {
        let steps = this.instructions.map(step => {
            return `Step ${step.number}: ${step.instruction}`
        }).join("\n")
        return steps
    }

    // if ingredientsData.id === recipeData.id
    // return ingredientsData.name

    // method called determineInredientAmount
    // assess if ingredientsdata.id === recipedata.ingredients.id THEN
    // new array 
    // ingredient.amount = recipedata.ingredients.amount
    // redefining the ingredient amount property in ingredient class


    calculateCosts() {
        let totalCost = this.ingredients
        .map(() =>
        Ingredient.cost * this.quantity.amount
        )
        .reduce()


        return totalCost
    }
}

export default Recipe;