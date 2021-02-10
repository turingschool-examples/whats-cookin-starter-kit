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
        const ingredientArr = []
        for (let i = 0; i < testIngredients.length; i++) {
            const single = testIngredients[i];
            this.ingredients.forEach(function(ingredient) {
                if(ingredient.id === single.id) {
                    ingredientArr.push(single.name);
                    }
                }) 
        }
        return ingredientArr;
    }
    returnTotalCost() {
        let totalCost = 0
        for (let i = 0; i < testIngredients.length; i++) {
            const single = testIngredients[i];
            this.ingredients.forEach(function(ingredient) {
                if(ingredient.id === single.id) {
                    console.log(ingredient.quantity.amount)
                    totalCost += (single.estimatedCostInCents * ingredient.quantity.amount);
                    }
                }) 
        }
        totalCost /= 100;
        return totalCost;
    }
    
    returnInstructions() {
        return this.instructions;
    }
}



module.exports = Recipe;
